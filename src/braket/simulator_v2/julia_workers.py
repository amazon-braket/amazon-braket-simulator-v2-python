import json
import sys
from collections.abc import Sequence
from typing import List, Optional, Union

from braket.ir.openqasm import Program as OpenQASMProgram


def _handle_julia_error(error):
    # in case juliacall isn't loaded
    print(error)
    if type(error).__name__ == "JuliaError":
        python_exception = getattr(error.exception, "alternate_type", None)
        if python_exception is None:
            # convert to RuntimeError as JuliaError can't be serialized
            py_error = RuntimeError(
                "Unable to unwrap internal Julia exception."
                f"Exception message: {str(error.exception.message)}"
            )
        else:
            class_val = getattr(sys.modules["builtins"], str(python_exception))
            py_error = class_val(str(error.exception.message))
        raise py_error
    else:
        raise error
    return


def translate_and_run(
    device_id: str, openqasm_ir: OpenQASMProgram, shots: int = 0
) -> str:
    jl = sys.modules["juliacall"].Main
    jl.GC.enable(False)
    jl_inputs = json.dumps(openqasm_ir.inputs) if openqasm_ir.inputs else "{}"
    try:
        result = jl.BraketSimulator.simulate(
            device_id,
            openqasm_ir.source,
            jl_inputs,
            shots,
        )

    except Exception as e:
        _handle_julia_error(e)
    finally:
        jl.GC.enable(True)

    return result


def translate_and_run_multiple(
    device_id: str,
    programs: Sequence[OpenQASMProgram],
    shots: int = 0,
    inputs: Optional[Union[dict, Sequence[dict]]] = None,
) -> List[str]:
    inputs = inputs or {}
    jl = sys.modules["juliacall"].Main
    irs = [program.source for program in programs]
    py_inputs = {}
    if len(inputs) > 1 or isinstance(inputs, dict):
        py_inputs = [inputs.copy() for _ in range(len(programs))]
    elif len(inputs) == 1:
        py_inputs = [inputs[0].copy() for _ in range(len(programs))]
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
