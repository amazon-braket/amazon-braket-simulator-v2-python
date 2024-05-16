from braket.ahs.hamiltonian import Hamiltonian
from braket.ahs.atom_arrangement import AtomArrangement
from braket.ahs.analog_hamiltonian_simulation import AnalogHamiltonianSimulation
from braket.timings.time_series import TimeSeries
from braket.ahs.driving_field import DrivingField
from braket.ahs.field import Field
from braket.ahs.pattern import Pattern
from braket.ahs.shifting_field import ShiftingField

from braket.devices import LocalSimulator
from braket.ahs_tn_simulator.ahs_utils import get_counts, get_avg_density, show_final_avg_density
from braket.ahs_tn_simulator.ahs_simulator import LocalSimulatorTN

if __name__=="__main__":        
    tn_ahs_device = LocalSimulatorTN()
    shots = 1000
    n_atoms = 3

    # Define AHS program
    register = AtomArrangement()
    H = Hamiltonian()

    a = 4e-6  # meters

    for i in range(n_atoms):
        register.add([0, i * a])

    # e.g. trapzoid amplitude time series
    Omega_max = 2.5e6  # rad / seconds
    Delta_max = 5e6
    Delta_min = -5e6

    # e.g. the duration of the program
    t_max = 4e-6  # seconds

    # e.g. constant Rabi frequency
    Omega = TimeSeries()
    Omega.put(0.0, Omega_max)
    Omega.put(t_max, Omega_max)

    # e.g. all-zero phase and detuning
    phi = TimeSeries().put(0.0, 0.0).put(t_max, 0.0)
    Delta_global = TimeSeries().put(0.0, Delta_min).put(t_max, Delta_max)

    drive = DrivingField(
        amplitude=Omega,
        phase=phi,
        detuning=Delta_global
    )
    H += drive
    # e.g. constant strong local detuning
    Delta_local = TimeSeries()
    Delta_local.put(0., 0.).put(t_max, 0.)  # (time [s], value [rad/s])
    h = Pattern([0] * n_atoms)

    shift = ShiftingField(
        magnitude=Field(
            time_series=Delta_local,
            pattern=h
        )
    )

    H += shift
    ahs_program = AnalogHamiltonianSimulation(
        hamiltonian=H,
        register=register
    )

    json_dict = ahs_program.to_ir().json()
    print(json_dict)

    print("Starting running Local statevector sim")
    device = LocalSimulator("braket_ahs")
    results_sv = device.run(ahs_program, shots=shots, blockade_radius=6.7e-6, steps=1000).result()
    print("Finished running Local statevector sim")
    print("Results SV", results_sv)
    print("Get counts", results_sv.get_counts())
    print("Density", get_avg_density(results_sv))
    show_final_avg_density(results_sv)

    print("Starting running Local TN sim")
    results_tn = tn_ahs_device.run(ahs_program, shots=shots).result()
    print("Finished running Local TN sim")
    print("Results TN", results_tn)

    print("Get counts", results_tn.get_counts())
    print("Density", get_avg_density(results_tn))

    show_final_avg_density(results_tn)

    density_sv = get_avg_density(results_sv)
    density_tn = get_avg_density(results_tn)
    print("Difference between LocalSimulator and LocalSimulatorTN", density_sv-density_tn)
