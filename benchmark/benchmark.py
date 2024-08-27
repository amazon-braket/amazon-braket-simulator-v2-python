import numpy as np
import pytest
from braket.devices import LocalSimulator
from braket.ir.openqasm import Program

# always the same for repeatability
np.random.seed(0x1C2C6D66)

n_qubits = range(3, 21)
shots_and_results = (
    (0, "state_vector"),
    (0, "probability"),
    (0, "expectation z(q[0])"),
    (0, "variance y(q[0])"),
    (100, "probability"),
    (100, "expectation z(q[0])"),
    (100, "variance y(q[0])"),
    (100, "sample z(q[0])"),
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


@pytest.mark.parametrize("nq", n_qubits)
@pytest.mark.parametrize("shots_and_results", shots_and_results)
def test_benchmark(benchmark, nq, shots_and_results):
    shots, result_type = shots_and_results
    oq3_prog = Program(source=generate_ghz(nq, result_type))
    benchmark.pedantic(run_sim, args=(oq3_prog, LocalSimulator("braket_sv_v2"), shots))
