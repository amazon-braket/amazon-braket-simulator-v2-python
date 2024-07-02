# Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License"). You
# may not use this file except in compliance with the License. A copy of
# the License is located at
#
#     http://aws.amazon.com/apache2.0/
#
# or in the "license" file accompanying this file. This file is
# distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
# ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

import json
from unittest.mock import Mock, PropertyMock, patch

import numpy as anp
import pennylane as qml
import pytest
from braket.circuits import Circuit, Gate, Noise, Observable, result_types
from braket.circuits.noise_model import GateCriteria, NoiseModel, NoiseModelInstruction
from braket.devices import LocalSimulator
from braket.pennylane_plugin import BraketLocalQubitDevice
from braket.tasks import GateModelQuantumTaskResult
from device_property_jsons import RESULT
from pennylane import numpy as np
from pennylane.tape import QuantumScript, QuantumTape

SHOTS = 10000

TASK = Mock()
TASK.result.return_value = RESULT
type(TASK).id = PropertyMock(return_value="task_arn")
TASK.state.return_value = "COMPLETED"
TASK_BATCH = Mock()
TASK_BATCH.results.return_value = [RESULT, RESULT]
type(TASK_BATCH).tasks = PropertyMock(return_value=[TASK, TASK])
SIM_TASK = Mock()
SIM_TASK.result.return_value.additional_metadata.simulatorMetadata.executionDuration = (
    1234
)
SIM_TASK.result.return_value.result_types = []
type(SIM_TASK).id = PropertyMock(return_value="task_arn")
SIM_TASK.state.return_value = "COMPLETED"
CIRCUIT = (
    Circuit()
    .h(0)
    .cnot(0, 1)
    .i(2)
    .i(3)
    .probability(target=[0])
    .expectation(observable=Observable.X(), target=1)
    .variance(observable=Observable.Y(), target=2)
    .sample(observable=Observable.Z(), target=3)
)

DEVICE_ARN = "baz"

CIRCUIT_1 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.CNOT(wires=[0, 1]),
        qml.RX(0.432, wires=0),
        qml.RY(0.543, wires=0),
    ],
    measurements=[qml.expval(qml.PauliX(1))],
)
CIRCUIT_1.trainable_params = [0]

CIRCUIT_2 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.CNOT(wires=[0, 1]),
        qml.RX(0.432, wires=0),
        qml.RY(0.543, wires=0),
    ],
    measurements=[qml.expval(2 * qml.PauliX(0) @ qml.PauliY(1))],
)
CIRCUIT_2.trainable_params = [0, 1]

CIRCUIT_3 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.CNOT(wires=[0, 1]),
        qml.RX(0.432, wires=0),
        qml.RY(0.543, wires=0),
    ],
    measurements=[
        qml.expval(
            2 * qml.PauliX(0) @ qml.PauliY(1) + 0.75 * qml.PauliY(0) @ qml.PauliZ(1)
        ),
    ],
)
CIRCUIT_3.trainable_params = [0, 1]

CIRCUIT_4 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.CNOT(wires=[0, 1]),
        qml.RX(0.432, wires=0),
        qml.RY(0.543, wires=0),
    ],
    measurements=[qml.expval(qml.PauliX(1))],
)
CIRCUIT_4.trainable_params = []

PARAM_5 = np.tensor(0.543, requires_grad=True)
CIRCUIT_5 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.CNOT(wires=[0, 1]),
        qml.RX(0.432, wires=0),
        qml.RY(PARAM_5, wires=0),
    ],
    measurements=[qml.var(qml.PauliX(0) @ qml.PauliY(1))],
)
CIRCUIT_5.trainable_params = [1]

PARAM_6 = np.tensor(0.432, requires_grad=True)
CIRCUIT_6 = QuantumScript(
    ops=[
        qml.Hadamard(wires=0),
        qml.QubitUnitary(
            1 / np.sqrt(2) * np.tensor([[1, 1], [1, -1]], requires_grad=True), wires=0
        ),
        qml.RX(PARAM_6, wires=0),
        qml.QubitUnitary(1 / np.sqrt(2) * anp.array([[1, 1], [1, -1]]), wires=0),
        qml.CNOT(wires=[0, 1]),
    ],
    measurements=[qml.expval(qml.PauliX(1))],
)


