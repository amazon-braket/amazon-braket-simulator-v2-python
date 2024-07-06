import sys

from braket.device_schema.simulators import (
    GateModelSimulatorDeviceCapabilities,
    GateModelSimulatorDeviceParameters,
)

from braket.simulator_v2.base_simulator_v2 import BaseLocalSimulatorV2
from braket.simulator_v2.julia_import import jlBraketSimulator


class DensityMatrixSimulatorV2(BaseLocalSimulatorV2):
    """A density matrix simulator meant to run directly on the user's machine using a Julia backend.

    This class wraps a BraketSimulator object so that it can be run and returns
    results using constructs from the SDK rather than Braket IR.
    """

    DEVICE_ID = "braket_dm_v2"

    def __init__(self):
        super().__init__(jlBraketSimulator.DensityMatrixSimulator(0, 0))

    @property
    def properties(self) -> GateModelSimulatorDeviceCapabilities:
        observables = ["x", "y", "z", "h", "i", "hermitian"]
        max_shots = sys.maxsize
        qubit_count = 16
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
                    "braket.ir.openqasm.program": {
                        "actionType": "braket.ir.openqasm.program",
                        "version": ["1"],
                        "supportedOperations": sorted(
                            [
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
                                # noise operations
                                "bit_flip",
                                "phase_flip",
                                "pauli_channel",
                                "depolarizing",
                                "two_qubit_depolarizing",
                                "two_qubit_dephasing",
                                "amplitude_damping",
                                "generalized_amplitude_damping",
                                "phase_damping",
                                "kraus",
                            ]
                        ),
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
                            "braket_result_type_density_matrix",
                            "braket_result_type_sample",
                            "braket_result_type_expectation",
                            "braket_result_type_variance",
                            "braket_result_type_probability",
                            "braket_result_type_amplitude",
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
                        ],
                        "forbiddenPragmas": [
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
                                "name": "DensityMatrix",
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
                    "braket.ir.jaqcd.program": {
                        "actionType": "braket.ir.jaqcd.program",
                        "version": ["1"],
                        "supportedOperations": [
                            "amplitude_damping",
                            "bit_flip",
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
                            "depolarizing",
                            "ecr",
                            "generalized_amplitude_damping",
                            "h",
                            "i",
                            "iswap",
                            "kraus",
                            "pauli_channel",
                            "two_qubit_pauli_channel",
                            "phase_flip",
                            "phase_damping",
                            "phaseshift",
                            "pswap",
                            "rx",
                            "ry",
                            "rz",
                            "s",
                            "si",
                            "swap",
                            "t",
                            "ti",
                            "two_qubit_dephasing",
                            "two_qubit_depolarizing",
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
                                "name": "DensityMatrix",
                                "minShots": 0,
                                "maxShots": 0,
                            },
                        ],
                    },
                },
                "paradigm": {"qubitCount": qubit_count},
                "deviceParameters": GateModelSimulatorDeviceParameters.schema(),
            }
        )
