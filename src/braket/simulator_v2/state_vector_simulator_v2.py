import sys

from braket.default_simulator.operation_helpers import from_braket_instruction
from braket.default_simulator.result_types import TargetedResultType
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.device_schema import DeviceActionType
from braket.device_schema.simulators import (
    GateModelSimulatorDeviceCapabilities,
    GateModelSimulatorDeviceParameters,
)
from braket.ir.jaqcd import Program as JaqcdProgram
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult

from braket.simulator_v2.julia_import import jl, jlBraketSimulator


class StateVectorSimulatorV2(BaseLocalSimulator):
    """A state vector simulator meant to run directly on the user's machine using a Julia backend.

    This class wraps a BraketSimulator object so that it can be run and returns
    results using constructs from the SDK rather than Braket IR.
    """

    DEVICE_ID = "braket_sv_v2"
    _device = jlBraketSimulator.StateVectorSimulator(0, 0)

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
        r = jl.simulate(self._device, [circuit_ir], qubit_count, shots)
        r.additionalMetadata.action = circuit_ir
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

        # use Python parser
        circuit = self.parse_program(openqasm_ir).circuit
        qubit_count = circuit.num_qubits
        measured_qubits = circuit.measured_qubits

        self._validate_ir_results_compatibility(
            circuit.results,
            device_action_type=DeviceActionType.OPENQASM,
        )
        self._validate_ir_instructions_compatibility(
            circuit,
            device_action_type=DeviceActionType.OPENQASM,
        )
        self._validate_input_provided(circuit)
        BaseLocalSimulator._validate_shots_and_ir_results(
            shots, circuit.results, qubit_count
        )

        operations = circuit.instructions
        BaseLocalSimulator._validate_operation_qubits(operations)

        results = circuit.results

        if not shots:
            result_types = BaseLocalSimulator._translate_result_types(results)
            BaseLocalSimulator._validate_result_types_qubits_exist(
                [
                    result_type
                    for result_type in result_types
                    if isinstance(result_type, TargetedResultType)
                ],
                qubit_count,
            )
        else:
            for bri in circuit.basis_rotation_instructions:
                circuit.add_instruction(bri)

        r = jl.simulate(
            self._device, [circuit], qubit_count, shots, measured_qubits=measured_qubits
        )
        r.additionalMetadata.action = openqasm_ir
        # attach the result types
        if shots:
            r.resultTypes = results
        return r

    @property
    def properties(self) -> GateModelSimulatorDeviceCapabilities:
        """
        Device properties for the StateVectorSimulator.

        Returns:
            GateModelSimulatorDeviceCapabilities: Device capabilities for this simulator.
        """
        observables = ["x", "y", "z", "h", "i", "hermitian"]
        max_shots = sys.maxsize
        qubit_count = 32
        return GateModelSimulatorDeviceCapabilities.parse_obj(
            {
                "service": {
                    "executionWindows": [
                        {
                            "executionDay": "Everyday",
                            "windowStartHour": "00:00",
                            "windowEndHour": "23:59:59",
                        }
                    ],
                    "shotsRange": [0, max_shots],
                },
                "action": {
                    "braket.ir.jaqcd.program": {
                        "actionType": "braket.ir.jaqcd.program",
                        "version": ["1"],
                        "supportedOperations": [
                            "ccnot",
                            "cnot",
                            "cphaseshift",
                            "cphaseshift00",
                            "cphaseshift01",
                            "cphaseshift10",
                            "cswap",
                            "cv",
                            "cy",
                            "cz",
                            "ecr",
                            "h",
                            "i",
                            "iswap",
                            "pswap",
                            "phaseshift",
                            "rx",
                            "ry",
                            "rz",
                            "s",
                            "si",
                            "swap",
                            "t",
                            "ti",
                            "unitary",
                            "v",
                            "vi",
                            "x",
                            "xx",
                            "xy",
                            "y",
                            "yy",
                            "z",
                            "zz",
                        ],
                        "supportedResultTypes": [
                            {
                                "name": "Sample",
                                "observables": observables,
                                "minShots": 1,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Expectation",
                                "observables": observables,
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Variance",
                                "observables": observables,
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Probability",
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "StateVector",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                            {
                                "name": "DensityMatrix",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                            {
                                "name": "Amplitude",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                        ],
                    },
                    "braket.ir.openqasm.program": {
                        "actionType": "braket.ir.openqasm.program",
                        "version": ["1"],
                        "supportedOperations": [
                            # OpenQASM primitives
                            "U",
                            "GPhase",
                            # builtin Braket gates
                            "ccnot",
                            "cnot",
                            "cphaseshift",
                            "cphaseshift00",
                            "cphaseshift01",
                            "cphaseshift10",
                            "cswap",
                            "cv",
                            "cy",
                            "cz",
                            "ecr",
                            "gpi",
                            "gpi2",
                            "h",
                            "i",
                            "iswap",
                            "ms",
                            "pswap",
                            "phaseshift",
                            "rx",
                            "ry",
                            "rz",
                            "s",
                            "si",
                            "swap",
                            "t",
                            "ti",
                            "unitary",
                            "v",
                            "vi",
                            "x",
                            "xx",
                            "xy",
                            "y",
                            "yy",
                            "z",
                            "zz",
                        ],
                        "supportedModifiers": [
                            {
                                "name": "ctrl",
                            },
                            {
                                "name": "negctrl",
                            },
                            {
                                "name": "pow",
                                "exponent_types": ["int", "float"],
                            },
                            {
                                "name": "inv",
                            },
                        ],
                        "supportedPragmas": [
                            "braket_unitary_matrix",
                            "braket_result_type_state_vector",
                            "braket_result_type_density_matrix",
                            "braket_result_type_sample",
                            "braket_result_type_expectation",
                            "braket_result_type_variance",
                            "braket_result_type_probability",
                            "braket_result_type_amplitude",
                        ],
                        "forbiddenPragmas": [
                            "braket_noise_amplitude_damping",
                            "braket_noise_bit_flip",
                            "braket_noise_depolarizing",
                            "braket_noise_kraus",
                            "braket_noise_pauli_channel",
                            "braket_noise_generalized_amplitude_damping",
                            "braket_noise_phase_flip",
                            "braket_noise_phase_damping",
                            "braket_noise_two_qubit_dephasing",
                            "braket_noise_two_qubit_depolarizing",
                            "braket_result_type_adjoint_gradient",
                        ],
                        "supportedResultTypes": [
                            {
                                "name": "Sample",
                                "observables": observables,
                                "minShots": 1,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Expectation",
                                "observables": observables,
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Variance",
                                "observables": observables,
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "Probability",
                                "minShots": 0,
                                "maxShots": max_shots,
                            },
                            {
                                "name": "StateVector",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                            {
                                "name": "DensityMatrix",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                            {
                                "name": "Amplitude",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                        ],
                        "supportPhysicalQubits": False,
                        "supportsPartialVerbatimBox": False,
                        "requiresContiguousQubitIndices": True,
                        "requiresAllQubitsMeasurement": True,
                        "supportsUnassignedMeasurements": True,
                        "disabledQubitRewiringSupported": False,
                    },
                },
                "paradigm": {"qubitCount": qubit_count},
                "deviceParameters": GateModelSimulatorDeviceParameters.schema(),
            }
        )