@patch.object(LocalSimulator, "run_batch")
def test_local_sim_batch_execute_parallel(mock_run_batch):
    """Test batch_execute(parallel=True) correctly calls
    batch execution methods for LocalSimulators in Braket SDK"""
    mock_run_batch.return_value = TASK_BATCH
    dev = BraketLocalQubitDevice(
        backend="braket_sv_v2",
        wires=4,
        shots=SHOTS,
        parallel=True,
        parametrize_differentiable=False,
    )
    assert dev.parallel is True

    with QuantumTape() as circuit:
        qml.Hadamard(wires=0)
        qml.CNOT(wires=[0, 1])
        qml.probs(wires=[0])
        qml.expval(qml.PauliX(1))
        qml.var(qml.PauliY(2))
        qml.sample(qml.PauliZ(3))

    circuits = [circuit, circuit]
    batch_results = dev.batch_execute(circuits)
    for results in batch_results:
        assert np.allclose(
            results[0],
            RESULT.get_value_by_result_type(result_types.Probability(target=[0])),
        )
        assert np.allclose(
            results[1],
            RESULT.get_value_by_result_type(
                result_types.Expectation(observable=Observable.X(), target=1)
            ),
        )
        assert np.allclose(
            results[2],
            RESULT.get_value_by_result_type(
                result_types.Variance(observable=Observable.Y(), target=2)
            ),
        )
        assert np.allclose(
            results[3],
            RESULT.get_value_by_result_type(
                result_types.Sample(observable=Observable.Z(), target=3)
            ),
        )

    mock_run_batch.assert_called_with(
        [CIRCUIT, CIRCUIT],
        shots=SHOTS,
        max_parallel=None,
        inputs=[],
    )


@patch.object(LocalSimulator, "run_batch")
def test_local_sim_batch_execute_parallel_tracker(mock_run_batch):
    """Asserts tracker updates during parallel execution for local simulators"""

    mock_run_batch.return_value = TASK_BATCH
    dev = BraketLocalQubitDevice(
        backend="braket_sv_v2", wires=1, shots=SHOTS, parallel=True
    )
    type(TASK_BATCH).unsuccessful = PropertyMock(return_value={})

    with QuantumTape() as circuit:
        qml.Hadamard(wires=0)
        qml.probs(wires=(0,))

    circuits = [circuit, circuit]

    callback = Mock()
    with qml.Tracker(dev, callback=callback) as tracker:
        dev.batch_execute(circuits)
    dev.batch_execute(circuits)

    latest = {"batches": 1, "executions": 2, "shots": 2 * SHOTS}
    history = {
        "batches": [1],
        "executions": [2],
        "shots": [2 * SHOTS],
        "braket_task_id": ["task_arn", "task_arn"],
    }
    totals = {"batches": 1, "executions": 2, "shots": 2 * SHOTS}
    assert tracker.latest == latest
    assert tracker.history == history
    assert tracker.totals == totals

    callback.assert_called_with(latest=latest, history=history, totals=totals)


@pytest.mark.parametrize("backend", ["braket_sv_v2", "braket_dm_v2"])
def test_local_default_shots(backend):
    """Tests that simulator devices are analytic if ``shots`` is not supplied"""
    dev = BraketLocalQubitDevice(wires=2, backend=backend)
    assert dev.shots is None
    assert dev.analytic


@pytest.mark.parametrize("backend", ["braket_sv_v2", "braket_dm_v2"])
def test_local_zero_shots(backend):
    """Test that the local simulator device is analytic if ``shots=0``"""
    dev = BraketLocalQubitDevice(wires=2, backend=backend, shots=0)
    assert dev.shots is None
    assert dev.analytic


@pytest.mark.parametrize("backend", ["braket_sv_v2", "braket_dm_v2"])
def test_local_none_shots(backend):
    """Tests that the simulator devices are analytic if ``shots`` is specified to be `None`."""
    dev = BraketLocalQubitDevice(wires=2, backend=backend, shots=None)
    assert dev.shots is None
    assert dev.analytic


@patch.object(LocalSimulator, "run")
@pytest.mark.parametrize("shots", [0, 1000])
@pytest.mark.parametrize("backend", ["braket_sv_v2", "braket_dm_v2"])
def test_local_qubit_execute(mock_run, shots, backend):
    """Tests that the local qubit device is run with the correct arguments"""
    mock_run.return_value = TASK
    dev = BraketLocalQubitDevice(wires=4, backend=backend, shots=shots, foo="bar")

    with QuantumTape() as circuit:
        qml.Hadamard(wires=0)
        qml.CNOT(wires=[0, 1])
        qml.probs(wires=[0])
        qml.expval(qml.PauliX(1))
        qml.var(qml.PauliY(2))
        qml.sample(qml.PauliZ(3))

    dev.execute(circuit)
    mock_run.assert_called_with(CIRCUIT, shots=shots, foo="bar", inputs={})


