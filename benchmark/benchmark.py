import numpy as np
import pytest
from braket.devices import LocalSimulator
from braket.ir.openqasm import Program

# always the same for repeatability
np.random.seed(0x1C2C6D66)

n_qubits = range(3, 21)
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


def generate_ghz(nq: int, result_type: str):
    source = f"OPENQASM 3.0;\nqubit[{nq}] q;\nh q[0];\n"
    for q in range(1, nq - 1):
        source += f"cnot q[0], q[{q}];\n"

    source += f"#pragma braket result {result_type}\n"
    return source


def run_sim(oq3_prog, sim, shots):
    sim.run(oq3_prog, shots=shots)
    return


device_ids = ("braket_sv", "braket_sv_v2", "braket_dm", "braket_dm_v2")


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("exact_results", exact_shots_results)
def test_exact_shots(benchmark, device_id, nq, exact_results):
    if device_id in ("braket_dm_v2", "braket_dm") and (
        exact_results in ("state_vector",) or nq > 10
    ):
        pytest.skip()
    if (
        device_id in ("braket_sv",)
        and exact_results in ("density_matrix q[0], q[1]",)
        and nq > 17
    ):
        pytest.skip()
    result_type = exact_results
    oq3_prog = Program(source=generate_ghz(nq, result_type))
    sim = LocalSimulator(device_id)
    benchmark.pedantic(run_sim, args=(oq3_prog, sim, 0))


shots = (100,)


@pytest.mark.parametrize("device_id", device_ids)
@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("shots", shots)
@pytest.mark.parametrize("nonzero_shots_results", nonzero_shots_results)
def test_nonzero_shots(benchmark, device_id, nq, shots, nonzero_shots_results):
    if device_id in ("braket_dm_v2", "braket_dm") and nq > 10:
        pytest.skip()
    result_type = nonzero_shots_results
    oq3_prog = Program(source=generate_ghz(nq, result_type))
    sim = LocalSimulator(device_id)
    benchmark.pedantic(run_sim, args=(oq3_prog, sim, shots))
