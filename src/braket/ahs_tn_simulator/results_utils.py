import numpy as np
from braket.tasks.analog_hamiltonian_simulation_quantum_task_result import (
    AnalogHamiltonianSimulationQuantumTaskResult,
    AnalogHamiltonianSimulationShotStatus,
    ShotResult
)

from braket.task_result import (
    AdditionalMetadata,
    TaskMetadata,
)

def convert_result(
    shots: list[list[int]],
    pre_sequence: list[int],
    task_Metadata: TaskMetadata,
) -> AnalogHamiltonianSimulationQuantumTaskResult:
    """Convert a given sampled distribution to the analog simulation result schema

    Args:
        dist (ndarray): The sample results to convert
        pre_sequence (list[int]): the same pre-sequence measurement results used for all shots
        configurations (list[str]): The list of configurations that comply with the blockade
            approximation.
        task_Metadata (TaskMetadata): The metadata for the task

    Returns:
        AnalogHamiltonianSimulationTaskResult: Results from sampling a distribution
    """
    measurements = []

    for shot_data in shots:
        status = AnalogHamiltonianSimulationShotStatus.SUCCESS
        pre_sequence = np.asarray(pre_sequence, dtype=int)
        post_sequence = 1 - np.asarray(shot_data, dtype=int) # different convention
        shot_measurement = ShotResult(status, pre_sequence, post_sequence)
        measurements.append(shot_measurement)

    task_metadata = task_Metadata
    additional_metadata = None

    return AnalogHamiltonianSimulationQuantumTaskResult(
        measurements=measurements,
        task_metadata=task_metadata,
        additional_metadata=additional_metadata
    )
