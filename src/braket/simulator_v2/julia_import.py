def setup_julia():
    import os
    import sys
    import warnings
    # Check if JuliaCall is already loaded, and if so, warn the user
    # about the relevant environment variables. If not loaded,
    # set up sensible defaults.
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
        ("PYTHON_JULIAPKG_OFFLINE", "yes"),
        # let the user's Conda/Pip handle installing things
        ("JULIA_CONDAPKG_BACKEND", "Null"),
    ):
        os.environ[k] = os.environ.get(k, default)
    
    # don't reimport if we don't have to
    if "juliacall" in sys.modules: 
        return sys.modules["juliacall"].Main
    else:
        import juliacall
        jl = juliacall.Main
        jl.seval("using JSON3, BraketSimulator")
        # trigger top-level precompilation at first import
        sv = jl.BraketSimulator.StateVectorSimulator(0, 0)
        dm = jl.BraketSimulator.StateVectorSimulator(0, 0)
        stock_oq3 = """
        qubit[2] q;
        h q[0];
        cnot q[0], q[1];
        #pragma braket result state_vector
        """
        jl.BraketSimulator.simulate._jl_call_nogil(sv, stock_oq3, jl.Dict[jl.String, jl.Any](), 0)
        jl.BraketSimulator.simulate._jl_call_nogil(dm, stock_oq3, jl.Dict[jl.String, jl.Any](), 0)
        return jl
