from collections.abc import Mapping, Sequence
from typing import Any, Optional, Union
import sys

import juliacall
import numpy as np
from braket.default_simulator.operation_helpers import from_braket_instruction
from braket.default_simulator.result_types import TargetedResultType
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.device_schema import DeviceActionType
from braket.ir.jaqcd import DensityMatrix, Probability
from braket.ir.jaqcd import Program as JaqcdProgram
from braket.ir.jaqcd import StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult
from juliacall import JuliaError

from braket.simulator_v2.julia_import import jl


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device):
        self._device = device

    def initialize_simulation(self, **kwargs):
        return

    def _jaqcd_to_jl(self, circuit_ir: JaqcdProgram):
        # convert to the Julia JaqcdProgram type for dispatch
        jl_program = jl.BraketSimulator.Braket.parse_raw_schema(
            jl.convert(jl.String, circuit_ir.json())
        )
        if circuit_ir.basis_rotation_instructions:
            # need to read these in explicitly due to the Vector{Any} type of the field
            parsed_bris = [
                jl.BraketSimulator.Braket.JSON3.read(
                    bri.json(),
                    jl.BraketSimulator.Braket.Instruction,
                )
                for bri in circuit_ir.basis_rotation_instructions
            ]
            jl_program = jl.BraketSimulator.Braket.Program(
                jl_program.braketSchemaHeader,
                jl_program.instructions,
                jl_program.results,
                parsed_bris,
            )
        return jl_program

    def run_jaqcd(
        self,
        circuit_ir: JaqcdProgram,
        qubit_count: int,
        shots: int = 0,
        batch_size: int = 1,  # unused
    ) -> GateModelTaskResult:
        """Executes the circuit specified by the supplied `circuit_ir` on the simulator.

        Args:
            circuit_ir (Program): ir representation of a braket circuit specifying the
                instructions to execute.
            qubit_count (int): The number of qubits to simulate.
            shots (int): The number of times to run the circuit.

        Returns:
            GateModelTaskResult: object that represents the result

        Raises:
            ValueError: If result types are not specified in the IR or sample is specified
                as a result type when shots=0. Or, if StateVector and Amplitude result types
                are requested when shots>0.
        """
        self._validate_jaqcd(circuit_ir, qubit_count, shots)

        BaseLocalSimulator._validate_shots_and_ir_results(
            shots, circuit_ir.results, qubit_count
        )

        operations = [
            from_braket_instruction(instruction)
            for instruction in circuit_ir.instructions
        ]

        if shots and circuit_ir.basis_rotation_instructions:
            for instruction in circuit_ir.basis_rotation_instructions:
                operations.append(from_braket_instruction(instruction))

        if not shots and circuit_ir.results:
            result_types = BaseLocalSimulator._translate_result_types(
                circuit_ir.results
            )
            BaseLocalSimulator._validate_result_types_qubits_exist(
                [
                    result_type
                    for result_type in result_types
                    if isinstance(result_type, TargetedResultType)
                ],
                qubit_count,
            )
        try:
            r = jl.simulate(self._device, [circuit_ir.json()], qubit_count, shots)
        except juliacall.JuliaError as e:
            _handle_julia_error(e)
        r.additionalMetadata.action = circuit_ir
        r = _result_value_to_ndarray(r)
        return r

    def _openqasm_to_jl(self, openqasm_ir: OpenQASMProgram):
        # convert to the Julia OpenQasmProgram type for dispatch
        jl_braket_schema_header = jl.BraketSimulator.Braket.braketSchemaHeader(
            jl.convert(jl.String, openqasm_ir.braketSchemaHeader.name),
            jl.convert(jl.String, openqasm_ir.braketSchemaHeader.version),
        )
        if openqasm_ir.inputs:
            jl_inputs = jl.Dict(
                [
                    (jl.convert(jl.String, input_key), jl.convert(jl.Number, input_val))
                    for (input_key, input_val) in openqasm_ir.inputs.items()
                ]
            )
        else:
            jl_inputs = jl.nothing
        jl_source = jl.convert(jl.String, openqasm_ir.source)
        return jl.BraketSimulator.Braket.OpenQasmProgram(
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
            r = jl.simulate(self._device, [openqasm_ir], shots)
        except juliacall.JuliaError as e:
            _handle_julia_error(e)
        r.additionalMetadata.action = openqasm_ir
        # attach the result types
        if not shots:
            r = _result_value_to_ndarray(r)
        else:
            r.resultTypes = [rt.type for rt in r.resultTypes]
        return r

    def _ir_list_to_jl(self, payloads: list[Union[OpenQASMProgram, JaqcdProgram]]):
        converted_payloads = [
            (
                self._openqasm_to_jl(ir)
                if isinstance(ir, OpenQASMProgram)
                else self._jaqcd_to_jl(ir)
            )
            for ir in payloads
        ]
        return converted_payloads

    def run_multiple(
        self,
        payloads: Sequence[Union[OpenQASMProgram, JaqcdProgram]],
        args: Optional[Sequence[Sequence[Any]]] = None,
        kwargs: Optional[Sequence[Mapping[str, Any]]] = None,
        max_parallel: Optional[int] = -1,
    ) -> list[GateModelTaskResult]:
        results = jl.simulate(self._device, self._ir_list_to_jl(payloads), args, kwargs, max_parallel=max_parallel)
        for r_ix, result in enumerate(results):
            results[r_ix].additionalMetadata.action = payloads[r_ix]
            # attach the result types
            if not kwargs or not kwargs[r_ix]['shots']:
                results[r_ix] = _result_value_to_ndarray(result)
            else:
                if isinstance(payloads[r_ix], OpenQASMProgram):
                    results[r_ix].resultTypes = [rt.type for rt in result.resultTypes]
                elif isinstance(payloads[r_ix], JaqcdProgram):
                    results[r_ix] = _result_value_to_ndarray(result)

        return results

    def _validate_jaqcd(self, circuit_ir, qubit_count, shots):
        self._validate_ir_results_compatibility(
            circuit_ir.results,
            device_action_type=DeviceActionType.JAQCD,
        )
        try:
            # the default simulator has validations that hard-codes recommendations. We need
            # to override them to correspond to the v2 simulator. Temporarily catching error
            # but we need to split this function out in the base.
            self._validate_ir_instructions_compatibility(
                circuit_ir,
                device_action_type=DeviceActionType.JAQCD,
            )
        except TypeError:
            raise TypeError(
                "Noise instructions are not supported by "
                f"StateVectorSimulator(qubit_count={qubit_count}, shots={shots}) "
                "(by default). You need to use the density matrix simulator: "
                'LocalSimulator("braket_dm_v2").'
            )


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
