from __future__ import annotations

import atexit
import json
import os
import sys
from multiprocessing.pool import Pool
from typing import TYPE_CHECKING

import numpy as np

from braket.default_simulator.simulator import BaseLocalSimulator
from braket.ir.jaqcd import DensityMatrix, Probability, StateVector
from braket.simulator_v2.julia_workers import (
    _handle_julia_error,  # noqa: PLC2701
    translate_and_run,
    translate_and_run_multiple,
)
from braket.task_result import GateModelTaskResult

if TYPE_CHECKING:
    from collections.abc import Sequence

    from braket.ir.openqasm import Program as OpenQASMProgram

__JULIA_POOL__ = None


def setup_julia() -> None:
    # don't reimport if we don't have to
    if "juliacall" in sys.modules:
        os.environ["PYTHON_JULIACALL_HANDLE_SIGNALS"] = "yes"
        return sys.modules["juliacall"].Main
    for k, default in (
        ("PYTHON_JULIACALL_HANDLE_SIGNALS", "yes"),
        ("PYTHON_JULIACALL_THREADS", "auto"),
        ("PYTHON_JULIACALL_OPTLEVEL", "3"),
        # let the user's Conda/Pip handle installing things
        ("JULIA_CONDAPKG_BACKEND", "Null"),
    ):
        os.environ[k] = os.environ.get(k, default)
    # install Julia and any packages as needed
    os.environ["PYTHON_JULIAPKG_OFFLINE"] = "yes"
    import juliacall  # noqa: PLC0415

    jl = juliacall.Main
    jl.seval("using JSON3, BraketSimulator")
    sv_stock_oq3 = """
        OPENQASM 3.0;
        input float theta;
        qubit[2] q;
        h q[0];
        cnot q;
        x q[0];
        xx(theta) q;
        yy(theta) q;
        zz(theta) q;
        #pragma braket result expectation z(q[0])
        """
    dm_stock_oq3 = """
        OPENQASM 3.0;
        input float theta;
        qubit[2] q;
        h q[0];
        x q[0];
        cnot q;
        xx(theta) q;
        yy(theta) q;
        zz(theta) q;
        #pragma braket result probability
        """
    r = jl.BraketSimulator.simulate("braket_sv_v2", sv_stock_oq3, '{"theta": 0.1}', 0)
    jl.JSON3.write(r)
    r = jl.BraketSimulator.simulate("braket_dm_v2", dm_stock_oq3, '{"theta": 0.1}', 0)
    jl.JSON3.write(r)
    return jl


def setup_pool() -> None:
    global __JULIA_POOL__
    __JULIA_POOL__ = Pool(processes=1)
    __JULIA_POOL__.apply(setup_julia)
    atexit.register(__JULIA_POOL__.join)
    atexit.register(__JULIA_POOL__.close)


class BaseLocalSimulatorV2(BaseLocalSimulator):
    def __init__(self, device: str) -> None:
        if __JULIA_POOL__ is None:
            setup_pool()
        self._device = device

    def initialize_simulation(self, **kwargs: dict) -> None:
        pass

    def run_openqasm(
        self,
        openqasm_ir: OpenQASMProgram,
        shots: int = 0,
        batch_size: int = 1,  # noqa: ARG002
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
        """  # noqa: DOC502
        try:
            jl_result = __JULIA_POOL__.apply(
                translate_and_run,
                [self._device, openqasm_ir, shots],
            )
        except Exception as e:
            _handle_julia_error(e)

        result = GateModelTaskResult(**json.loads(jl_result))
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
        max_parallel: int | None = -1,  # noqa: ARG002
        shots: int | None = 0,
        inputs: dict | Sequence[dict] | None = None,
    ) -> list[GateModelTaskResult]:
        """
        Run the tasks specified by the given IR programs.
        Extra arguments will contain any additional information necessary to run the tasks,
        such as the extra parameters for AHS simulations.
        Args:
            programs (Sequence[OQ3Program]): The IR representations of the programs
            max_parallel (int | None): The maximum number of programs to run in parallel.
                Default is the number of logical CPUs.

        Returns:
            list[GateModelTaskResult]: A list of result objects, with the ith object being
            the result of the ith program.
        """
        if inputs is None:
            inputs = {}
        try:
            jl_results = __JULIA_POOL__.apply(
                translate_and_run_multiple,
                [self._device, programs, shots, inputs],
            )
        except Exception as e:
            _handle_julia_error(e)

        results = [GateModelTaskResult(**json.loads(jl_result)) for jl_result in jl_results]
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

    def reconstruct_complex(v: list | float) -> complex | float:
        if isinstance(v, list):
            return complex(v[0], v[1])
        return v

    for result_ind, result_type in enumerate(task_result.resultTypes):
        # Amplitude
        if isinstance(result_type.value, dict):
            val = task_result.resultTypes[result_ind].value
            task_result.resultTypes[result_ind].value = {k: reconstruct_complex(v) for (k, v) in val.items()}
        elif isinstance(result_type.type, StateVector):
            val = task_result.resultTypes[result_ind].value
            # complex are stored as tuples of reals
            fixed_val = [reconstruct_complex(v) for v in val]
            task_result.resultTypes[result_ind].value = np.asarray(fixed_val)
        elif isinstance(result_type.type, DensityMatrix):
            val = task_result.resultTypes[result_ind].value
            # complex are stored as tuples of reals
            fixed_val = [[reconstruct_complex(v) for v in inner_val] for inner_val in val]
            task_result.resultTypes[result_ind].value = np.asarray(fixed_val)
        elif isinstance(result_type.type, Probability):
            val = task_result.resultTypes[result_ind].value
            task_result.resultTypes[result_ind].value = np.asarray(val)

    return task_result
