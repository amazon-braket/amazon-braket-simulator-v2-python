from abc import ABC
from typing import Union
import numpy as np
from braket.default_simulator.operation_helpers import from_braket_instruction
from braket.default_simulator.result_types import TargetedResultType
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.device_schema import DeviceActionType
from braket.ir.jaqcd import DensityMatrix, Probability
from braket.ir.jaqcd import Program as JaqcdProgram
from braket.ir.jaqcd import StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.simulator import MultiSimulator
from braket.task_result import GateModelTaskResult

from braket.simulator_v2.julia_import import jl


class BaseLocalSimulatorV2(BaseLocalSimulator, MultiSimulator):
    def __init__(self, device):
        self._device = device

    def initialize_simulation(self, **kwargs):
        return

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
        self._validate_ir_results_compatibility(
            circuit_ir.results,
            device_action_type=DeviceActionType.JAQCD,
        )
        self._validate_ir_instructions_compatibility(
            circuit_ir,
            device_action_type=DeviceActionType.JAQCD,
        )
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

        BaseLocalSimulator._validate_operation_qubits(operations)

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
        r = jl.simulate(self._device, [circuit_ir.json()], qubit_count, shots)
        r.additionalMetadata.action = circuit_ir
        r = _result_value_to_ndarray(r)
        return r

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

        r = jl.simulate(self._device, [openqasm_ir], shots)
        r.additionalMetadata.action = openqasm_ir
        # attach the result types
        if not shots:
            r = _result_value_to_ndarray(r)
        else:
            r.resultTypes = [rt.type for rt in r.resultTypes]
        return r

    def run_multiple(
        self, payloads: list[Union[OpenQASMProgram, JaqcdProgram]], shots: int = 0, **kwargs
    ) -> list[GateModelTaskResult]:
        results = jl.simulate(self._device, payloads, shots)
        for r_ix, result in enumerate(results):
            results[r_ix].additionalMetadata.action = payloads[r_ix]
            # attach the result types
            if not shots:
                results[r_ix] = _result_value_to_ndarray(result)
            else:
                if isinstance(payloads[r_ix], OpenQASMProgram):
                    results[r_ix].resultTypes = [rt.type for rt in result.resultTypes]
                elif isinstance(payloads[r_ix], JaqcdProgram):
                    results[r_ix] = _result_value_to_ndarray(result)

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
