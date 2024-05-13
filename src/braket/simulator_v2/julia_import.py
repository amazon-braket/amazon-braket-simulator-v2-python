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
            + +"You will experience segfaults if running with Julia multithreading."
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

import braket.default_simulator.gate_operations as gates
import braket.default_simulator.noise_operations as noises
from braket.default_simulator.openqasm.circuit import Circuit
import juliacall

jl = juliacall.Base.Module()

jl.seval("using PythonCall, BraketSimulator")
jl.seval("using PythonCall: Py, pyconvert")
jlBraketSimulator = jl.BraketSimulator

# at init run many commonly used gates and noises to force compilation
# for this Python session
# must be done at init because each new Python session has a separate handle and
# seems to invalidate old methods

circuit = Circuit()
for instruction in (
    gates.Hadamard(targets=[0]),
    gates.RotX(targets=[0], angle=0.1),
    gates.RotY(targets=[1], angle=0.2),
    gates.RotZ(targets=[0], angle=0.1),
    gates.PhaseShift(targets=[0], angle=0.1),
    gates.PRx(targets=[0], angle_1=0.1, angle_2=0.2),
    gates.GPi(targets=[0], angle=0.1),
    gates.GPi2(targets=[0], angle=0.1),
    gates.PauliX(targets=[0]),
    gates.PauliY(targets=[1]),
    gates.PauliZ(targets=[0]),
    gates.V(targets=[0]),
    gates.Vi(targets=[1]),
    gates.S(targets=[0]),
    gates.Si(targets=[1]),
    gates.T(targets=[0]),
    gates.Ti(targets=[1]),
    gates.Identity(targets=[1]),
    gates.Swap(targets=[0, 1]),
    gates.ISwap(targets=[0, 1]),
    gates.PSwap(targets=[0, 1], angle=0.1),
    gates.ECR(targets=[0, 1]),
    gates.CX(targets=[0, 1]),
    gates.CY(targets=[0, 1]),
    gates.CZ(targets=[0, 1]),
    gates.CV(targets=[0, 1]),
    gates.MS(targets=[0, 1], angle_1=0.1, angle_2=0.2, angle_3=0.3),
    gates.XX(targets=[0, 1], angle=0.1),
    gates.XY(targets=[0, 1], angle=0.1),
    gates.YY(targets=[0, 1], angle=0.1),
    gates.ZZ(targets=[0, 1], angle=0.1),
    gates.CPhaseShift(targets=[0, 1], angle=0.1),
    gates.CPhaseShift00(targets=[0, 1], angle=0.1),
    gates.CPhaseShift10(targets=[0, 1], angle=0.1),
    gates.CPhaseShift01(targets=[0, 1], angle=0.1),
    gates.CCNot(targets=[0, 1, 2]),
    gates.CSwap(targets=[0, 1, 2]),
):
    circuit.add_instruction(instruction)

jl.simulate(
    jlBraketSimulator.StateVectorSimulator(0, 0), [circuit], 3, 100, measured_qubits=[]
)

circuit = Circuit()
for instruction in (
    gates.Hadamard(targets=[0]),
    gates.CX(targets=[0, 1]),
    noises.BitFlip(targets=[0], probability=0.1),
    noises.PhaseFlip(targets=[0], probability=0.1),
    noises.PauliChannel(targets=[0], probX=0.1, probY=0.2, probZ=0.3),
    noises.Depolarizing(targets=[0], probability=0.1),
    noises.TwoQubitDepolarizing(targets=[0, 1], probability=0.1),
    noises.TwoQubitDephasing(targets=[0, 1], probability=0.1),
    noises.AmplitudeDamping(targets=[0], gamma=0.1),
    noises.PhaseDamping(targets=[0], gamma=0.1),
    noises.GeneralizedAmplitudeDamping(targets=[0], gamma=0.1, probability=0.2),
):
    circuit.add_instruction(instruction)

jl.simulate(
    jlBraketSimulator.DensityMatrixSimulator(0, 0),
    [circuit],
    3,
    100,
    measured_qubits=[],
)
