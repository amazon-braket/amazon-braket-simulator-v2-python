from __future__ import annotations

import json
import sys
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from collections.abc import Sequence

    from braket.ir.openqasm import Program as OpenQASMProgram


def _handle_julia_error(error: str) -> None:
    if isinstance(error, sys.modules["juliacall"].JuliaError):
        python_exception = getattr(error.exception, "alternate_type", None)
        if python_exception is None:
            # convert to RuntimeError as JuliaError can't be serialized
            py_error = RuntimeError(
                "Unable to unwrap internal Julia exception." f"Exception message: {error.exception.message!s}"
            )
        else:
            class_val = getattr(sys.modules["builtins"], str(python_exception))
            py_error = class_val(str(error.exception.message))
        raise py_error
    raise error


def translate_and_run(device_id: str, openqasm_ir: OpenQASMProgram, shots: int = 0) -> str:
    jl = sys.modules["juliacall"].Main
    jl_shots = shots
    jl_inputs = json.dumps(openqasm_ir.inputs) if openqasm_ir.inputs else "{}"
    try:
        result = jl.BraketSimulator.simulate(
            device_id,
            openqasm_ir.source,
            jl_inputs,
            jl_shots,
        )

    except Exception as e:
        _handle_julia_error(e)

    return result


def translate_and_run_multiple(
    device_id: str,
    programs: Sequence[OpenQASMProgram],
    shots: int | None = 0,
    inputs: dict | Sequence[dict] | None = None,
) -> list[str]:
    if inputs is None:
        inputs = {}
    jl = sys.modules["juliacall"].Main
    irs = [program.source for program in programs]
    is_single_input = isinstance(inputs, dict) or len(inputs) == 1
    py_inputs = {}
    if (is_single_input and isinstance(inputs, dict)) or not is_single_input:
        py_inputs = [inputs.copy() for _ in range(len(programs))]
    elif is_single_input and not isinstance(inputs, dict):
        py_inputs = [inputs[0].copy() for _ in range(len(programs))]
    else:
        py_inputs = inputs
    full_inputs = []
    for p_ix, program in enumerate(programs):
        if program.inputs:
            full_inputs.append(program.inputs | py_inputs[p_ix])
        else:
            full_inputs.append(py_inputs[p_ix])

    jl_inputs = json.dumps(full_inputs)

    try:
        results = jl.BraketSimulator.simulate(
            device_id,
            irs,
            jl_inputs,
            shots,
        )
        py_results = [str(result) for result in results]
    except Exception as e:
        _handle_julia_error(e)
    return py_results
