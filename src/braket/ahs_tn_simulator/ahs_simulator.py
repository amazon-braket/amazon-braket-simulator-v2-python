import sys
from pydantic.v1 import create_model
import json
import numpy as np

from braket.default_simulator.operation_helpers import from_braket_instruction
from braket.default_simulator.result_types import TargetedResultType
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.device_schema import DeviceCapabilities
from braket.ir.ahs.program_v1 import Program
from braket.tasks.analog_hamiltonian_simulation_quantum_task_result import AnalogHamiltonianSimulationQuantumTaskResult
# from braket.analog_hamiltonian_simulator.rydberg.validators.ir_validator import validate_program
# from braket.analog_hamiltonian_simulator.rydberg.constants import (
#     capabilities_constants,
# )

## Modules to define AHS program (potentially can be removed)
from braket.ahs.hamiltonian import Hamiltonian
from braket.ahs.atom_arrangement import AtomArrangement
from braket.ahs.analog_hamiltonian_simulation import AnalogHamiltonianSimulation
from braket.timings.time_series import TimeSeries
from braket.ahs.driving_field import DrivingField
from braket.ahs.field import Field
from braket.ahs.pattern import Pattern
from braket.ahs.shifting_field import ShiftingField

from braket.devices import LocalSimulator
from braket.task_result import (
    TaskMetadata,
)
from braket.tasks.local_quantum_task import LocalQuantumTask

from .julia_import import jl, jlBraketAHS
from .results_utils import convert_result
from .ahs_utils import get_counts, get_avg_density, show_final_avg_density

class LocalSimulatorTN(BaseLocalSimulator):
    DEVICE_ID = "braket_ahs_tn"

    def initialize_simulation(self, **kwargs):
        return

    """A simulator meant to run directly on the user's machine using a Julia backend.

    This class wraps a BraketSimulator object so that it can be run and returns
    results using constructs from the SDK rather than Braket IR.
    """

    def run(
        self,
        program: Program,
        shots: int = 100,
        n_tau_steps: int = 400,
        interaction_radius: float = 10e-6,
        C6: float = 5.42e-24,
        cutoff: float = 1e-8,
        max_bond_dim: int = 16,
        compute_truncation_error: bool = False,
        compute_correlators: bool = False,
        compute_energies: bool = False,
        generate_plots: bool = False,
        *args,
        **kwargs
    ) -> AnalogHamiltonianSimulationQuantumTaskResult:
        """
        Run the simulation for the dynamics of the Rydberg system, and return the result

        Args:
            Add Info
        Returns:
            AnalogHamiltonianSimulationTaskResult: The result of the simulation
        """
        # Validate the given program against the capabilities
        # validate_program(program, capabilities_constants())

        # Convert input program to a Julia JSON object
        json_str = program.to_ir().json()
        json_dict = jl.BraketAHS.JSON3.read(json_str)
        args = jl.Base.seval(f"""Dict("shots" => {shots},
                             "n-tau-steps" => {n_tau_steps},
                             "C6" => {C6},
                             "interaction-radius" => {interaction_radius},
                             "max-bond-dim" => {max_bond_dim},
                             "cutoff" => {cutoff},
                             "compute-energies" => {str(compute_energies).lower()},
                             "compute-correlators" => {str(compute_correlators).lower()},
                             "compute-truncation-error" => false,
                             "generate-plots" => false,
                             "experiment-path" => "../../experiments",
                             "program-path" => "tmp"
                              )
                             """)

        print("testing")
        raw_results = jlBraketAHS.run(json_dict, args)
        dist = np.array(raw_results["samples"]).T.tolist()
        filling = np.ones(len(program.register), dtype=int)

        result = convert_result(
            dist,
            filling,
            self._task_metadata(shots),
        )

        task = LocalQuantumTask(result=result)
        return task

    def _task_metadata(self, shots: int) -> TaskMetadata:
        return TaskMetadata(id='rydberg',
                            shots=shots,
                            deviceId='braket_ahs_tn')

    @property
    def properties(self) -> DeviceCapabilities:
        """
        Device properties for the LocalSimulatorTN.

        Returns:
            DeviceCapabilities: Device capabilities for this simulator.
        """
        properties = {
            "service": {
                "executionWindows": [
                    {
                        "executionDay": "Everyday",
                        "windowStartHour": "00:00",
                        "windowEndHour": "23:59:59",
                    }
                ],
                "shotsRange": [0, sys.maxsize],
            },
            "action": {"braket.ir.ahs.program": {}},
        }

        LocalSimulatorTNDeviceCapabilities = create_model(
            "LocalSimulatorTNDeviceCapabilities", **properties
        )

        return LocalSimulatorTNDeviceCapabilities.parse_obj(properties)


