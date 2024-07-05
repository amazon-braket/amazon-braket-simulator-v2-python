# Amazon Braket Simulator Version 2

[![Latest Version](https://img.shields.io/pypi/v/amazon-braket-simulator-v2.svg)](https://pypi.python.org/pypi/amazon-braket-simulator-v2)
[![Supported Python Versions](https://img.shields.io/pypi/pyversions/amazon-braket-simulator-v2)](https://pypi.python.org/pypi/amazon-braket-simulator-v2)
[![Build status](https://github.com/amazon-braket/amazon-braket-simulator-v2-python/actions/workflows/python-package.yml/badge.svg)](https://github.com/amazon-braket/amazon-braket-simulator-v2-python/actions/workflows/python-package.yml)
[![Documentation Status](https://img.shields.io/readthedocs/amazon-braket-simulator-v2-python.svg?logo=read-the-docs)](https://amazon-braket-simulator-v2-python.readthedocs.io/en/latest/?badge=latest)

This Amazon Braket Simulator is a second generation of our Python open source library that provides an
implementation of a quantum simulators that you can run locally. You can use the simulator to test quantum tasks
that you construct for the [Amazon Braket SDK](https://github.com/amazon-braket/amazon-braket-sdk-python) before you submit them to the Amazon Braket service for execution.

## Setting up this Amazon Braket Simulator
You must have the [Amazon Braket SDK](https://github.com/amazon-braket/amazon-braket-sdk-python) installed to use the local simulator.
Follow the instructions in the [README](https://github.com/amazon-braket/amazon-braket-sdk-python/blob/main/README.md) for setup.

## Usage

**Importing this package for the first time will install additional libraries and precompile the Julia modules, which may take a few additional minutes. 
This will not be needed for subsequent runs.**

The quantum simulator implementations `StateVectorSimulatorV2` and `DensityMatrixSimulatorV2` plug into the `LocalSimulator` interface in 
[Amazon Braket SDK](https://github.com/amazon-braket/amazon-braket-sdk-python), with the `backend` parameters as `"braket_sv_v2"` and `"braket_dm_v2"`, respectively.

Executing a circuit using the simulator:
```python
from braket.circuits import Circuit
from braket.devices import LocalSimulator

device = LocalSimulator("braket_sv_v2")

bell = Circuit().h(0).cnot(0, 1)
print(device.run(bell, shots=100).result().measurement_counts)
```

## Documentation

Detailed documentation, including the API reference, can be found on [Read the Docs](https://amazon-braket-simulator-v2-python.readthedocs.io/en/latest/)

**To generate the API Reference HTML in your local environment**

First, install tox:

```bash
pip install tox
```

To generate the HTML, first change directories (`cd`) to position the cursor in the `amazon-braket-simulator-v2-python`
directory. Then, run the following command to generate the HTML documentation files:

```bash
tox -e docs
```

To view the generated documentation, open the following file in a browser:
`../amazon-braket-simulator-v2-python/build/documentation/html/index.html`

## Testing

If you want to contribute to the project, be sure to run unit tests and get a successful result 
before you submit a pull request. To run the unit tests, first install the test dependencies using the following command:

```bash
pip install -e ".[test]"
```

To run the unit tests:

```bash
tox -e unit-tests
```

You can also pass in various pytest arguments to run selected tests:

```bash
tox -e unit-tests -- your-arguments
```

For more information, please see [pytest usage](https://docs.pytest.org/en/stable/usage.html).

To run linters and doc generators and unit tests:

```bash
tox
```
## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.

