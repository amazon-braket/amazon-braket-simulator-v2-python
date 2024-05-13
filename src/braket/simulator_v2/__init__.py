from braket.simulator_v2.density_matrix_simulator_v2 import (  # noqa: F401
    DensityMatrixSimulatorV2,
)
from braket.simulator_v2.julia_import import jl, jlBraketSimulator  # noqa: F401
from braket.simulator_v2.state_vector_simulator_v2 import (  # noqa: F401
    StateVectorSimulatorV2,
)

# at init run many commonly used gates and noises to force compilation
# for this Python session
# must be done at init because each new Python session has a separate handle and
# seems to invalidate old methods
from braket.circuits.circuit import Circuit
from braket.circuits.serialization import IRType

from ._version import __version__  # noqa: F401

c = Circuit().h(0).cnot(0, 1).rx(0, 0.1).ry(1, 0.2).rz(0, 0.1)
c.x(0).y(1).z(0).zz(0, 1, 0.2).xx(0, 1, 0.1).yy(0, 1, 0.1).xy(0, 1, 0.2)
c.swap(1, 0).ecr(0, 1).gpi(0, 0.1).gpi2(1, 0.2).ms(0, 1, 0.1, 0.2, 0.3)
c.iswap(1, 0).pswap(0, 1, 0.2).cphaseshift(0, 1, 0.2).cphaseshift00(1, 0, 0.2)
c.cphaseshift01(1, 0, 0.2).cphaseshift10(0, 1, 0.2).phaseshift(0, 0.2)
c.ccnot(1, 0, 2).cswap(0, 1, 2)
device = StateVectorSimulatorV2()
device.run(c.to_ir(IRType.OPENQASM), shots=100)
c = Circuit().h(0).cnot(0, 1)
c.bit_flip(0, 0.1).phase_flip(0, 0.2).amplitude_damping(1, 0.1).phase_damping(0, 0.2)
c.two_qubit_dephasing(0, 1, 0.2).depolarizing(1, 0.2).two_qubit_depolarizing(1, 0, 0.1)
device = DensityMatrixSimulatorV2()
device.run(c.to_ir(IRType.OPENQASM), shots=100)