def test_projection():
    """Test that the Projector observable is correctly supported."""
    wires = 2
    dev = BraketLocalQubitDevice(backend="braket_sv_v2", wires=wires)

    thetas = [1.5, 1.6]
    p_01 = np.cos(thetas[0] / 2) ** 2 * np.sin(thetas[1] / 2) ** 2
    p_10 = np.sin(thetas[0] / 2) ** 2 * np.cos(thetas[1] / 2) ** 2

    def f(thetas, **kwargs):
        [qml.RY(thetas[i], wires=i) for i in range(wires)]

    projector_01_bs = qml.Projector([0, 1], wires=range(wires))
    projector_01_sv = qml.Projector([0, 1, 0, 0], wires=range(wires))
    projector_10_bs = qml.Projector([1, 0], wires=range(wires))
    projector_10_sv = qml.Projector([0, 0, 1, 0], wires=range(wires))

    projectors = [projector_01_bs, projector_01_sv, projector_10_bs, projector_10_sv]
    expected = [p_01, p_01, p_10, p_10]

    @qml.qnode(dev)
    def qnode(thetas, measure_type, observable):
        f(thetas)
        return measure_type(observable)

    for proj, exp in zip(projectors, expected):
        expval = qnode(thetas, qml.expval, proj)
        assert np.allclose(expval, exp)

        var = qnode(thetas, qml.var, proj)
        assert np.allclose(var, exp - exp**2)

        samples = qnode(thetas, qml.sample, proj, shots=100).tolist()
        assert set(samples) == {0, 1}


def get_test_result_object(rts=[], source="qubit[2] q; cnot q[0], q[1]; measure q;"):
    json_str = json.dumps(
        {
            "braketSchemaHeader": {
                "name": "braket.task_result.gate_model_task_result",
                "version": "1",
            },
            "measurements": [[0, 0, 0, 0], [1, 1, 1, 1], [1, 1, 0, 0], [0, 0, 1, 1]],
            "resultTypes": rts,
            "measuredQubits": [0, 1, 2, 3],
            "taskMetadata": {
                "braketSchemaHeader": {
                    "name": "braket.task_result.task_metadata",
                    "version": "1",
                },
                "id": "task_arn",
                "shots": 0,
                "deviceId": "default",
            },
            "additionalMetadata": {
                "action": {
                    "braketSchemaHeader": {
                        "name": "braket.ir.openqasm.program",
                        "version": "1",
                    },
                    "source": source,
                },
            },
        }
    )
    return GateModelQuantumTaskResult.from_string(json_str)


@pytest.fixture
def noise_model():
    return (
        NoiseModel()
        .add_noise(Noise.BitFlip(0.05), GateCriteria(Gate.H))
        .add_noise(Noise.TwoQubitDepolarizing(0.10), GateCriteria(Gate.CNot))
    )


@pytest.mark.parametrize("backend", ["braket_dm_v2"])
def test_valid_local_device_for_noise_model(backend, noise_model):
    dev = BraketLocalQubitDevice(wires=2, backend=backend, noise_model=noise_model)
    assert dev._noise_model.instructions == [
        NoiseModelInstruction(Noise.BitFlip(0.05), GateCriteria(Gate.H)),
        NoiseModelInstruction(
            Noise.TwoQubitDepolarizing(0.10), GateCriteria(Gate.CNot)
        ),
    ]


@pytest.mark.parametrize(
    "backend, device_name",
    [("braket_sv_v2", "StateVectorSimulatorV2")],
)
def test_invalid_local_device_for_noise_model(backend, device_name, noise_model):
    with pytest.raises(
        ValueError,
        match=(
            f"{device_name} does not support noise or the noise model "
            + f"includes noise that is not supported by {device_name}."
        ),
    ):
        BraketLocalQubitDevice(wires=2, backend=backend, noise_model=noise_model)


@pytest.fixture
def pennylane_quantum_tape():
    with QuantumTape() as tape:
        qml.Hadamard(wires=0)
        qml.QubitUnitary(1 / np.sqrt(2) * np.array([[1, 1], [1, -1]]), wires=0)
        qml.RX(0.432, wires=0)
        qml.CNOT(wires=[0, 1])
        qml.probs(wires=[0])
        qml.expval(qml.PauliX(1))
        qml.var(qml.PauliY(2))
        qml.sample(qml.PauliZ(3))
    return tape


@pytest.fixture
def expected_braket_circuit_with_noise():
    return (
        Circuit()
        .h(0)
        .bit_flip(0, 0.05)
        .unitary([0], 1 / np.sqrt(2) * np.array([[1, 1], [1, -1]]))
        .rx(0, 0.432)
        .cnot(0, 1)
        .two_qubit_depolarizing(0, 1, 0.10)
        .i(2)
        .i(3)
        .probability(target=[0])
        .expectation(observable=Observable.X(), target=1)
        .variance(observable=Observable.Y(), target=2)
        .sample(observable=Observable.Z(), target=3)
    )
