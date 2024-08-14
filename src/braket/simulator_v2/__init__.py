from braket.ir.openqasm import Program as OpenQASMProgram

from braket.simulator_v2.density_matrix_simulator_v2 import (  # noqa: F401
    DensityMatrixSimulatorV2,
)
from braket.simulator_v2.julia_import import jl, jlBraketSimulator  # noqa: F401
from braket.simulator_v2.state_vector_simulator_v2 import (  # noqa: F401
    StateVectorSimulatorV2,
)

from ._version import __version__  # noqa: F401

payload = OpenQASMProgram(
    source="""
        OPENQASM 3.0;
        qubit[1] q;
        h q[0];
        #pragma braket result state_vector
        """
)
StateVectorSimulatorV2().run_openqasm(payload)
StateVectorSimulatorV2().run_multiple([payload, payload])
