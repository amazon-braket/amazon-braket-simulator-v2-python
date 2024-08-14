import pytest
from qiskit.circuit.library import TwoLocal

# Import some utilities
from qiskit.primitives import BackendEstimator
from qiskit.quantum_info import SparsePauliOp
from qiskit_algorithms import VQE
from qiskit_algorithms.optimizers import SLSQP
from qiskit_braket_provider import BraketLocalBackend

# For now, simply test that this completes in reasonable
# time and doesn't hang due to Python vs Julia threading
# issues or the GIL being locked


@pytest.fixture
def H2_op():
    # Define the Hamiltonian operator for H2 in terms of Pauli spin operators
    return SparsePauliOp.from_list(
        [
            ("II", -1.052373245772859),
            ("IZ", 0.39793742484318045),
            ("ZI", -0.39793742484318045),
            ("ZZ", -0.01128010425623538),
            ("XX", 0.18093119978423156),
        ]
    )


@pytest.fixture
def vqe():
    local_simulator = BraketLocalBackend(name="braket_sv_v2")
    # Define a `BackendEstimator` with a Braket backend
    qi = BackendEstimator(local_simulator, options={"seed_simulator": 42})
    qi.set_transpile_options(seed_transpiler=42)

    # Specify VQE configuration
    ansatz = TwoLocal(rotation_blocks="ry", entanglement_blocks="cz")
    slsqp = SLSQP(maxiter=1)
    return VQE(estimator=qi, ansatz=ansatz, optimizer=slsqp)


@pytest.mark.timeout(10)
def test_qiskit_vqe(H2_op, vqe):
    # Find the ground state
    print("Computing VQE", flush=True)
    result = vqe.compute_minimum_eigenvalue(H2_op)
    print("Done computing VQE", flush=True)
    assert result.eigenvalue < 0.0
