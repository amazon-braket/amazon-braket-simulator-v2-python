window.BENCHMARK_DATA = {
  "lastUpdate": 1728332863767,
  "repoUrl": "https://github.com/amazon-braket/amazon-braket-simulator-v2-python",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "name": "amazon-braket",
            "username": "amazon-braket"
          },
          "committer": {
            "name": "amazon-braket",
            "username": "amazon-braket"
          },
          "id": "85f2ac1b83021ecf4a2f4b4b2fee99505d0af428",
          "message": "feature: Add automated benchmarking to GitHub",
          "timestamp": "2024-09-24T18:09:25Z",
          "url": "https://github.com/amazon-braket/amazon-braket-simulator-v2-python/pull/35/commits/85f2ac1b83021ecf4a2f4b4b2fee99505d0af428"
        },
        "date": 1728332862891,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv]",
            "value": 179.70084840348088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.564804000005097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv_v2]",
            "value": 456.9547693359668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.18840040000714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv]",
            "value": 159.6599371067913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2633119999986775 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv_v2]",
            "value": 522.9836678471622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9121056000017234 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv]",
            "value": 145.469665836118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.87428539999928 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv_v2]",
            "value": 506.28773932020806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9751614000028894 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv]",
            "value": 130.8528654789334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.642171199995573 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv_v2]",
            "value": 459.49750088351016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1762904000070193 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv]",
            "value": 121.57444252356586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.225412999991022 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv_v2]",
            "value": 492.66005490645614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.029797199998029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv]",
            "value": 114.21675608230396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.75528280000708 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv_v2]",
            "value": 449.4600995399019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.224891599996681 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv]",
            "value": 104.50440749432046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.568974399996932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv_v2]",
            "value": 404.304974681726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4733803999993142 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv]",
            "value": 98.81781090645403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.119633199997224 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv_v2]",
            "value": 318.66212891738945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1381200000055287 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv]",
            "value": 92.59869381769128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.799288399994111 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv_v2]",
            "value": 206.92057448951553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.832772199995361 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv]",
            "value": 88.82433373178885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.25817619999907 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv_v2]",
            "value": 179.36477176865475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.575230800002373 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv]",
            "value": 81.16320508305688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.320853999995052 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv_v2]",
            "value": 108.05378684112225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.25465020000047 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv]",
            "value": 75.65451940055522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.217980999991141 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv_v2]",
            "value": 35.72714008409407,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.989925800000037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv]",
            "value": 48.952960307409036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.42777379999734 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv_v2]",
            "value": 22.379476737933597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.68379720000257 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 147.3699952743916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.78564180000194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 495.4621120640193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0183177999911095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 148.53971644536884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.732206200001656 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 454.5435124033954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2000094000077297 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 137.02103338630465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.298149600001125 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 515.1048310472021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9413523999901372 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 133.46858505863295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.492399800003113 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 476.1795467366455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.100048199997673 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 125.46615381115355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.970277000003989 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 464.03139525132605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1550265999962903 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 123.86734154552101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.073152999998001 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 456.6001552425771,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.190100000007078 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 116.41135909444208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.59022700000196 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 458.9866089732932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1787128000028133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 112.49709532502855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.889118399997642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 444.3316829369861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2505710000018553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 107.9407451077124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.26434219999237 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 468.3578381286487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1351195999955053 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 71.47203970206884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.991485400003967 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 182.6634819895289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.474548000006507 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 101.65611638828015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.837086400000317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 453.1283984641648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.206879999994271 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 63.629432771512924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.71599739999101 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 266.77976705959145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7484102000007624 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 95.53460006221789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.467411800004811 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 446.1816975004263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.241239400007089 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 48.871748762928824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.46171920000006 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 160.62027696080287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.225863999998182 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 86.49824052192483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.560928800008696 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 392.04976397305165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5506966000079956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 27.197185852784184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.7685100000017 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 108.77233667122803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.193514000003233 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 73.72081811180233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.564689399993313 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 373.5347911058807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6771267999947668 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 39.13368631552885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.55343220000168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 306.90847289584286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.25830040000028 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 14.857151401279719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.30765359999396 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 315.15287814047065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1730631999948855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 7.10931648454924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.6604983999955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 281.40486765141156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.553598799999236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.8756547744353242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 533.1471513999986 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 208.90125751461522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.786950599998363 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv]",
            "value": 177.83569056327414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.623168199997508 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv_v2]",
            "value": 571.7422782505378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7490397999949892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm]",
            "value": 173.25085160583805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.771977400002015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm_v2]",
            "value": 542.2909384381235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8440285999986372 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv]",
            "value": 155.88735729209247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.414888400001928 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv_v2]",
            "value": 525.9544310985378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9013053999969998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm]",
            "value": 157.801599016153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.337071400002969 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm_v2]",
            "value": 480.1621949482565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0826295999995637 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv]",
            "value": 144.68109609801883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.911753000008503 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv_v2]",
            "value": 502.51736071640926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9899810000083562 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm]",
            "value": 141.53790444528914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.065245199999026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm_v2]",
            "value": 515.2952512951814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9406350000053862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv]",
            "value": 134.21774235607194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.450579800001833 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv_v2]",
            "value": 488.4640424030905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0472336000011637 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm]",
            "value": 128.60551674967888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.77571620000117 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm_v2]",
            "value": 483.5527744179061,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.068026599999939 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv]",
            "value": 121.8779084638171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.204932400008147 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv_v2]",
            "value": 479.3412547350537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0861964000005173 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm]",
            "value": 80.72184965137791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.388219600006778 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm_v2]",
            "value": 275.3754482629154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6314058000016303 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv]",
            "value": 111.85605503790494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.940061399994192 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv_v2]",
            "value": 454.8195453430467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1986741999967307 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm]",
            "value": 68.17561575025184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.668000999995456 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm_v2]",
            "value": 208.27138127545462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.801427799998237 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv]",
            "value": 105.00684172085754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.523188999992271 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv_v2]",
            "value": 422.3397809681153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3677618000078837 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm]",
            "value": 50.057874912655855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.976876800001264 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm_v2]",
            "value": 153.48124628004436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.515453999998044 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv]",
            "value": 98.94789886513708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.106328799997755 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv_v2]",
            "value": 367.7380469506153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7193269999997938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm]",
            "value": 27.720578366360026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.074283400000695 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm_v2]",
            "value": 118.25306823555938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.45644019999554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv]",
            "value": 92.68120096972882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.78967459999376 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv_v2]",
            "value": 273.86860770119233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6513860000013665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv]",
            "value": 87.429851751253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.437741000008828 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv_v2]",
            "value": 210.40837193064135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.7526625999921635 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv]",
            "value": 81.67603403656594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.243493599999056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv_v2]",
            "value": 139.06570707253152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.190845399998125 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv]",
            "value": 76.31273820927669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.10397219999686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv_v2]",
            "value": 80.73479123251774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.386233799998081 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv]",
            "value": 47.38483520942837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.103798199999346 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv_v2]",
            "value": 43.15110159973476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.17437939999536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv]",
            "value": 155.4835728808158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.431547599993337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv_v2]",
            "value": 517.988336352903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.930545400000483 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm]",
            "value": 151.60320541322903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.596166600002107 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm_v2]",
            "value": 510.51648646498035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.958800600004906 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv]",
            "value": 141.0684513216429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.088757200006057 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv_v2]",
            "value": 529.9836669636383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8868505999989793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm]",
            "value": 136.58700329860264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.321340800001508 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm_v2]",
            "value": 516.1100660471228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9375711999941814 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv]",
            "value": 128.13433234359414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.804309600010129 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv_v2]",
            "value": 517.6480721939561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.931814400006715 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm]",
            "value": 124.29266288479717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.04552719999947 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm_v2]",
            "value": 500.84713284164064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9966171999953988 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv]",
            "value": 119.25989598329164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.38504840000951 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv_v2]",
            "value": 385.62477228804556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.59319440000354 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm]",
            "value": 115.46781438591485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.660422000002654 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm_v2]",
            "value": 464.87510618919856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.151115399999526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv]",
            "value": 110.92853752879827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.014812800000982 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv_v2]",
            "value": 447.634426631108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.233965800007809 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm]",
            "value": 72.85889138724637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.725160800004232 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm_v2]",
            "value": 336.06274533445344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.975634799997806 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv]",
            "value": 103.9792613777922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.617302400010885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv_v2]",
            "value": 498.84412827037096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.004634200000055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm]",
            "value": 64.99392326315517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.386053800000354 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm_v2]",
            "value": 42.838516425417986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.34347879999541 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv]",
            "value": 97.0060461346009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.30863580000414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv_v2]",
            "value": 461.4425098935181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1671171999969374 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm]",
            "value": 49.43956153514583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.226716600006966 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm_v2]",
            "value": 118.97782438962555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.404927599997336 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv]",
            "value": 91.01957377748532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.986647800007177 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv_v2]",
            "value": 460.17201966364036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.173100400000294 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm]",
            "value": 27.726067276001736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.06714180000381 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm_v2]",
            "value": 153.35941936155896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.520629800002098 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv]",
            "value": 86.93094589894575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.503383399997347 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv_v2]",
            "value": 441.436710513305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.265330399995946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv]",
            "value": 82.05394548024309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.1871044000045 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv_v2]",
            "value": 443.67095835403876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2539226000048984 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv]",
            "value": 77.53948240657223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.896655600002305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv_v2]",
            "value": 431.47008156137133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3176578000061454 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv]",
            "value": 71.81239018808064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.925173600000562 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv_v2]",
            "value": 386.18916487653644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5894045999962145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv]",
            "value": 46.70343216892434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.411702599993987 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv_v2]",
            "value": 62.8519070418989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.910416199994872 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv]",
            "value": 155.8108471273798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.418038399999659 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv_v2]",
            "value": 490.1796910528281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0400681999944936 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm]",
            "value": 152.89415018725794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.540472599999703 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm_v2]",
            "value": 487.66932976467734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0505697999965378 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv]",
            "value": 141.57400105605956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.063443799995639 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv_v2]",
            "value": 500.6687432408156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9973285999981272 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm]",
            "value": 136.69209130452535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.31571219999978 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm_v2]",
            "value": 443.5732665496836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2544189999962327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv]",
            "value": 129.5158250334347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.721064200006822 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv_v2]",
            "value": 462.3488951324249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1628688000078 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm]",
            "value": 126.67564965919034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8941770000028555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm_v2]",
            "value": 451.3454970338541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2155976000021838 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv]",
            "value": 119.68538828590712,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.355238800004372 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv_v2]",
            "value": 447.3630809496337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2353208000026825 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm]",
            "value": 114.58830598828561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.726894000005814 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm_v2]",
            "value": 404.5219731478605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4720536000018 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv]",
            "value": 111.92210114315664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.934785799999645 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv_v2]",
            "value": 458.2154268663387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1823796000035145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm]",
            "value": 70.45911242206898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.192628399996465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm_v2]",
            "value": 314.06175057039223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1840871999975207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv]",
            "value": 102.51238585397888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.754918800001633 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv_v2]",
            "value": 453.74196003168674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2038958000052844 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm]",
            "value": 63.704978067533894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.697360399997251 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm_v2]",
            "value": 214.08726762180422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.670992400008345 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv]",
            "value": 96.3942051042463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.374067600002945 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv_v2]",
            "value": 432.9594728285136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3096850000001723 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm]",
            "value": 44.67007797162247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.38634999999931 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm_v2]",
            "value": 129.40040639485034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.727951000003941 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv]",
            "value": 89.08133942273557,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.225695600001018 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv_v2]",
            "value": 366.34392499612494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7296753999962675 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm]",
            "value": 27.529205417437772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.32505860000492 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm_v2]",
            "value": 152.51256055308738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.556837000005089 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv]",
            "value": 83.5450322677949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.969592600007672 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv_v2]",
            "value": 404.7483129297632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.470671199989738 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv]",
            "value": 75.17782148414462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.301795400002447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv_v2]",
            "value": 355.7245073055632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8111641999998938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv]",
            "value": 70.88125473199597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.108102400007283 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv_v2]",
            "value": 379.32983191778715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6362281999922743 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv]",
            "value": 66.52264868016977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.03247419999525 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv_v2]",
            "value": 342.4331988160457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9202776000033737 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv]",
            "value": 43.31390043640863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.087276599994766 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv_v2]",
            "value": 176.84430394045958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.654691600000206 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv]",
            "value": 121.67294458493667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.218754000006356 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv_v2]",
            "value": 508.2248053138775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9676332000017283 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv]",
            "value": 114.95759743024786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.69885960000829 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv_v2]",
            "value": 441.9664466136701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2626152000043476 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv]",
            "value": 85.85703358077761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.647269399998095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv_v2]",
            "value": 437.8258409354023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2840132000055746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv]",
            "value": 63.96061663405577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.63462100000379 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv_v2]",
            "value": 396.01595278988196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5251507999996647 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv]",
            "value": 49.674428826030486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.131082000000333 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv_v2]",
            "value": 356.0910151549642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8082707999942613 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv]",
            "value": 39.977187417763716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.014266000005136 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv_v2]",
            "value": 301.3163971026999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.318770599992149 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv]",
            "value": 20.81982248303402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.03114919999416 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv_v2]",
            "value": 236.8998414951297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.221193199998652 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv]",
            "value": 26.69911285255713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.45442800000092 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv_v2]",
            "value": 210.86701473490513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.742325400002301 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv]",
            "value": 22.429006095019837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.58512319999954 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv_v2]",
            "value": 157.67497278446186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.342160600001989 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv]",
            "value": 18.500110223656762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.053731999999854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv_v2]",
            "value": 108.4872976020601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.217668999997386 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv]",
            "value": 12.415429570087761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.54493760000696 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv_v2]",
            "value": 68.595956290327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.578118800000084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv]",
            "value": 13.148964652102503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.05161519999228 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv_v2]",
            "value": 25.760681762006396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.818848400001116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv]",
            "value": 6.771947186028266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.66801519999717 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv_v2]",
            "value": 18.66666470542223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.57143420000057 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 135.69843768748964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.369281600006161 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 483.69156497755995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.067433200011237 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 134.53539090682463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.432988400000795 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 472.65072737205537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1157271999982186 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 107.5235704568954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.300286400002733 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 421.8963532276747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3702504000084446 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 104.45314901285015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.573670199995377 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 416.71688105077754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.399710800000321 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 82.12636728291778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.176357399994231 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 427.31613249234226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3401877999958742 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 79.68869134597927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.548831999993126 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 404.10238273412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.47462039999391 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 64.33654373973525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.543265799999517 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 396.0668659095654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5248261999990973 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 59.90604790728753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.692805400009547 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 351.3472339418532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.846187199997985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 47.532030956311075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.03844460000346 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 352.6299494249673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8358340000067983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 31.869715989142808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.377750599995125 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 266.50541312508136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7522689999946124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 39.813185703499464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.11730679999573 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 307.24142853185504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2547694000072624 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 23.691358757894314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.2094828000013 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 88.28795788455135,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.326572999996642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 31.572637626636947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.67299520000597 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 299.5111558621823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.338773799998762 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 14.879505304777627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.2065353999983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 90.23092674764938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.08267459999297 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 25.875592129927693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.64645860001019 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 260.0719358971752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8450900000043475 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 6.873726694542025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.4814897999995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 27.45192299430281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.42732060000071 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 20.932751167289492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.77202919999581 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 218.63301630479168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.573874600009731 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 14.781416041032347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.65251699999908 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 185.35576741119687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.395030400006817 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 8.488040331650216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 117.81282379999993 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 147.84641442446943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.763775799993255 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 4.718456295117101,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 211.93372099999124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 121.70947480994585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.216287200002625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.5083490551697947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 662.9765149999912 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 90.45668250182162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.055015200008711 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv]",
            "value": 154.75585159726873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.461791200001699 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv_v2]",
            "value": 518.2577542514384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9295417999956044 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm]",
            "value": 154.17780215846943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.486017999998239 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm_v2]",
            "value": 493.48437771615573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.026406599998154 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv]",
            "value": 119.45358490017497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.371452399990176 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv_v2]",
            "value": 472.0194872304482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1185565999985556 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm]",
            "value": 115.92145477521981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.626530800006549 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm_v2]",
            "value": 461.1693983116451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1684005999986766 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv]",
            "value": 91.93255261632638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.877539800003433 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv_v2]",
            "value": 449.87027990534955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2228629999972327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm]",
            "value": 85.58837738593517,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.683829399999013 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm_v2]",
            "value": 448.64491737756066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.228934200002186 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv]",
            "value": 67.89488237299875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.728650600000037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv_v2]",
            "value": 394.74206724440444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5332997999953477 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm]",
            "value": 63.24173063776368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.812344000005398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm_v2]",
            "value": 382.501416976734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6143693999983952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv]",
            "value": 52.59464311360004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.013343199992505 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv_v2]",
            "value": 375.86207725996604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6605504000031033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm]",
            "value": 33.2629560145158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.063473599989265 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm_v2]",
            "value": 220.84162832847426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.528131800009305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv]",
            "value": 39.67997937910755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.201626000000488 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv_v2]",
            "value": 255.0624801052217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9206079999985377 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm]",
            "value": 23.07759012579168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.33208079999622 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm_v2]",
            "value": 95.24966308285263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.498724800004311 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv]",
            "value": 32.35427025182541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.907821200003127 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv_v2]",
            "value": 267.62459142406493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.736577400002261 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm]",
            "value": 15.004588943466604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.64627759998893 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm_v2]",
            "value": 94.43406383253733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.589399199989202 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv]",
            "value": 18.415913709629983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.30086259999598 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv_v2]",
            "value": 217.08744799067617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.606438600001184 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm]",
            "value": 6.95231459008803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.83698940000613 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm_v2]",
            "value": 29.3561024273859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.06446760000108 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv]",
            "value": 22.60711120427946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.23386920000212 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv_v2]",
            "value": 171.2410927662286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.839719799996601 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv]",
            "value": 14.330456221967252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.78144900000416 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv_v2]",
            "value": 121.60342186198348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.223452799995812 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv]",
            "value": 15.82572689288649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.18825079999897 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv_v2]",
            "value": 79.8272487248338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.527050799997141 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv]",
            "value": 13.168190980022528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.94057539999994 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv_v2]",
            "value": 50.508926937634115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.798480400004337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv]",
            "value": 7.654209652733849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.6470615999956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv_v2]",
            "value": 30.319070193670605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.98254180000413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv]",
            "value": 144.7754213262208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.907249799996862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv_v2]",
            "value": 562.3992672588895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7780962000074396 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm]",
            "value": 142.06701482925962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0389316000046165 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm_v2]",
            "value": 510.8083992437653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9576811999968413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv]",
            "value": 112.08740737439986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.921608799994374 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv_v2]",
            "value": 516.5848000299878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9357905999981995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm]",
            "value": 108.02978709634105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.256706200005738 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm_v2]",
            "value": 478.5436347558793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.089673600005426 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv]",
            "value": 84.40666964619956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.847405000003164 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv_v2]",
            "value": 392.68142353089183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.54659359999323 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm]",
            "value": 82.00521244808854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.194346800004041 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm_v2]",
            "value": 410.4434882951511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.436388999990413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv]",
            "value": 65.68714176043709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.223679599989737 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv_v2]",
            "value": 432.02161490568807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3146989999986545 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm]",
            "value": 62.61354026324475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.970986399997853 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm_v2]",
            "value": 372.3438201983702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.685689800000546 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv]",
            "value": 51.07268209567751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.579939000004742 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv_v2]",
            "value": 377.8793651861962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.646347200004584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm]",
            "value": 32.557073086319555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.715291799992883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm_v2]",
            "value": 193.78820437584938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.160272799992072 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv]",
            "value": 40.49795606411957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.69260419999273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv_v2]",
            "value": 358.9638809100983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7857956000048034 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm]",
            "value": 22.610003068719994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.22821160000012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm_v2]",
            "value": 117.94931713115355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.47821780000686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv]",
            "value": 32.02673273943567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.223915600003238 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv_v2]",
            "value": 314.99223827708596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1746813999916412 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm]",
            "value": 14.193891044111288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.45284459999266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm_v2]",
            "value": 90.67195243047082,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.028768799997124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv]",
            "value": 26.381414213483108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.905473600005735 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv_v2]",
            "value": 274.4462593886949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.643700599991462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm]",
            "value": 5.995539083896428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 166.79067320000058 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm_v2]",
            "value": 29.091997787522146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.37371359999588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv]",
            "value": 22.139476176007797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.16818700000158 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv_v2]",
            "value": 231.8497576475716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.313137999997707 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv]",
            "value": 13.377802504474646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.75069240000494 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv_v2]",
            "value": 183.249527215876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.457040000010238 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv]",
            "value": 12.085328714764838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.74495660000412 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv_v2]",
            "value": 155.59980675760556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.426743199995144 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv]",
            "value": 10.825744814599835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.3723971999948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv_v2]",
            "value": 142.6771576609507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.008830400002353 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv]",
            "value": 6.746847179084617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.2173782000018 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv_v2]",
            "value": 88.98534583992014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.237805399991885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv]",
            "value": 143.0062984264036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.992698999999902 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv_v2]",
            "value": 429.19449635358336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3299459999975625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm]",
            "value": 141.82078141889633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.051152799999727 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm_v2]",
            "value": 471.2647274924097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.121949600007156 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv]",
            "value": 111.32116177431749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.98301800000354 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv_v2]",
            "value": 452.6784440320146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.209073599999556 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm]",
            "value": 107.67389479376453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.287302199993519 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm_v2]",
            "value": 451.52968776106917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.214693799999168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv]",
            "value": 84.64809172642389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.813615400001254 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv_v2]",
            "value": 399.45814301773987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.503391200002625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm]",
            "value": 83.02400801911665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.04470880001054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm_v2]",
            "value": 401.4044660588638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.491252799995891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv]",
            "value": 64.85089016407332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.419988799999373 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv_v2]",
            "value": 400.75621093974087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.495282600000337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm]",
            "value": 62.40820065725398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.02353519999724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm_v2]",
            "value": 327.61498843915325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.052363399990554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv]",
            "value": 50.87470715500296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.65613280000298 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv_v2]",
            "value": 360.84380002857824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.771282200001224 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm]",
            "value": 32.58938757357561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.68483560000459 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm_v2]",
            "value": 216.9578320323035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.6091906000015115 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv]",
            "value": 41.01359287259805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.38216040000043 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv_v2]",
            "value": 328.84432332189095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0409525999971265 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm]",
            "value": 16.68144058451949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.94686100000308 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm_v2]",
            "value": 154.4066023027324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.476407000002382 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv]",
            "value": 32.821490719150106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.46784220000518 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv_v2]",
            "value": 297.9824798222564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.355901999998423 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm]",
            "value": 14.894683639080718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.13804899999332 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm_v2]",
            "value": 90.7843004602278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.015120400008982 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv]",
            "value": 26.538947521714984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.680469399992944 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv_v2]",
            "value": 258.0804871489714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.874760199994398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm]",
            "value": 6.863517321793821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.6978911999954 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm_v2]",
            "value": 27.275936757812595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.662352200005444 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv]",
            "value": 22.229069170710126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.98613920000025 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv_v2]",
            "value": 228.9919677407245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.3669653999927505 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv]",
            "value": 18.733091932715308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.38147080000226 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv_v2]",
            "value": 195.48977715535068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.115356999999676 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv]",
            "value": 15.227335747679222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.67136999999548 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv_v2]",
            "value": 156.69563749629182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.381798600000366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv]",
            "value": 13.243405103423793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.50928120000435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv_v2]",
            "value": 137.86407247674177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.253521399991314 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv]",
            "value": 7.609196883206493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.41991399999142 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv_v2]",
            "value": 81.40382127114513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.284435600008692 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv]",
            "value": 162.32532455879834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.160468200005198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv_v2]",
            "value": 350.23737688460784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.855206399999588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm]",
            "value": 162.79451236612863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.142713200006256 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm_v2]",
            "value": 337.2054409314492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9655511999976625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv]",
            "value": 147.5330381059776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.778142799998932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv_v2]",
            "value": 322.9470963571752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.096482399996603 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm]",
            "value": 145.68627881761077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.864064399997005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm_v2]",
            "value": 310.94821294323003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.21596960000079 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv]",
            "value": 116.20914699401318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.60517459999528 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv_v2]",
            "value": 297.4413618153815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.362007199996242 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm]",
            "value": 132.494572028743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.547478999993018 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm_v2]",
            "value": 279.0870370885649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5831115999940266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv]",
            "value": 124.39014621063231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.039222000002155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv_v2]",
            "value": 262.8161369322282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.804941399994277 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm]",
            "value": 120.58614610357218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.29282660000672 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm_v2]",
            "value": 265.6912609097496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.763766999998097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv]",
            "value": 115.38373491799334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.66673279999759 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv_v2]",
            "value": 245.53166739720155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.072794400008206 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm]",
            "value": 75.33669929669934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.273743199999899 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm_v2]",
            "value": 166.47935519489548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.006750799997462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv]",
            "value": 106.92149909075489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.35265599999866 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv_v2]",
            "value": 227.20401871192223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.401330600001074 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm]",
            "value": 66.29693748590286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.08365299999923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm_v2]",
            "value": 139.50541758143822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.168180399992252 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv]",
            "value": 99.56621191929419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.04356779999398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv_v2]",
            "value": 214.06517822329084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.671474399992803 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm]",
            "value": 50.72969337299954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.712320999997246 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm_v2]",
            "value": 103.7389208389248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.63958359999424 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv]",
            "value": 93.97913463982178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.640659799992136 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv_v2]",
            "value": 202.02242222607305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9499456000035025 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm]",
            "value": 28.356554752321426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.26521500000399 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm_v2]",
            "value": 95.47534145944785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.473908599999504 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv]",
            "value": 88.08276947583495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.352958200006924 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv_v2]",
            "value": 181.59250525589874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.506835200003479 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv]",
            "value": 82.56346752821969,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.11189440000453 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv_v2]",
            "value": 180.5762571184758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.5378266000047915 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv]",
            "value": 77.25448797975027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.944231799997397 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv_v2]",
            "value": 166.8655425823309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.992849000006117 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv]",
            "value": 71.19987945005863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.044967600000291 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv_v2]",
            "value": 157.18627019430681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.361878799998522 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv]",
            "value": 45.592314653054935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.93352120000327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv_v2]",
            "value": 93.72254456639006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.669791399993755 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv]",
            "value": 144.6352514465478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.913943799997924 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 330.400041763527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0266339999911906 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm]",
            "value": 145.32108679596325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.881313799999589 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 324.9105261392916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0777704000001904 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv]",
            "value": 132.03035219358873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.574016000000938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 315.3987908620544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1705891999990854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm]",
            "value": 130.3639485072042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.670832399992378 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 298.5796209136171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3491904000015893 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv]",
            "value": 121.98154233850634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.197961600001236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 286.65112711764317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4885612000039146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm]",
            "value": 120.07559190792524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.328087199993206 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 278.09339833594663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.595914199991057 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv]",
            "value": 113.86304944090115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.782480400009263 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 269.59251468870383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.709301799995046 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm]",
            "value": 110.0881330365313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.08363119999649 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 255.00740184472818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.921454800001811 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv]",
            "value": 105.2108072120224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.504727000000912 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 238.24294872372909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.197395999995024 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm]",
            "value": 57.8430790148851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.28815299999269 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 139.04752280023612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.191785800000616 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv]",
            "value": 97.16580181980795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.291686799996569 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 219.14316338005412,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5632269999941855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm]",
            "value": 62.21865114816387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.072351000002527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 147.25885736273565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.790762999992239 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv]",
            "value": 93.00386429199592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.75224139999591 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 212.31343169522125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.710017599995808 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm]",
            "value": 48.32802340454508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.69192839999232 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 74.32632882504255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.45418260000315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv]",
            "value": 87.13674781119717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.476214399999662 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 200.12024024507005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.996995800001969 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm]",
            "value": 26.862496703168866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.226621599995724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 87.08921541156562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.482477999993534 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv]",
            "value": 82.19832245720086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.165698399996927 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 192.7572466891832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.187872400006199 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv]",
            "value": 77.28683394669166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.938814400001775 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 182.45233305080242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.480883600000652 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv]",
            "value": 73.463281846962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.612242399995012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 171.61089083918975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.827135999993516 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv]",
            "value": 68.25370639805085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.651219000006677 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 157.32187325298682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.356395199998133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv]",
            "value": 43.92802424854962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.76451120000047 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 40.602946940793416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.62875419998909 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv]",
            "value": 144.1356092384032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.937910800002101 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 308.1576352028084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2450924000045234 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm]",
            "value": 138.90488996061717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.199170599994886 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 303.8289681106823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2913254000050074 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv]",
            "value": 129.98878092830392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.69297159999951 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 290.7351150161372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.439557000001514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm]",
            "value": 126.7480360328325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.889668600000732 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 272.0958125541679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6751760000015565 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv]",
            "value": 119.37043079842377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.377283999993779 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 266.1729052802916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7569564000023092 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm]",
            "value": 117.10112511231726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.539627599998312 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 194.64819460471713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.137473800004955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv]",
            "value": 112.65451044888567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.876697400000921 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 251.96103795470154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9688675999968837 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm]",
            "value": 108.11967749796545,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.249010200005614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 240.64342275805936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.155525999999554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv]",
            "value": 103.46736309306418,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.66488340000069 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 226.15382096398892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.421769199996106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm]",
            "value": 67.79031095595246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.751370599992697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 124.15870064427884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.054208000010021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv]",
            "value": 96.73285928559324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.337748799997826 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 223.11248068429956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.48204420000593 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm]",
            "value": 57.08967110036005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.516303399997923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 101.19320961176948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.88208600000462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv]",
            "value": 92.73343407153868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.78359719999753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 209.4432077985875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.7745640000016465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm]",
            "value": 47.32062483061794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.132434399999056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 108.13063902638542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.248072599996249 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv]",
            "value": 85.72826089041938,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.664764800002558 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 184.54180410723743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.418826400000398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm]",
            "value": 26.30478410579992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.01589839999906 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 109.3347183563898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.14622559999998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv]",
            "value": 82.034092417152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.190053800009082 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 167.5771973683485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.967399000007845 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv]",
            "value": 76.35920997293641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.095997200002785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 176.66214611780293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.660522200003015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv]",
            "value": 72.45822453669537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.801055800001905 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 127.10340566191586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.867609800007358 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv]",
            "value": 67.71336358982867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.76813360000051 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 155.75426338355675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.42037000000073 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv]",
            "value": 43.31571206851182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.086310999997295 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 91.7196491334766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.902789199997187 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv]",
            "value": 148.102905453218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7520619999982046 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 344.32420796108664,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9042396000022563 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm]",
            "value": 144.41070496907264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.924694400004228 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 333.84458292840634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.995405799993023 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv]",
            "value": 134.05243707719427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.459767400007422 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 280.31156069359685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5674589999985074 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm]",
            "value": 132.8469681837269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.527458200002002 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 292.81290719288717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4151500000007218 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv]",
            "value": 122.37969470223887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.171290200004933 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 270.71214565718867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6939606000032654 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm]",
            "value": 121.105624595675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.257254800003011 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 273.4078694227652,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6575391999917883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv]",
            "value": 113.82743073976587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.785228600004302 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 254.42069958658522,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.930497800001831 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm]",
            "value": 110.33629288367385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.063201000003573 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 250.86137014365926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.986265399998956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv]",
            "value": 106.4687449606657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.392427800003134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 239.75421165422125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.170938200002183 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm]",
            "value": 70.69814445933108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.144642799999474 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 108.12001182918121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.248981600001116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv]",
            "value": 99.20765229103374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.079867599995396 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 230.92693610268122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.330374000005577 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm]",
            "value": 63.19550204747561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.823911000006776 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 124.91740149107989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.005289800007631 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv]",
            "value": 92.75097518840263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.781557799998609 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 209.24349020488336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.779121199999281 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm]",
            "value": 47.91980142032751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.86820000000671 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 112.47823911619098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.890608600006544 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv]",
            "value": 86.9175479106218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.505156600003374 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 202.95091441364266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9272997999992185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm]",
            "value": 26.94561645450636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.11178780000637 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 100.75658522875204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.92490959999941 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv]",
            "value": 82.82491535124935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.07366160000447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 192.73434684867343,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.188488800001778 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv]",
            "value": 75.81819470176598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.18944619999911 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 178.76452618220878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.593950999991648 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv]",
            "value": 73.46110589997446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.612645599994266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 172.66171746817167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.791671800000131 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv]",
            "value": 69.25562955118954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.439259400000992 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 160.41610140055388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2337881999951605 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv]",
            "value": 43.97061320800066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.74246200000789 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 94.02003612096279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.636030800003482 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv]",
            "value": 147.83925827746816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.764103199998317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv_v2]",
            "value": 294.4733362048756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.395893200001865 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm]",
            "value": 146.36309945053986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.832323200001156 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm_v2]",
            "value": 335.95894205510433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9765541999950074 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv]",
            "value": 114.81284828334256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.709826599999815 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv_v2]",
            "value": 296.6633677699296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3708240000009937 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm]",
            "value": 111.45796085484768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.971992599992973 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm_v2]",
            "value": 291.19960434155934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4340705999966303 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv]",
            "value": 86.63362691160107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.542861999998877 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv_v2]",
            "value": 273.1304629509361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.661253999996461 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm]",
            "value": 83.87538781260855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.922448599989366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm_v2]",
            "value": 262.3904441184657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.811114399991311 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv]",
            "value": 66.21131994282506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.1031575999923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv_v2]",
            "value": 237.2174656960671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.215541199994277 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm]",
            "value": 62.44666196430555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.013666199989984 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm_v2]",
            "value": 215.63743136299183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.637413800003287 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv]",
            "value": 51.13907168266752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.554519999996955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv_v2]",
            "value": 217.33591203850486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.601172399998177 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm]",
            "value": 32.64812472142199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.629630600003566 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm_v2]",
            "value": 83.41318477511388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.988512400000673 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv]",
            "value": 40.780516909045076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.521513599995615 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv_v2]",
            "value": 194.24625499064194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1481043999956455 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm]",
            "value": 24.239556276887065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.2548806000018 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm_v2]",
            "value": 110.43703291211439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.054933599998094 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv]",
            "value": 32.98110415578378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.320391800000834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv_v2]",
            "value": 175.76125715700266,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.689535999999862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm]",
            "value": 14.967648520361092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.81076180000218 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm_v2]",
            "value": 81.59650680780585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.255426600006558 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv]",
            "value": 26.633387148571078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.54685780000955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv_v2]",
            "value": 153.31846471307045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.522371599999133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm]",
            "value": 6.815678230587659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.72054139999773 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm_v2]",
            "value": 27.87876861708983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.86959000000434 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv]",
            "value": 22.13829437397074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.17059820000213 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv_v2]",
            "value": 134.42011819655212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.439362600007371 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv]",
            "value": 13.373924621111904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.77236699999139 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv_v2]",
            "value": 120.90650474087754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.270853600004102 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv]",
            "value": 15.578216522461204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.19220059999589 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv_v2]",
            "value": 102.8061239964239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.727046999989852 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv]",
            "value": 13.196216723841419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.77929500000664 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv_v2]",
            "value": 90.04657244747192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.105364399998052 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv]",
            "value": 7.485402439741986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.59335160000683 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv_v2]",
            "value": 81.66293034265999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.245458199993209 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv]",
            "value": 134.67309721724996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.425388000001476 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 335.20514118870705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9832478000002993 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm]",
            "value": 121.49343225938883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.230897600003573 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 310.53614997963746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.220236999993631 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv]",
            "value": 104.7735719478401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.544391599990831 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 301.3187213840106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3187450000013996 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm]",
            "value": 103.58411392603215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.653989999992518 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 279.0990325983374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5829575999969165 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv]",
            "value": 82.37279243804558,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.139930799992271 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 252.00465926389694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.968180599997595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm]",
            "value": 79.13431365761944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.636743200005185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 237.4044025884999,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.212221800003135 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv]",
            "value": 64.09890799947297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.600889799998185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 231.85109076208536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.313113199998497 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm]",
            "value": 60.68019488729046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.47984160000533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 165.88896262110475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.0281285999963075 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv]",
            "value": 50.33759056123679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.865869399995972 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 216.57445143085056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.617349800003012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm]",
            "value": 31.77487102245822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.471410200003902 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 131.54016032912554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.602240999995047 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv]",
            "value": 39.76524349908037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.147589000005155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 195.85236398139958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1058867999927315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm]",
            "value": 23.31913168675964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.88324340000145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 90.24765599307871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.080620200004887 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv]",
            "value": 32.08697284368799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.165295799996784 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 178.59749742767409,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.599182599996766 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm]",
            "value": 14.824274546773198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.45692660000486 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 81.17232711333268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.319469400006255 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv]",
            "value": 17.926295591104868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.783973600000536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 154.71191218601214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4636264000000665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm]",
            "value": 6.652264788360071,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.32474380000167 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 27.782746876408428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.99356119999584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv]",
            "value": 21.694737907474117,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.0941268000056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 136.62338474277422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.319391199996517 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv]",
            "value": 18.46609027892837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.1533147999985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 120.48806824729726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.2995770000025 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv]",
            "value": 15.210420871067535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.74440040000127 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 104.78616685113815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.543244400003914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv]",
            "value": 12.938083172779505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.29120199999215 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 88.83977825941781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.25621900000624 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv]",
            "value": 6.6023928476667875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.4602392000029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 82.23815818635066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.159805399994639 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv]",
            "value": 133.10119420244038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.513080600006106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 304.7036245349387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.281877599999916 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm]",
            "value": 131.99496074918898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.576046799999858 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 301.64884273961826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3151129999964724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv]",
            "value": 105.41477096645681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.486336600002687 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 273.2396915406679,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.659790400001839 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm]",
            "value": 102.13160507056128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.791288399992482 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 274.9721755655832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.636731599999621 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv]",
            "value": 81.06409924777715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.335916999995789 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 250.60459611800187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.990349800005788 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm]",
            "value": 79.40847294436034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.593114600008448 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 234.1238838439905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.271242999993774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv]",
            "value": 63.87486413335741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.65561060000391 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 219.77771769524125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.550051800003985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm]",
            "value": 55.422495995586374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.043214799990892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 201.37755133266964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.965796800001954 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv]",
            "value": 46.2993181842148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.598590199994305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 170.5875591655079,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.862092199993185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm]",
            "value": 31.548309974386612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.69741899999963 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 97.51415359436345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.254921599994304 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv]",
            "value": 40.15582161394138,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.902989399993203 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 183.6988775667681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.443691400000716 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm]",
            "value": 23.278332871356504,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.958402799990836 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 87.33942232346057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.449583399996754 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv]",
            "value": 32.35852018506841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.90376180000476 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 171.73184594312497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.823031800002809 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm]",
            "value": 14.846297058561145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.35686319999559 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 78.89636607282559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.674855000000207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv]",
            "value": 26.658824280373857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.51103160000184 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 149.61705962441246,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.683729799999583 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm]",
            "value": 6.6059834858075925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.3779139999997 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 26.99396190421324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.045321600010084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv]",
            "value": 22.020607800836174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.412007200002336 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 135.34695678037758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.388418800007912 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv]",
            "value": 13.762997148290372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.65859240000054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 118.71284881405542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.42368799999349 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv]",
            "value": 15.518818305301865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.437896000004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 34.70022541197844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.81825659999322 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv]",
            "value": 12.952735137893013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.20377119999284 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 90.22956711751294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.082841600000393 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv]",
            "value": 6.544944264471755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 152.7896892000058 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 78.7645112190799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.69607320000432 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv]",
            "value": 137.04035909826112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.297120400005497 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 331.49508260246256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0166359999952874 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm]",
            "value": 135.91402165976714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.357592599998952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 324.1110977645436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0853618000037386 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv]",
            "value": 106.73945899272341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.368606600003204 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 297.2023274980691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.364711200003967 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm]",
            "value": 104.01446966087858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.614047000002302 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 291.42970517347925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4313591999989512 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv]",
            "value": 82.29909026749202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.150802600001498 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 212.60404363506245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.703579400006674 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm]",
            "value": 79.36143125865146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.600579200000084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 250.71002332124638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.988671800004795 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv]",
            "value": 63.97303592833087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.631585799997083 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 244.13362761515998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.096117400001731 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm]",
            "value": 60.72647642430509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.467281799998545 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 219.487081517281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5560767999972995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv]",
            "value": 49.91688339747914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.03330199999027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 208.61799258441314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.793450399995436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm]",
            "value": 31.769479840982097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.476750799993166 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 105.79966913053843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.4518254000036 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv]",
            "value": 39.87425160314898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.078840600008334 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 196.45446061835068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.090238200000385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm]",
            "value": 22.365801522868804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.711118400005034 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 91.35217219752224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.946647200000825 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv]",
            "value": 32.675893485059156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.60360079999782 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 174.68930807789633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.724448800003756 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm]",
            "value": 10.839198307919643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 92.25774559999991 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 80.63336540922806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.401814000008926 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv]",
            "value": 26.51168529306191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.71921659999862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 150.22673420534068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.656604800002697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm]",
            "value": 6.440755816718044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.26128120000067 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 25.78144328025599,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.787588000002415 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv]",
            "value": 22.238073026494572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.967925000003106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 139.15846976876804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.186052000008658 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv]",
            "value": 18.541229189452018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.9338568000062 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 121.94557432424797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.200379600009455 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv]",
            "value": 15.392668781558204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.9659922000069 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 103.08705739100523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.700538800007052 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv]",
            "value": 10.337634439152655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.73392939999985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 92.28877112184952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.835554400000547 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv]",
            "value": 6.639084528029899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.6231764000063 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 81.26623455567676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.305233600000065 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}