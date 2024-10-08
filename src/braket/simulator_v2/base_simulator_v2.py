import atexit
import json
from collections.abc import Sequence
from multiprocessing.pool import Pool
from typing import Optional, Union

import numpy as np
from braket.default_simulator.simulator import BaseLocalSimulator
from braket.ir.jaqcd import DensityMatrix, Probability, StateVector
from braket.ir.openqasm import Program as OpenQASMProgram
from braket.task_result import GateModelTaskResult

from braket.simulator_v2.julia_workers import (
    _handle_julia_error,
    translate_and_run,
    translate_and_run_multiple,
)

__JULIA_POOL__ = None


def setup_julia():
    import os
    import sys

    # don't reimport if we don't have to
    if "juliacall" in sys.modules:
        os.environ["PYTHON_JULIACALL_HANDLE_SIGNALS"] = "yes"
        return
    else:
        for k, default in (
            ("PYTHON_JULIACALL_HANDLE_SIGNALS", "yes"),
            ("PYTHON_JULIACALL_THREADS", "auto"),
            ("PYTHON_JULIACALL_OPTLEVEL", "3"),
            # let the user's Conda/Pip handle installing things
            ("JULIA_CONDAPKG_BACKEND", "Null"),
        ):
            os.environ[k] = os.environ.get(k, default)

        import juliacall

        jl = juliacall.Main
        jl.seval("using BraketSimulator, JSON3")
        stock_oq3 = """
        OPENQASM 3.0;
        qubit[2] q;
        h q[0];
        cphaseshift(1.5707963267948966) q[1], q[0];
        cnot q;
        #pragma braket noise bit_flip(0.1) q[0]
        #pragma braket result variance y(q[0])
        #pragma braket result density_matrix q[0], q[1]
        #pragma braket result probability
        """
        jl.BraketSimulator.simulate("braket_dm_v2", stock_oq3, "{}", 0)
        return


def setup_pool():
    global __JULIA_POOL__
    __JULIA_POOL__ = Pool(processes=1)
    __JULIA_POOL__.apply(setup_julia)
    atexit.register(__JULIA_POOL__.join)
    atexit.register(__JULIA_POOL__.close)
    return


def _handle_mmaped_result(raw_result, mmap_paths, obj_lengths):
    result = GateModelTaskResult(**raw_result)
    if mmap_paths:
        mmap_files = mmap_paths
        array_lens = obj_lengths
        mmap_index = 0
        for result_ind, result_type in enumerate(result.resultTypes):
            if not result_type.value:
                d_type = (
                    np.complex128
                    if isinstance(result_type.type, (DensityMatrix, StateVector))
                    else np.float64
                )
                result.resultTypes[result_ind].value = np.memmap(
                    mmap_files[mmap_index],
                    dtype=d_type,
                    mode="r",
                    shape=(array_lens[mmap_index],),
                )
                mmap_index += 1
    return result


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device: str):
        global __JULIA_POOL__
        if __JULIA_POOL__ is None:
            setup_pool()
        self._device = device

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
        global __JULIA_POOL__
        try:
            jl_result = __JULIA_POOL__.apply(
                translate_and_run,
                [self._device, openqasm_ir, shots],
            )
        except Exception as e:
            _handle_julia_error(e)

        loaded_result = json.loads(jl_result[0])
        result = _handle_mmaped_result(loaded_result, jl_result[1], jl_result[2])
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
        global __JULIA_POOL__
        try:
            jl_results = __JULIA_POOL__.apply(
                translate_and_run_multiple,
                [self._device, programs, shots, inputs],
            )
        except Exception as e:
            _handle_julia_error(e)

        loaded_result = json.loads(jl_results[0])
        paths_and_lens = json.loads(jl_results[1])
        results_paths_lens = [
            (loaded_result[r_ix], paths_and_lens[r_ix][0], paths_and_lens[r_ix][1])
            for r_ix in range(len(loaded_result))
        ]
        results = [
            _handle_mmaped_result(*result_path_len)
            for result_path_len in results_paths_lens
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
            if isinstance(val, list):
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
