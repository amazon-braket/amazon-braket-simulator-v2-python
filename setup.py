from setuptools import setup

with open("src/braket/simulator_v2/_version.py") as f:
    version = f.readlines()[-1].split()[-1].strip("\"'")

kwargs = {"version": version}

# Build options are managed in pyproject.toml
setup(**kwargs)
