import networkx as nx
import numpy as np
import pennylane as qml
import pytest

# always the same for repeatability
np.random.seed(0x1C2C6D66)
n_qubits = range(3, 16)
n_layers = range(1, 5)
shots = (100,)


def make_wide_tapes(nq: int, nl: int, shots: int):
    gamma = 0.2
    alpha = 0.4
    p = 0.5
    seed = 42
    g = nx.erdos_renyi_graph(nq, p=p, seed=seed)
    cost_h, mixer_h = qml.qaoa.max_clique(g, constrained=False)
    ops = [qml.Hadamard(i) for i in range(nq)]
    for layer in range(nl):
        cl_op = qml.templates.ApproxTimeEvolution(cost_h, gamma, 1)
        ops.append(cl_op)
        ml_op = qml.templates.ApproxTimeEvolution(mixer_h, alpha, 1)
        ops.append(ml_op)

    measurements = [qml.expval(o) for (c, o) in zip(cost_h.coeffs, cost_h.ops)]
    tapes = [qml.tape.QuantumTape(ops, measurements, shots=shots)]
    wider_tapes = [t.expand(depth=5) for t in tapes]
    return wider_tapes


def make_qiskit_tapes(nq: int, nl: int, shots: int):
    wide_tapes = make_wide_tapes(nq, nl, shots)
    qiskit_sim = qml.device(
        "qiskit.aer",
        backend="aer_simulator_statevector",
        wires=nq,
        shots=shots,
        statevector_parallel_threshold=8,
    )
    qiskit_tapes = qiskit_sim.compile_circuits(wide_tapes)
    return qiskit_tapes


@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("n_layers", n_layers)
@pytest.mark.parametrize("nq", n_qubits)
def test_sim_aer(benchmark, shots, n_layers, nq):
    tapes = make_qiskit_tapes(nq, n_layers, shots)
    sim   = qml.device("qiskit.aer", backend="aer_simulator_statevector", wires=nq, shots=shots)
    benchmark.pedantic(sim.execute, args=(tapes,), iterations=5, warmup_rounds=1)


@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("n_layers", n_layers)
@pytest.mark.parametrize("nq", n_qubits)
def test_sim_v2(benchmark, shots, n_layers, nq):
    tapes = make_wide_tapes(nq, n_layers, shots)
    sim = qml.device(
        "braket.local.qubit", backend="braket_sv_v2", wires=nq, shots=shots
    )
    benchmark.pedantic(sim.execute, args=(tapes,), iterations=5, warmup_rounds=1)


@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("n_layers", n_layers)
@pytest.mark.parametrize("nq", n_qubits)
def test_sim_v1(benchmark, shots, n_layers, nq):
    tapes = make_wide_tapes(nq, n_layers, shots)
    sim = qml.device("braket.local.qubit", backend="braket_sv", wires=nq, shots=shots)
    benchmark.pedantic(sim.execute, args=(tapes,), iterations=5, warmup_rounds=1)


@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("n_layers", n_layers)
@pytest.mark.parametrize("nq", n_qubits)
def test_sim_lightning(benchmark, shots, n_layers, nq):
    tapes = make_wide_tapes(nq, n_layers, shots)
    sim = qml.device("lightning.qubit", wires=nq, shots=shots)
    benchmark.pedantic(sim.execute, args=(tapes,), iterations=5, warmup_rounds=1)
