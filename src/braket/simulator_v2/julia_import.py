import os
import sys
import warnings

# Check if JuliaCall is already loaded, and if so, warn the user
# about the relevant environment variables. If not loaded,
# set up sensible defaults.
if "juliacall" in sys.modules:
    warnings.warn(
        "`juliacall` module has already been imported. "
        + "Make sure that you have set the environment variable "
        + "`PYTHON_JULIACALL_HANDLE_SIGNALS=yes` to avoid segfaults. "
    )
else:
    # Required to avoid segfaults (https://juliapy.github.io/PythonCall.jl/dev/faq/)
    if os.environ.get("PYTHON_JULIACALL_HANDLE_SIGNALS", "yes") != "yes":
        warnings.warn(
            "`PYTHON_JULIACALL_HANDLE_SIGNALS` environment variable "
            + "is set to something other than 'yes' or ''. "
            + "You will experience segfaults if running with Julia multithreading."
        )

    if os.environ.get("PYTHON_JULIACALL_THREADS", "auto") != "auto":
        warnings.warn(
            "`PYTHON_JULIACALL_THREADS` environment variable is set to "
            + "something other than `auto`, so `amazon-braket-simulator-v2` "
            + "was not able to set it."
        )

    for k, default in (
        ("PYTHON_JULIACALL_HANDLE_SIGNALS", "yes"),
        ("PYTHON_JULIACALL_THREADS", "auto"),
        ("PYTHON_JULIACALL_OPTLEVEL", "3"),
        # let the user's Conda/Pip handle installing things
        ("JULIA_CONDAPKG_BACKEND", "Null"),
    ):
        os.environ[k] = os.environ.get(k, default)

import juliacall

jl = juliacall.Base.Module()

jl.seval("using PythonCall, BraketSimulator")
jl.seval("using PythonCall: Py, pyconvert")
jlBraketSimulator = jl.BraketSimulator
