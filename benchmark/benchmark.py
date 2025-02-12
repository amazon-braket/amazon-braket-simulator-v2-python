import numpy as np
import pytest
from braket.devices import LocalSimulator
from braket.ir.openqasm import Program

# always the same for repeatability
np.random.seed(0x1C2C6D66)

batch_size = (10, 100)
n_qubits = range(3, 16)
exact_shots_results = (
    "state_vector",
    "density_matrix q[0], q[1]",
    "probability",
    "expectation z(q[0])",
    "variance y(q[0])",
)
nonzero_shots_results = (
    "probability",
    "expectation z(q[0])",
    "variance y(q[0])",
    "sample z(q[0])",
)


def ghz(nq: int, result_type: str):
    source = f"OPENQASM 3.0;\nqubit[{nq}] q;\nh q[0];\n"
    for q in range(1, nq - 1):
        source += f"cnot q[0], q[{q}];\n"

    source += f"#pragma braket result {result_type}\n"
    return source


def qft(nq: int, result_type: str):
    source = f"OPENQASM 3.0;\nqubit[{nq}] q;\n"
    for q in range(nq - 1):
        angle = np.pi / 2.0
        source += f"h q[{q}];\n"
        for ctrl_q in range(q + 1, nq - 1):
            source += f"cphaseshift({angle}) q[{ctrl_q}], q[{q}];\n"
            angle /= 2.0

    source += f"#pragma braket result {result_type}\n"
    return source


def run_sim(oq3_prog, sim, shots):
    sim.run(oq3_prog, shots=shots)
    return


def run_sim_batch(oq3_prog, sim, shots):
    sim.run_batch(oq3_prog, shots=shots)
    return


device_ids = ("sv", "dm")

generators = ("ghz", "qft")


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("exact_results", exact_shots_results)
@pytest.mark.parametrize("circuit", generators)
def test_exact_shots(benchmark, device_id, nq, exact_results, circuit):
    if device_id == "dm" and (exact_results in ("state_vector",) or nq > 10):
        pytest.skip()
    result_type = exact_results
    if circuit == "qft":
        oq3_prog = Program(source=qft(nq, result_type))
    elif circuit == "ghz":
        oq3_prog = Program(source=ghz(nq, result_type))
    sim = LocalSimulator(f"braket_{device_id}_v2")
    benchmark.pedantic(run_sim, args=(oq3_prog, sim, 0), iterations=5, warmup_rounds=1)


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("batch_size", batch_size)
@pytest.mark.parametrize("exact_results", exact_shots_results)
@pytest.mark.parametrize("circuit", generators)
def test_exact_shots_batched(
    benchmark, device_id, nq, batch_size, exact_results, circuit
):
    if (
        device_id == "dm" and (exact_results in ("state_vector,") or nq >= 5)
    ) or nq >= 15:
        pytest.skip()
    result_type = exact_results
    if circuit == "qft":
        oq3_prog = [Program(source=qft(nq, result_type)) for _ in range(batch_size)]
    elif circuit == "ghz":
        oq3_prog = [Program(source=ghz(nq, result_type)) for _ in range(batch_size)]
    sim = LocalSimulator(f"braket_{device_id}_v2")
    benchmark.pedantic(
        run_sim_batch, args=(oq3_prog, sim, 0), iterations=5, warmup_rounds=1
    )


shots = (100,)


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("nonzero_shots_results", nonzero_shots_results)
@pytest.mark.parametrize("circuit", generators)
def test_nonzero_shots(benchmark, device_id, nq, shots, nonzero_shots_results, circuit):
    if device_id in ("dm",) and nq > 10:
        pytest.skip()
    result_type = nonzero_shots_results
    if circuit == "qft":
        oq3_prog = Program(source=qft(nq, result_type))
    elif circuit == "ghz":
        oq3_prog = Program(source=ghz(nq, result_type))
    sim = LocalSimulator(f"braket_{device_id}_v2")
    benchmark.pedantic(
        run_sim, args=(oq3_prog, sim, shots), iterations=5, warmup_rounds=1
    )
    del sim


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("batch_size", batch_size)
@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("nonzero_shots_results", nonzero_shots_results)
@pytest.mark.parametrize("circuit", generators)
def test_nonzero_shots_batched(
    benchmark, device_id, nq, batch_size, shots, nonzero_shots_results, circuit
):
    if device_id in ("dm") and nq >= 5:
        pytest.skip()
    if nq >= 10:
        pytest.skip()

    result_type = nonzero_shots_results
    if circuit == "qft":
        oq3_prog = [Program(source=qft(nq, result_type)) for _ in range(batch_size)]
    elif circuit == "ghz":
        oq3_prog = [Program(source=ghz(nq, result_type)) for _ in range(batch_size)]
    sim = LocalSimulator(f"braket_{device_id}_v2")
    benchmark.pedantic(
        run_sim_batch, args=(oq3_prog, sim, shots), iterations=5, warmup_rounds=1
    )
    del sim
