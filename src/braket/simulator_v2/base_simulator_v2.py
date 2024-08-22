import sys
from collections.abc import Sequence
from multiprocessing.pool import Pool
from typing import List, Optional, Union
import atexit
import json
import numpy as np
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.ir.jaqcd import DensityMatrix, Probability, StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult

def setup_julia():
    import os
    import sys
    import json
    import warnings

    # don't reimport if we don't have to
    if "juliacall" in sys.modules:
        os.environ["PYTHON_JULIACALL_HANDLE_SIGNALS"] = "yes"
        return sys.modules["juliacall"].Main
    else:
        for k, default in (
            ("PYTHON_JULIACALL_HANDLE_SIGNALS", "yes"),
            ("PYTHON_JULIACALL_THREADS", "auto"),
            ("PYTHON_JULIACALL_OPTLEVEL", "3"),
            # let the user's Conda/Pip handle installing things
            ("JULIA_CONDAPKG_BACKEND", "Null"),
        ):
            os.environ[k] = os.environ.get(k, default)
        # install Julia and any packages as needed
        import juliacall

        jl = juliacall.Main
        jl.seval("using JSON3, BraketSimulator")
        jl_yield = getattr(jl, "yield")
        jl_yield()
        # don't waste time looking for packages
        # which should already be present after this
        os.environ["PYTHON_JULIAPKG_OFFLINE"] = "no"

        return jl

def exit_julia():
    import sys
    jl = sys.modules["juliacall"].Main
    jl_yield = getattr(jl, "yield")
    jl_yield()
    return


def _handle_julia_error(error):
    # we don't import `JuliaError` explicitly here to avoid
    # having to import juliacall on the main thread. we need
    # to call *this* function on that thread in case getting
    # the result from the submitted Future raises an exception
    if type(error).__name__ == "JuliaError":
        python_exception = getattr(error.exception, "alternate_type", None)
        if python_exception is None:
            py_error = error
        else:
            class_val = getattr(sys.modules["builtins"], str(python_exception))
            py_error = class_val(str(error.exception.message))
        raise py_error
    else:
        raise error


def translate_and_run(
    device_id: str, openqasm_ir: OpenQASMProgram, shots: int = 0
) -> str:
    jl        = setup_julia()
    jl_shots  = shots
    jl_inputs = json.dumps(openqasm_ir.inputs) if openqasm_ir.inputs else json.dumps({})
    py_result = ""
    try:
        result = jl.BraketSimulator.simulate(
            device_id,
            openqasm_ir.source,
            jl_inputs,
            jl_shots,
        )
        py_result = str(result)
    except Exception as e:
        _handle_julia_error(e)

    return py_result


def translate_and_run_multiple(
    device_id: str,
    programs: Sequence[OpenQASMProgram],
    shots: Optional[int] = 0,
    inputs: Optional[Union[dict, Sequence[dict]]] = {},
) -> List[str]:
    jl = setup_julia()
    irs = [program.source for program in programs]
    is_single_input = isinstance(inputs, dict) or len(inputs) == 1
    py_inputs = {}
    if (is_single_input and isinstance(inputs, dict)) or not is_single_input:
        py_inputs = [inputs.copy() for _ in range(len(programs))]
    elif is_single_input and not isinstance(inputs, dict):
        py_inputs = [inputs[0].copy() for _ in range(len(programs))]
    else:
        py_inputs = inputs
    full_inputs = []
    for p_ix, program in enumerate(programs):
        if program.inputs:
            full_inputs.append(program.inputs | py_inputs[p_ix])
        else:
            full_inputs.append(py_inputs[p_ix])

    jl_inputs = json.dumps(full_inputs)

    try:
        results = jl.BraketSimulator.simulate(
            device_id,
            irs,
            jl_inputs,
            shots,
        )
        py_results = [str(result) for result in results]
    except Exception as e:
        _handle_julia_error(e)
    return py_results


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device: str):
        self._device = device
        pool = Pool(processes=1)
        pool.apply(setup_julia)
        self._executor = pool
        atexit.register(self._executor.close)
    
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
            jl_result = self._executor.apply(
                translate_and_run,
                [self._device, openqasm_ir, shots],
            )
        except Exception as e:
            _handle_julia_error(e)

        result = GateModelTaskResult.parse_raw_schema(jl_result)
        jl_result = None
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
            jl_results = self._executor.apply(
                translate_and_run_multiple,
                [self._device, programs, shots, inputs],
            )
        except Exception as e:
            _handle_julia_error(e)

        results = [
            GateModelTaskResult.parse_raw_schema(jl_result) for jl_result in jl_results
        ]
        jl_results = None
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
