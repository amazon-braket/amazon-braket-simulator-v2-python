import sys
from collections.abc import Sequence
from typing import Optional, Union

import numpy as np
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.ir.jaqcd import DensityMatrix, Probability, StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult
from juliacall import JuliaError

from braket.simulator_v2.julia_import import jl


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device):
        self._device = device

    def initialize_simulation(self, **kwargs):
        return

    def _openqasm_to_jl(self, openqasm_ir: OpenQASMProgram):
        # convert to the Julia OpenQasmProgram type for dispatch
        jl_braket_schema_header = jl.BraketSimulator.braketSchemaHeader(
            jl.convert(jl.String, openqasm_ir.braketSchemaHeader.name),
            jl.convert(jl.String, openqasm_ir.braketSchemaHeader.version),
        )
        if openqasm_ir.inputs:
            jl_inputs = jl.Dict(
                [
                    (
                        jl.convert(jl.String, input_key),
                        (
                            jl.convert(jl.String, input_val)
                            if isinstance(input_val, str)
                            else jl.convert(jl.Number, input_val)
                        ),
                    )
                    for (input_key, input_val) in openqasm_ir.inputs.items()
                ]
            )
        else:
            jl_inputs = jl.nothing
        jl_source = jl.convert(jl.String, openqasm_ir.source)
        return jl.BraketSimulator.OpenQasmProgram(
            jl_braket_schema_header,
            jl_source,
            jl_inputs,
        )

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
            r = jl.simulate(self._device, self._openqasm_to_jl(openqasm_ir), shots)
        except JuliaError as e:
            _handle_julia_error(e)
        r.additionalMetadata.action = openqasm_ir
        # attach the result types
        if not shots:
            r = _result_value_to_ndarray(r)
        else:
            r.resultTypes = [rt.type for rt in r.resultTypes]
        return r

    def _ir_list_to_jl(self, payloads: list[OpenQASMProgram], shots: int):
        return [self._openqasm_to_jl(ir) for ir in payloads]

    def run_multiple(
        self,
        programs: Sequence[OpenQASMProgram],
        max_parallel: Optional[int] = -1,
        shots: Optional[int] = 0,
        inputs: Optional[Union[dict, Sequence[dict]]] = None,
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
            results = jl.simulate(
                self._device,
                self._ir_list_to_jl(programs, shots),
                max_parallel=max_parallel,
                shots=shots,
                inputs=inputs,
            )
        except JuliaError as e:
            _handle_julia_error(e)

        for r_ix, result in enumerate(results):
            results[r_ix].additionalMetadata.action = programs[r_ix]
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
    for result_ind, result_type in enumerate(task_result.resultTypes):
        if isinstance(result_type.type, (StateVector, DensityMatrix, Probability)):
            task_result.resultTypes[result_ind].value = np.asarray(
                task_result.resultTypes[result_ind].value
            )
    return task_result


def _handle_julia_error(julia_error: JuliaError):
    try:
        python_exception = getattr(julia_error.exception, "alternate_type", None)
        if python_exception is None:
            error = julia_error
        else:
            class_val = getattr(sys.modules["builtins"], str(python_exception))
            error = class_val(julia_error.exception.message)
    except Exception:
        raise julia_error
    raise error
