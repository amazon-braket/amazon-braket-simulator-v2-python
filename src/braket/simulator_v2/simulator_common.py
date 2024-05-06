import numpy as np
from braket.ir.jaqcd import DensityMatrix, StateVector
from braket.task_result import GateModelTaskResult


def _analytic_result_value_to_ndarray(
    task_result: GateModelTaskResult,
) -> GateModelTaskResult:
    """Convert any StateVector or DensityMatrix result values from raw Python lists to the expected
    np.ndarray. This must be done because the wrapper Julia simulator results Python lists to comply
    with the pydantic specification for ResultTypeValues.
    """
    for result_ind, result_type in enumerate(task_result.resultTypes):
        if isinstance(result_type.type, StateVector) or isinstance(
            result_type.type, DensityMatrix
        ):
            task_result.resultTypes[result_ind].value = np.asarray(
                task_result.resultTypes[result_ind].value
            )
    return task_result
