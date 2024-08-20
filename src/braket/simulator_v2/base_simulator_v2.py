import sys
from collections.abc import Sequence
from concurrent.futures import ProcessPoolExecutor
from typing import List, Optional, Union

import numpy as np
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.ir.jaqcd import DensityMatrix, Probability, StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult
from juliacall import JuliaError

from braket.simulator_v2.julia_import import jl


def translate_and_run(device, openqasm_ir: OpenQASMProgram, shots: int = 0) -> str:
    jl_shots = shots
    jl_inputs = (
        jl.Dict[jl.String, jl.Any](
            jl.Pair(jl.convert(jl.String, k), jl.convert(jl.Any, v))
            for (k, v) in openqasm_ir.inputs.items()
        )
        if openqasm_ir.inputs
        else jl.Dict[jl.String, jl.Any]()
    )
    result = jl.BraketSimulator.simulate._jl_call_nogil(
        device,
        openqasm_ir.source,
        jl_inputs,
        jl_shots,
    )
    py_result = str(result)
    return py_result


def translate_and_run_multiple(
    device,
    programs: Sequence[OpenQASMProgram],
    shots: Optional[int] = 0,
    inputs: Optional[Union[dict, Sequence[dict]]] = {},
) -> List[str]:
    irs = jl.Vector[jl.String]()
    is_single_input = isinstance(inputs, dict) or len(inputs) == 1
    py_inputs = {}
    if (is_single_input and isinstance(inputs, dict)) or not is_single_input:
        py_inputs = [inputs.copy() for _ in range(len(programs))]
    elif is_single_input and not isinstance(inputs, dict):
        py_inputs = [inputs[0].copy() for _ in range(len(programs))]
    else:
        py_inputs = inputs
    jl_inputs = jl.Vector[jl.Dict[jl.String, jl.Any]]()
    for p_ix, program in enumerate(programs):
        irs.append(program.source)
        if program.inputs:
            jl_inputs.append(program.inputs | py_inputs[p_ix])
        else:
            jl_inputs.append(py_inputs[p_ix])

    results = jl.BraketSimulator.simulate._jl_call_nogil(
        device,
        irs,
        jl_inputs,
        shots,
    )
    py_results = [str(result) for result in results]
    return py_results


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device):
        self._device = device
        self._executor = ProcessPoolExecutor(max_workers=1)

    def __del__(self):
        self._executor.shutdown(wait=False)

    def initialize_simulation(self, **kwargs):
        return

    def run_openqasm(
        self,
        openqasm_ir: OpenQASMProgram,
        shots: int = 0,
        batch_size: int = 1,  # unused
    ) -> GateModelTaskResult:
        """Executes the circuit specified by the supplied `openqasm_ir` on the simulator.

        Args:
            openqasm_ir (Program): ir representation of a braket circuit specifying the
                instructions to execute.
            shots (int): The number of times to run the circuit.

        Returns:
            GateModelTaskResult: object that represents the result

        Raises:
            ValueError: If result types are not specified in the IR or sample is specified
                as a result type when shots=0. Or, if StateVector and Amplitude result types
                are requested when shots>0.
        """
        try:
            f = self._executor.submit(
                translate_and_run,
                self._device,
                openqasm_ir,
                shots,
            )
            jl_result = f.result()

        except JuliaError as e:
            _handle_julia_error(e)

        result = GateModelTaskResult.parse_raw_schema(jl_result)
        result.additionalMetadata.action = openqasm_ir

        # attach the result types
        if not shots:
            result = _result_value_to_ndarray(result)
        else:
            result.resultTypes = [rt.type for rt in result.resultTypes]
        return result

    def run_multiple(
        self,
        programs: Sequence[OpenQASMProgram],
        max_parallel: Optional[int] = -1,
        shots: Optional[int] = 0,
        inputs: Optional[Union[dict, Sequence[dict]]] = {},
    ) -> list[GateModelTaskResult]:
        """
        Run the tasks specified by the given IR programs.
        Extra arguments will contain any additional information necessary to run the tasks,
        such as the extra parameters for AHS simulations.
        Args:
            programs (Sequence[OQ3Program]): The IR representations of the programs
            max_parallel (Optional[int]): The maximum number of programs to run in parallel.
                Default is the number of logical CPUs.
        Returns:
            list[GateModelTaskResult]: A list of result objects, with the ith object being
            the result of the ith program.
        """
        try:
            f = self._executor.submit(
                translate_and_run_multiple,
                self._device,
                programs,
                shots,
                inputs,
            )
            jl_results = f.result()

        except JuliaError as e:
            _handle_julia_error(e)

        results = [
            GateModelTaskResult.parse_raw_schema(jl_result) for jl_result in jl_results
        ]
        for p_ix, program in enumerate(programs):
            results[p_ix].additionalMetadata.action = program

        for r_ix, result in enumerate(results):
            # attach the result types
            if not shots:
                results[r_ix] = _result_value_to_ndarray(result)
            else:
                results[r_ix].resultTypes = [rt.type for rt in result.resultTypes]
        return results


def _result_value_to_ndarray(
    task_result: GateModelTaskResult,
) -> GateModelTaskResult:
    """Convert any StateVector or DensityMatrix result values from raw Python lists to the expected
    np.ndarray. This must be done because the wrapper Julia simulator results Python lists to comply
    with the pydantic specification for ResultTypeValues.
    """

    def reconstruct_complex(v):
        if isinstance(v, list):
            return complex(v[0], v[1])
        else:
            return v

    for result_ind, result_type in enumerate(task_result.resultTypes):
        # Amplitude
        if isinstance(result_type.value, dict):
            val = task_result.resultTypes[result_ind].value
            task_result.resultTypes[result_ind].value = {
                k: reconstruct_complex(v) for (k, v) in val.items()
            }
        if isinstance(result_type.type, StateVector):
            val = task_result.resultTypes[result_ind].value
            # complex are stored as tuples of reals
            fixed_val = [reconstruct_complex(v) for v in val]
            task_result.resultTypes[result_ind].value = np.asarray(fixed_val)
        if isinstance(result_type.type, DensityMatrix):
            val = task_result.resultTypes[result_ind].value
            # complex are stored as tuples of reals
            fixed_val = [
                [reconstruct_complex(v) for v in inner_val] for inner_val in val
            ]
            task_result.resultTypes[result_ind].value = np.asarray(fixed_val)
        if isinstance(result_type.type, Probability):
            val = task_result.resultTypes[result_ind].value
            task_result.resultTypes[result_ind].value = np.asarray(val)

    return task_result


def _handle_julia_error(julia_error: JuliaError):
    try:
        print(julia_error, flush=True)
        python_exception = getattr(julia_error.exception, "alternate_type", None)
        if python_exception is None:
            error = julia_error
        else:
            class_val = getattr(sys.modules["builtins"], str(python_exception))
            error = class_val(julia_error.exception.message)
    except Exception:
        raise julia_error
    raise error
