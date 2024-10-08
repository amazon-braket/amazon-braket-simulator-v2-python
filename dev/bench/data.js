window.BENCHMARK_DATA = {
  "lastUpdate": 1728407679955,
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
      },
      {
        "commit": {
          "author": {
            "email": "67932820+kshyatt-aws@users.noreply.github.com",
            "name": "Katharine Hyatt",
            "username": "kshyatt-aws"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5e9bcd998286ab7e31ab2adad98316b2c4bb9e3",
          "message": "feature: Add automated benchmarking to GitHub (#35)\n\n* change: nobraket branch\r\n\r\n* change: Use multiprocessing Pool rather than ProcessPoolExecutor\r\n\r\n* feature: Add automated benchmarking to GitHub\r\n\r\n* fix: Use mmap for statevector for performance boost\r\n\r\n* fix: Working tests and benchmarks\r\n\r\n* fix: Point to correct branch\r\n\r\n* fix: Linters\r\n\r\n* change: Point at new tagged version\r\n\r\n* fix: Lower maximum qubit count for GH\r\n\r\n* fix: Benchmark workflow\r\n\r\n* fix: Don't commit the output file",
          "timestamp": "2024-10-07T16:42:49-04:00",
          "tree_id": "3455d8b2949dd8d90ab74d123b48206441dba3d9",
          "url": "https://github.com/amazon-braket/amazon-braket-simulator-v2-python/commit/c5e9bcd998286ab7e31ab2adad98316b2c4bb9e3"
        },
        "date": 1728334129778,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv]",
            "value": 177.13586260436733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.645384199999626 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv_v2]",
            "value": 543.8497338852105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8387431999940418 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv]",
            "value": 162.5822853331439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.150731600007475 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv_v2]",
            "value": 523.4943204000915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9102404000022943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv]",
            "value": 149.7912180043375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.675958800008175 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv_v2]",
            "value": 528.2819436506361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.892928600000232 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv]",
            "value": 136.34108678730854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.334546200002023 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv_v2]",
            "value": 487.45424388867934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.051474600000347 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv]",
            "value": 125.25380491627935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.983789399997932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv_v2]",
            "value": 479.26002252491037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0865500000013526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv]",
            "value": 116.60433892674956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.576010199999473 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv_v2]",
            "value": 450.2249323748891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.221112000006542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv]",
            "value": 108.01142795472833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.258279599998787 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv_v2]",
            "value": 404.236168674877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4738014000035946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv]",
            "value": 101.01599871183512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.899422000000868 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv_v2]",
            "value": 309.6457627693861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2294968000087465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv]",
            "value": 96.33415033691108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.380534799992347 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv_v2]",
            "value": 261.9955995215888,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.816858000004686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv]",
            "value": 89.60225986934962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.160432799999853 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv_v2]",
            "value": 169.91752882801987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.885208000006514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv]",
            "value": 83.1005023459011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.033621599994149 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv_v2]",
            "value": 110.44023820276601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.05467080000335 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv]",
            "value": 77.66987395613693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.87500479999153 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv_v2]",
            "value": 37.21698307999858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.869453599999815 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv]",
            "value": 49.047228164567514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.388511999999537 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv_v2]",
            "value": 24.47764964902892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.8535956000037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 149.80079939101324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.675531799999135 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 495.9544991498791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0163140000022395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 126.36226737788836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.9137547999948765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 486.30776181201315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0563110000011875 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 139.1519943874574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.186386400007905 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 516.6787517818217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.935438600003181 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 136.90980442332875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.30407879999575 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 490.4918642623675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.038769799992224 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 127.041535239131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.871441399993273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 470.4329592114962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1257013999957053 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 123.88778809078649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.071820600002866 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 461.0087978914306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1691560000022037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 118.977272318886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.404966600005537 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 491.4205345987315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.034916999991765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 114.34165937277257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.745718800003033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 451.7524743388488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2136015999990377 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 110.82365179749665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.023344600007022 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 477.01648702727033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.096363599991946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 72.62424032137424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.769507200004227 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 225.43219635257012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.435923599999114 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 103.32586535306487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.678118800002267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 446.4399715926993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.239942799997152 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 65.10742034218335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.359232399998746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 260.1477660122961,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8439691999997194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 96.64650543240477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.346985600006064 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 437.74055484898133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2844582000061564 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 50.28980050728582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.884747800006153 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 138.55361607892885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.217422600001555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 79.9269429376868,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.511425599996073 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 352.9455779086518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8332980000072894 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 26.63621954991456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.54286519999823 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 87.6278117355209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.411901999997554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 74.88318298334984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.35413320000498 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 356.7303494547524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.803237800003444 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 39.682025390879296,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.200326600008793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 338.51917629949804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.954042399994705 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 16.739948413439134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.737340599997424 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 348.04874130208054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8731608000043707 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 7.6089772753100595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.423706999999 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 292.65528304046944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.416989399988779 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.9905327721437234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 502.37806379999483 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 220.0339406753955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.544753400000445 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv]",
            "value": 180.80336867042166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.530870400002641 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv_v2]",
            "value": 567.7994568634058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.7611852000072759 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm]",
            "value": 178.03734197926477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.616799200004152 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm_v2]",
            "value": 473.4301081290884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1122441999978037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv]",
            "value": 163.73120091556763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.107571400002598 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv_v2]",
            "value": 524.6826457026405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9059139999967556 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm]",
            "value": 159.40421590351644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.273359800002254 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm_v2]",
            "value": 532.7343978054591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8771080000078655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv]",
            "value": 147.0419483034843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.800780399998985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv_v2]",
            "value": 514.5159351753928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.943574400002035 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm]",
            "value": 142.79854241522813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.002872600003229 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm_v2]",
            "value": 516.7293717739589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9352490000073885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv]",
            "value": 135.78622273328156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.3645174000034785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv_v2]",
            "value": 496.30752167143095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0148797999922863 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm]",
            "value": 130.47703447624298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.664183999997931 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm_v2]",
            "value": 492.2012193381058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.031689400007508 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv]",
            "value": 124.69791307064041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.019380400003229 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv_v2]",
            "value": 501.04005895509107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9958483999971575 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm]",
            "value": 80.93811287353094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.35511879999649 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm_v2]",
            "value": 267.853407259165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7333853999939492 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv]",
            "value": 99.50405388479254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.049841799991555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv_v2]",
            "value": 435.4431949548258,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.296510799999396 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm]",
            "value": 71.53288476873915,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.979584399999112 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm_v2]",
            "value": 392.6049250406351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.547089799998048 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv]",
            "value": 107.01528193205937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.344459800001914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv_v2]",
            "value": 393.60012494328845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5406496000073275 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm]",
            "value": 54.3098888586281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.412852999995266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm_v2]",
            "value": 177.17791791904537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.644044200005283 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv]",
            "value": 99.83621868326068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.01640499999894 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv_v2]",
            "value": 358.09757084617223,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.792534999991858 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm]",
            "value": 29.99454819091644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.339392000004864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm_v2]",
            "value": 99.08190704930122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.092659999997977 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv]",
            "value": 96.21021794069249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.393906400008746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv_v2]",
            "value": 281.35775826252313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.554193800005123 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv]",
            "value": 89.32095618794943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.19558100000404 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv_v2]",
            "value": 206.44615739715783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.843877999996948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv]",
            "value": 83.44270168243285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.984271599999374 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv_v2]",
            "value": 137.18308204466226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.28952859999481 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv]",
            "value": 76.8675501699606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.009390800004894 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv_v2]",
            "value": 82.44006364172846,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.130024600003253 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv]",
            "value": 49.2735701034144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.294855800000278 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv_v2]",
            "value": 44.57039960135524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.436415399999987 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv]",
            "value": 158.11225603344982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.3246204000051875 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv_v2]",
            "value": 550.144880655922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.817702999994708 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm]",
            "value": 156.02267496242644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.409324800006289 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm_v2]",
            "value": 530.8061299630889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8839269999944008 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv]",
            "value": 145.47306020762807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.874125000001641 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv_v2]",
            "value": 550.6353230372213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.816083999995044 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm]",
            "value": 142.4827145670414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.01839519999794 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm_v2]",
            "value": 542.5545617303677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.843132599992714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv]",
            "value": 132.2166980910466,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.563341200000195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv_v2]",
            "value": 529.9072217249374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8871227999966322 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm]",
            "value": 127.0921561237958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8683061999981865 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm_v2]",
            "value": 515.3596236144358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9403925999995408 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv]",
            "value": 122.60211413613605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.156466200000523 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv_v2]",
            "value": 526.050217175267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9009591999974873 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm]",
            "value": 117.98753475850944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.475471600002038 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm_v2]",
            "value": 472.4792640672658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.116494999995666 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv]",
            "value": 113.80016604362768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.787333399993713 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv_v2]",
            "value": 529.9166006630857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.88708940000879 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm]",
            "value": 74.37032800023873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.446222799996121 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm_v2]",
            "value": 230.54948518725521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.337463600006686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv]",
            "value": 106.88362617663873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.355970000001435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv_v2]",
            "value": 495.0347519362949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0200601999931678 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm]",
            "value": 66.8065096156253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.968601199996101 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm_v2]",
            "value": 125.31860375225654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.979661199999554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv]",
            "value": 101.22002110971289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.879468399992675 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv_v2]",
            "value": 361.0877928638037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.769409600000472 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm]",
            "value": 51.056916463502326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.58598499999198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm_v2]",
            "value": 93.10655456735392,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.740382400001636 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv]",
            "value": 93.24459332418175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.724482399996305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv_v2]",
            "value": 493.43957284802036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.026590599996325 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm]",
            "value": 29.16338359875657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.28957400000172 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm_v2]",
            "value": 129.15672848683292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.742531200005942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv]",
            "value": 88.45275469468181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.305470400009199 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv_v2]",
            "value": 470.99260183616065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.123175600002014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv]",
            "value": 83.22061517113305,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.016253399997368 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv_v2]",
            "value": 411.6282341728527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.429376600002797 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv]",
            "value": 78.71939415535336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.70334980000598 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv_v2]",
            "value": 387.33987369537243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5817120000056093 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv]",
            "value": 71.08128957211612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.068399799998588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv_v2]",
            "value": 397.07757259793584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5183996000009756 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv]",
            "value": 46.96235688138503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.293650200004777 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv_v2]",
            "value": 182.37936644461996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.4830764000030285 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv]",
            "value": 154.7982871507758,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4600197999993725 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv_v2]",
            "value": 514.9108395814352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9420838000087315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm]",
            "value": 155.23554059353435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.441823799991653 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm_v2]",
            "value": 508.59231108185674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9662113999970643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv]",
            "value": 145.14824570914382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.889508000006117 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv_v2]",
            "value": 510.7826733118745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9577798000000257 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm]",
            "value": 139.29178263183854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.179174399993826 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm_v2]",
            "value": 474.6501685853387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.106814800004031 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv]",
            "value": 110.88401817776007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.018432200002735 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv_v2]",
            "value": 462.85766284662384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1604913999908604 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm]",
            "value": 47.12688317610862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.219311200002267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm_v2]",
            "value": 468.5891128571005,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1340657999985524 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv]",
            "value": 122.60650943950459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.156173800000488 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv_v2]",
            "value": 453.8957234490346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2031491999996433 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm]",
            "value": 117.34353114332923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.521986599998854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm_v2]",
            "value": 445.9936877627043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.242184199997155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv]",
            "value": 115.10240995206425,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.687915400003021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv_v2]",
            "value": 464.89494583110167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.151023599992641 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm]",
            "value": 74.39076935531037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.442527999995946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm_v2]",
            "value": 129.69355798623124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.710483199991813 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv]",
            "value": 106.46635093717822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.392638999997871 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv_v2]",
            "value": 427.1917456990122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3408691999975417 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm]",
            "value": 65.83679821429583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.189073999999891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm_v2]",
            "value": 293.12725627386243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4114875999989636 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv]",
            "value": 98.66411355507228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.13539740000624 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv_v2]",
            "value": 436.3129288676523,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2919330000036098 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm]",
            "value": 51.15860949263423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.5470519999958 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm_v2]",
            "value": 73.8898169531771,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.533664600004158 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv]",
            "value": 93.3636832525022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.710802800008423 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv_v2]",
            "value": 410.55544621249516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4357245999908628 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm]",
            "value": 27.41091256059431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.48182079999742 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm_v2]",
            "value": 136.12258677464982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.346319399994172 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv]",
            "value": 88.82490495421894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.258103800003028 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv_v2]",
            "value": 398.14451913464336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.511650799999643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv]",
            "value": 83.39253508389643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.991480999995474 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv_v2]",
            "value": 421.7677009784582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3709734000021854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv]",
            "value": 78.70500546990662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.705672200002027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv_v2]",
            "value": 398.1222643040043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5117911999927856 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv]",
            "value": 73.75326703003272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.55872139999974 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv_v2]",
            "value": 347.4810956380692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8778544000033435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv]",
            "value": 46.87515585988631,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.33326240000315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv_v2]",
            "value": 259.481586926498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.853838000009091 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv]",
            "value": 161.50754501876278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.191661200000453 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv_v2]",
            "value": 518.326307765764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9292866000000686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv]",
            "value": 122.23079114399201,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.181244599995807 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv_v2]",
            "value": 480.8478308945172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.079660000003969 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv]",
            "value": 91.8800880321973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.88375099999439 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv_v2]",
            "value": 468.3700786820885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1350638000058098 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv]",
            "value": 70.31276015722312,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.22216959999787 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv_v2]",
            "value": 428.11492351389575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.33582139999271 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv]",
            "value": 54.41563447371388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.377071400004752 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv_v2]",
            "value": 352.76307676834034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.834763800001383 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv]",
            "value": 42.44628068754416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.559190199989644 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv_v2]",
            "value": 323.5909797070819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.09032100000195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv]",
            "value": 33.993553408134574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.41734240000642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv_v2]",
            "value": 265.1199638670431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7718774000040867 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv]",
            "value": 19.77273487444642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.574693199996545 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv_v2]",
            "value": 223.26086151842134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.479065399993942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv]",
            "value": 23.184040584982448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.13311979999526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv_v2]",
            "value": 157.36704538301726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.354570600001352 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv]",
            "value": 15.04458390225542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.46910319999506 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv_v2]",
            "value": 111.1504954366948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.996810999997251 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv]",
            "value": 13.237140585853968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.54501619999883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv_v2]",
            "value": 70.38955918987615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.206652400002895 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv]",
            "value": 11.671457200713851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.67910439999196 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv_v2]",
            "value": 43.15177379855249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.1740183999932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv]",
            "value": 7.069004765818492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.462629199998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv_v2]",
            "value": 24.15058060893587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.40687200000457 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 140.17653889365272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.133861400006936 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 481.2342233358616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.077990200007207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 137.85246048172533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.254132399998525 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 481.16563722855574,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0782864000011614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 110.16813066886132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.077035200004957 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 483.6566142508295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0675826000001507 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 102.30709873764776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.774492799999734 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 432.18547464328856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.31382140000278 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 84.10033964426505,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.890558400000373 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 449.1604293234717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2263760000100774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 81.00342244319988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.345157400000062 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 384.66764023457324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.599646800001665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 65.33082635430739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.306709800006502 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 415.48533797875285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4068238000040765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 61.90184556144572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.154607199996462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 363.0884829201176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.75414960000262 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 51.25005810475796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.512172999998256 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 338.5993890454533,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9533425999943574 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 32.48738880175512,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.78117500000417 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 87.64308105463063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.409913800002869 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 40.955182318065084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.41693439999426 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 312.03354884918105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2047835999946983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 22.248740149516745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.94636519999631 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 228.30905319799237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.380027800004882 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 32.95723286222703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.342353199989702 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 305.43311760040194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2740391999936946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 12.061347283319556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.90947740000547 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 106.48312950516066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.391158999994786 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 26.453262064435265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.80252120000114 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 257.5024497492273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8834582000049522 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 7.3537082114942285,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.98581439999862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 36.40074738889566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.471963399989363 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 16.582704674152883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.30379360000779 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 232.5241261220491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.30062899999939 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 14.903616434661107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.09780840000121 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 192.55065420401294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.193438600008449 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 7.205971477880067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.77379379999866 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 152.56496956352586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.55458459999636 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 4.746435973373373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 210.6843968000021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 127.51291616571211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.842342800006462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.6221344865335823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 616.4716971999951 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 99.61779838522845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.038366800006315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv]",
            "value": 163.5093341268215,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.115858799989837 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv_v2]",
            "value": 534.4265277377548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8711645999928805 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm]",
            "value": 159.9719985015752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.251093999992463 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm_v2]",
            "value": 457.1314889367323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.187554399995406 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv]",
            "value": 125.06353853072306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.995935600001758 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv_v2]",
            "value": 508.10178457542884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9681095999999343 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm]",
            "value": 119.03989845996034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.400544799997078 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm_v2]",
            "value": 492.34516507634817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.031095400002414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv]",
            "value": 93.02077410624582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.750286799998321 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv_v2]",
            "value": 460.24555388987824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1727531999999883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm]",
            "value": 89.86716285320583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.127535000002808 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm_v2]",
            "value": 413.93620547568014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.415831200005414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv]",
            "value": 70.19944927126588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.245126000002983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv_v2]",
            "value": 420.13438586527417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.380190799999582 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm]",
            "value": 65.85648178789643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.184534200000144 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm_v2]",
            "value": 391.9506813162923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.551341399998819 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv]",
            "value": 49.51807180351903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.19464740000103 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv_v2]",
            "value": 365.8098862613275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7336603999970066 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm]",
            "value": 34.18781889243873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.250184199997875 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm_v2]",
            "value": 136.95531194730097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.301651800003128 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv]",
            "value": 42.53285390753269,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.511236800004554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv_v2]",
            "value": 323.3139420408701,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.092968999999357 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm]",
            "value": 24.98181286551257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.02912059999062 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm_v2]",
            "value": 73.28689357865566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.645004599993626 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv]",
            "value": 34.107054362745465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.31944779999185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv_v2]",
            "value": 284.7865325594097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5114019999923585 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm]",
            "value": 12.068024490143936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.86360380000133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm_v2]",
            "value": 95.57673909901102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.462796800004526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv]",
            "value": 27.217732261111657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.74075380000659 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv_v2]",
            "value": 223.03038521371053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.483693999998195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm]",
            "value": 7.044017491923925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.96444020000172 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm_v2]",
            "value": 37.58758659427193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.60452800000712 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv]",
            "value": 23.248474680368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.013574599990534 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv_v2]",
            "value": 180.5879379827731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.53746839999576 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv]",
            "value": 14.841198508110653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.38000299999385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv_v2]",
            "value": 126.45613928257336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.907880199991269 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv]",
            "value": 13.124974744266598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.19062280000435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv_v2]",
            "value": 76.14001320021649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.133698800004368 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv]",
            "value": 11.280133636195073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.65143199999466 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv_v2]",
            "value": 52.611465860881104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.007263599996804 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv]",
            "value": 6.849885964262708,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.9878318000051 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv_v2]",
            "value": 30.660189362357208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.6155846000006 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv]",
            "value": 141.51631218925732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0663231999901654 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv_v2]",
            "value": 473.24580557355733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.113066800006891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm]",
            "value": 140.750406853073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.104775200002678 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm_v2]",
            "value": 510.5850405933161,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.958537600000909 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv]",
            "value": 112.26573929172396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.907437000004848 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv_v2]",
            "value": 495.32409104792646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0188802000006945 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm]",
            "value": 109.95817762702856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.094366800002263 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm_v2]",
            "value": 490.2177537434211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0399098000098093 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv]",
            "value": 86.40359134797275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.573593000002802 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv_v2]",
            "value": 415.965176060951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4040474000003087 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm]",
            "value": 82.78610750438759,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.07932139999457 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm_v2]",
            "value": 454.39323281281366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2007369999982984 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv]",
            "value": 66.72152688533268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.987666599995464 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv_v2]",
            "value": 439.4772576227677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.275430600002437 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm]",
            "value": 61.75464917406427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.1931127999992 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm_v2]",
            "value": 366.099186080659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7315002000023014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv]",
            "value": 52.340005996703276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.1058441999985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv_v2]",
            "value": 406.67397540991357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.458972200008702 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm]",
            "value": 32.55241797048901,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.719684200005304 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm_v2]",
            "value": 138.18001772131763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.236936399999649 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv]",
            "value": 40.92451658712874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.435230599999613 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv_v2]",
            "value": 359.2959380525528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7832209999928637 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm]",
            "value": 24.072610272142754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.54098739999199 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm_v2]",
            "value": 103.90090762644867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.624554999993506 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv]",
            "value": 22.545110895659374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.35551479999731 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv_v2]",
            "value": 328.0950982328635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0478968000011264 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm]",
            "value": 15.049436737508593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.44766959999515 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm_v2]",
            "value": 105.73371745686731,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.45772100000113 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv]",
            "value": 27.28669756576073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.647893999997905 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv_v2]",
            "value": 280.372280556603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.566686400006347 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm]",
            "value": 7.212046747869762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.65689379999822 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm_v2]",
            "value": 36.50812996624181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.391159200010406 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv]",
            "value": 22.77505427352837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.907688999991024 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv_v2]",
            "value": 245.18142493777165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.078612399996473 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv]",
            "value": 18.889943573210044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.93822059999229 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv_v2]",
            "value": 203.19429560466236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.921397999999044 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv]",
            "value": 15.789757235006304,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.332196000010306 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv_v2]",
            "value": 171.728424959656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.823147799992512 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv]",
            "value": 11.016491421059493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 90.7730021999896 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv_v2]",
            "value": 151.35891242449756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.606812799998352 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv]",
            "value": 8.202594382500015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 121.9126478000021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv_v2]",
            "value": 106.5844959890262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.382227599996895 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv]",
            "value": 144.6724472567478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.912166200004322 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv_v2]",
            "value": 340.8113942254795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.934174199992867 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm]",
            "value": 139.19947384829257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.183935199998359 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm_v2]",
            "value": 365.2042452207827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7381938000075934 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv]",
            "value": 114.39542145600467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.741608599996198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv_v2]",
            "value": 477.13320051137293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.095850800003518 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm]",
            "value": 108.88841781336838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.18371320000233 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm_v2]",
            "value": 439.48637403234824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.275383400001374 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv]",
            "value": 86.51013246473967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.559339599989471 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv_v2]",
            "value": 425.7154254144163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.348987000004854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm]",
            "value": 82.64682063057478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.099678999993557 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm_v2]",
            "value": 384.6093196215059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.600041000005149 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv]",
            "value": 66.72538055315422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.986801000009109 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv_v2]",
            "value": 403.40870675364243,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.478875600002084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm]",
            "value": 62.00075211872074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.128836600000795 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm_v2]",
            "value": 369.4320130557761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7068580000104703 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv]",
            "value": 51.669459349281354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.353792599997632 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv_v2]",
            "value": 356.23291106190516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8071522000004734 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm]",
            "value": 20.92034960983431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.80034840000553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm_v2]",
            "value": 71.77157393221735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.933092800004943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv]",
            "value": 41.32687640010717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.19732840000961 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv_v2]",
            "value": 331.7599507085182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0142275999992307 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm]",
            "value": 24.3188938101737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.12029140000004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm_v2]",
            "value": 107.72201145687742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.28315380000413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv]",
            "value": 33.26381572834963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.06269660000953 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv_v2]",
            "value": 285.59516804982553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5014597999975194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm]",
            "value": 15.122830075774006,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.12518919999957 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm_v2]",
            "value": 78.63023612506716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.71775399999342 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv]",
            "value": 27.14755792867113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.835725799994634 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv_v2]",
            "value": 258.21160678745133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.872792599997865 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm]",
            "value": 6.527665120794698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 153.1941331999974 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm_v2]",
            "value": 31.513768866677527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.732161400009318 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv]",
            "value": 22.438849971423807,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.565563799994834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv_v2]",
            "value": 221.69680080441572,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.510664999997971 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv]",
            "value": 18.94345702390449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.788675199997215 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv_v2]",
            "value": 202.08593914706194,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.948389800006225 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv]",
            "value": 16.07693862060377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.20089679999319 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv_v2]",
            "value": 166.05140194203628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.022231600002215 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv]",
            "value": 13.421788430974749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.50571919999902 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv_v2]",
            "value": 112.22663135717329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.910541000000194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv]",
            "value": 7.707699458231443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.7403986000063 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv_v2]",
            "value": 99.53316160289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.046902799990676 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv]",
            "value": 163.61188015971499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1120255999981055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv_v2]",
            "value": 353.0114880532401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8327689999969152 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm]",
            "value": 163.17573929235897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.128361999992649 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm_v2]",
            "value": 346.98812571936605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8819429999998647 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv]",
            "value": 148.36300855631134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.740224599991507 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv_v2]",
            "value": 309.58924194687404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.230086400003529 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm]",
            "value": 148.89559077869936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.716115599999739 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm_v2]",
            "value": 318.90032961546524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1357759999991686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv]",
            "value": 137.27530914669606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.284631200002423 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv_v2]",
            "value": 293.42004952052986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4080834000064897 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm]",
            "value": 131.99978700521123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.575769799996124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm_v2]",
            "value": 277.8010822015106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5996980000049916 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv]",
            "value": 105.36277118584589,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.491018400001394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv_v2]",
            "value": 269.47205035887896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.710960000000796 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm]",
            "value": 121.61517897531638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.222657800001798 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm_v2]",
            "value": 263.37146126902746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7969185999941146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv]",
            "value": 107.70566849762741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.284562400000596 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv_v2]",
            "value": 192.8503211900128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.185368600007223 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm]",
            "value": 75.18943187873509,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.299741399998766 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm_v2]",
            "value": 134.64271397909016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.427063600005113 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv]",
            "value": 107.8657820896977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.270780599990758 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv_v2]",
            "value": 237.48899654107996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.210721399999784 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm]",
            "value": 67.70749975525608,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.769412600003307 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm_v2]",
            "value": 84.22775913799818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.872570399998494 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv]",
            "value": 101.13439415891399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.887833000004775 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv_v2]",
            "value": 221.43856589970093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.515925200007587 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm]",
            "value": 51.59178028612293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.382932600001368 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm_v2]",
            "value": 98.95314107650134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.10579339999822 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv]",
            "value": 94.60106786446062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.5707051999957 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv_v2]",
            "value": 207.74373928935685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.8136227999975745 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm]",
            "value": 27.007786388035342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.02635919999011 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm_v2]",
            "value": 112.10669579894842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.920073799993133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv]",
            "value": 88.8606635825959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.25357340000619 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv_v2]",
            "value": 196.71812786637628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.083415600006447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv]",
            "value": 83.97647838988256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.908096400009072 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv_v2]",
            "value": 176.48260566278793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.666280799994183 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv]",
            "value": 78.71210374280273,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.704526400000304 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv_v2]",
            "value": 166.07798111894067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.0212677999970765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv]",
            "value": 73.37713801718351,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.628223000000617 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv_v2]",
            "value": 153.4282436356819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.517704800000956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv]",
            "value": 41.71289463453911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.973402199999327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv_v2]",
            "value": 91.28946089648002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.95416699999987 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv]",
            "value": 147.88769491248885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.761887800007571 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 340.8546316355177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9338019999954668 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm]",
            "value": 145.8291322391909,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.857340399994882 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 337.07963641342263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9666579999911846 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv]",
            "value": 135.2655640412816,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.392864600001303 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 319.89703921810013,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.12600580000435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm]",
            "value": 132.98470064205483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.519662000004246 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 312.9502963582745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1953955999938444 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv]",
            "value": 124.00364927862869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.064278799997737 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 280.90948152611946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5598656000047413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm]",
            "value": 120.52068019183588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.297331199992186 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 278.91004409147644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5853854000038154 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv]",
            "value": 116.20391826126539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.60556180000458 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 245.2986791056893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.07666280000285 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm]",
            "value": 111.75117965105046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.948451399999158 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 243.27097876499658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.110642399996323 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv]",
            "value": 108.51692244364104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.215152599995236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 241.18500172733454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.146194800000558 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm]",
            "value": 70.25085695858647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.234701800000948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 159.26305797813012,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.278919999999744 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv]",
            "value": 101.60226569800813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.842300200000409 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 163.64922051417844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.110631000001376 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm]",
            "value": 62.81055343420002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.920891400003256 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 101.13449030379256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.887823600001866 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv]",
            "value": 94.6860539012849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.561217400004352 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 222.04334410398826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.503625200004535 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm]",
            "value": 48.8492432338796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.471146199997747 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 111.79060921322487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.945295199998782 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv]",
            "value": 89.90058936660066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.123397600010776 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 204.83483962020352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.881982000006246 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm]",
            "value": 28.796915329725852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.72594159999289 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 86.94889594292977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.501008599998386 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv]",
            "value": 84.1029425398992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.89019040000403 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 187.29933685529704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.339047200004643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv]",
            "value": 36.85871674963592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.13062439999021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 179.16585609035593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.581420600003639 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv]",
            "value": 74.51535288994471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.420053200002258 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 166.89987586342698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.991616199992222 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv]",
            "value": 70.38524689190213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.207522799995331 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 154.24223842249162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.483308400004262 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv]",
            "value": 43.811235017942984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.82519540000294 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 106.63348573825972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.37791719999268 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv]",
            "value": 143.68890455558812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.959479599993301 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 294.76436006479327,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3925404000001436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm]",
            "value": 142.40017256634283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.022463399994194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 296.3602398598849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.374271799998496 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv]",
            "value": 133.22361746728922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.506176599997616 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 293.72812900376675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4045087999970747 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm]",
            "value": 128.79674780989416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.764171200005876 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 289.3968691430083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4554623999952128 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv]",
            "value": 122.14646915355905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.186892399999124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 271.2677731936221,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.686394399994697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm]",
            "value": 117.34655500450779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.521766999990632 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 268.9050321542516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.718785000000935 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv]",
            "value": 113.33773159281105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.823187000007238 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 247.54107548178857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.039733599984174 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm]",
            "value": 110.14840184016634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.07866100001229 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 172.24698674597877,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.805616799989366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv]",
            "value": 106.62100217076325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.379015200011054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 239.33688365674826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.178210999998555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm]",
            "value": 68.83444695993907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.527610000004643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 108.3039380199828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.233274600001096 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv]",
            "value": 100.06589339071674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.993415000008099 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 225.29544230520165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.438616199990975 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm]",
            "value": 61.82674079746649,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.174231199988753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 82.13489351963904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.175093399991965 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv]",
            "value": 92.4928698634167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.811644199998227 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 203.71219850253763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.908886199996232 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm]",
            "value": 47.80533636438651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.918166799992832 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 98.51122158085354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.15112779998617 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv]",
            "value": 87.10243270472601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.480735600002845 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 195.665469806786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.1107638000075895 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm]",
            "value": 27.092747882605718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.91024639999796 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 94.94714102751034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.53217600001517 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv]",
            "value": 82.07995598931427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.183242400010386 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 181.70868086351263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.503314399993542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv]",
            "value": 77.76514422520104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.85923160000948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 175.23042888971045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.706771400014077 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv]",
            "value": 73.78046172085641,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.553723799986983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 166.93313646834804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.990422399986528 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv]",
            "value": 68.44338484358097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.610615799983862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 103.1665167211719,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.693067399985011 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv]",
            "value": 43.38915915609841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.047231600003215 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 139.44805622669,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.171128999993925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv]",
            "value": 146.54929748390347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.823642399990604 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 286.8992451739883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.485544199998003 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm]",
            "value": 144.51279707085465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.919802399988839 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 308.3707232842581,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.242849999992359 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv]",
            "value": 135.13983580995475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.399742600000536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 284.8029001592814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5112002000005305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm]",
            "value": 134.18803597723812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.452229199998328 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 289.14707280644575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.458447600019099 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv]",
            "value": 125.32777599892127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.979077200002394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 277.01421886291126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.609922999999071 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm]",
            "value": 121.51968827936777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.229119200018431 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 273.494998049834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6563740000019607 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv]",
            "value": 116.18135854301485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.60723280000002 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 257.1567627116404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8886785999920903 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm]",
            "value": 111.59405048367562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.961051200003567 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 249.7368398044925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.004215000009026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv]",
            "value": 107.82963254485614,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.273888600000646 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 247.86209032642958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.034501599994655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm]",
            "value": 70.18332769496091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.2483982000158 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 156.8088127058344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.3771925999844825 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv]",
            "value": 101.64039878976675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.838607599999705 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 231.37875359940202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.321918000005098 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm]",
            "value": 63.24634961682315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.811189199985163 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 140.72716088254913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.105948799994621 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv]",
            "value": 95.34528513170112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.48819560000993 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 217.90756526681506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.589101800002027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm]",
            "value": 48.60221866018368,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.575192399996922 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 81.50938425690184,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.268526000002566 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv]",
            "value": 89.05183236968244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.229415200000403 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 200.86991134233116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.97834640000292 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm]",
            "value": 29.25600265009011,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.18101959998694 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 93.47892863424612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.697598000001562 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv]",
            "value": 84.51767386260073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.831844800008184 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 194.51396697787843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.141019000006963 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv]",
            "value": 79.47331192406861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.58284040000035 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 183.02405745104483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.463762599993061 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv]",
            "value": 74.9405376809921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.34391279999636 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 133.41766041031622,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.495259600000281 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv]",
            "value": 32.64162296029481,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.635731600000327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 160.50017504145532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.230522800001381 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv]",
            "value": 44.07619624821745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.68798320001224 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 100.70249253161549,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.930240800008505 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv]",
            "value": 150.9996022673982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.6225339999846256 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv_v2]",
            "value": 337.45696748626665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.963340800010883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm]",
            "value": 146.89696899300333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.8074923999802195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm_v2]",
            "value": 327.9118357892857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0496001999836153 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv]",
            "value": 114.16508549918225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.759245400005966 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv_v2]",
            "value": 302.3435982603345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.307495200010635 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm]",
            "value": 114.25120389346513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.752643000002536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm_v2]",
            "value": 297.72546675064166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3587990000114587 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv]",
            "value": 87.55655058703357,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.421190000010029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv_v2]",
            "value": 264.2103977153106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7848623999934716 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm]",
            "value": 83.88025355655317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.921757000004618 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm_v2]",
            "value": 259.70769172124386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8504827999986446 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv]",
            "value": 67.57809605228267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.797694200001388 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv_v2]",
            "value": 240.13300679119632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.164358799994261 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm]",
            "value": 63.898739412115795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.64976099998603 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm_v2]",
            "value": 219.6830571026358,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.552012399994965 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv]",
            "value": 52.844340832414524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.923502200004805 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv_v2]",
            "value": 198.08194872055196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.048415600003864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm]",
            "value": 33.00835943303165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.295356000010543 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm_v2]",
            "value": 181.9856483203705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.494938800006821 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv]",
            "value": 41.378586191039204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.16708959999596 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv_v2]",
            "value": 136.10825397204104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.347092999998495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm]",
            "value": 24.186685454117928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.345061599986366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm_v2]",
            "value": 85.88891063023543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.64294659999996 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv]",
            "value": 33.22274345825426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.099862200017924 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv_v2]",
            "value": 175.28096048019634,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.70512620001864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm]",
            "value": 15.078537724788106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 66.31942819999495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm_v2]",
            "value": 92.01913953938073,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.867304399994282 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv]",
            "value": 27.451046877527997,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.42848319998393 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv_v2]",
            "value": 157.07851060417931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.366243200000099 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm]",
            "value": 7.037310613269386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.09973879999325 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm_v2]",
            "value": 34.64398599732291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.865038800017828 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv]",
            "value": 22.702989300334167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.047062999993614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv_v2]",
            "value": 142.0356613482319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.040485399988938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv]",
            "value": 19.020451032409508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.574988800006395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv_v2]",
            "value": 41.04276229808575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.364831799994136 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv]",
            "value": 15.396406758262373,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.95021959999576 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv_v2]",
            "value": 104.16165822685446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.600461600007293 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv]",
            "value": 13.386543809748874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.70188080001208 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv_v2]",
            "value": 96.56800217326561,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.355396999989352 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv]",
            "value": 7.694598007161048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 129.96130520000406 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv_v2]",
            "value": 83.73239214559959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.942809399988619 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv]",
            "value": 136.221104506921,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.341006399997241 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 350.58353928885356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8523872000050687 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm]",
            "value": 134.18750659018067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.4522586000057345 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 342.10284323032045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9230976000008013 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv]",
            "value": 107.6803969150987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.28674140000112 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 299.79132125569953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3356536000155756 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm]",
            "value": 104.35289745616967,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.582867600011014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 298.1780071427056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3537013999875853 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv]",
            "value": 82.72448252072127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.088319800000136 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 275.51366768304297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6295839999866075 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm]",
            "value": 80.12576925349252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.48037939999449 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 267.1171758103105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.743675400005486 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv]",
            "value": 64.79915082004706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.43230100000983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 238.43119900830197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.194082000003618 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm]",
            "value": 61.4496080522798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.27349679999952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 231.87815415210133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.312609799990241 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv]",
            "value": 50.539471969423644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.786514600014016 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 222.95376821769239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.485234799994942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm]",
            "value": 31.862233209387643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.385119600008693 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 120.80048586904155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.278112400012105 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv]",
            "value": 40.24618138396057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.84707779999553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 201.33362588434383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.966880200004198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm]",
            "value": 23.731258458143255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.13851540000633 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 85.7652351648337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.65973600000143 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv]",
            "value": 32.82086571045187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.46842240000842 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 179.32379435946766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.576504800001203 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm]",
            "value": 14.078175670258796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.03193079999528 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 91.15191629949992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.970696399999724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv]",
            "value": 26.843109215223784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.253508599997076 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 158.8478120097311,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.295333799994296 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm]",
            "value": 6.701916774067749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.21104419997846 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 34.94295834604883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.618069200001628 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv]",
            "value": 22.07807359659366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.29380679998667 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 142.64299089725603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.010509199994885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv]",
            "value": 18.705130600343836,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.46126800000093 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 125.50214663915827,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.967991199984681 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv]",
            "value": 15.79857684081833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.29684059999181 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 106.88427963980257,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.355912799992439 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv]",
            "value": 13.359081056170954,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.85544820001451 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 93.78100634524989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.663139999996929 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv]",
            "value": 6.876023729916502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.43288960001064 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 83.89379139970106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.91983319999963 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv]",
            "value": 133.02716864426316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.517261399993913 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 321.84378899812344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1070973999931084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm]",
            "value": 130.54924705322335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.659944600004565 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 309.62121930748805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2297528000071907 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv]",
            "value": 106.56930722096038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.38356480000948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 289.58268008205334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.453245200012134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm]",
            "value": 102.15684565489049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.788869199996952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 270.26698324068514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7000449999823104 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv]",
            "value": 78.6333263669908,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.717254199992567 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 229.64570857129772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.354533800005811 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm]",
            "value": 78.66643278612497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.711902199998804 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 239.48198705178473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.17567939998662 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv]",
            "value": 63.24767287784586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.810858399981955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 163.7439839232963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.107094599997254 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm]",
            "value": 60.815747405815074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.44310960000439 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 212.7255667455339,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.700892400001067 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv]",
            "value": 50.29195637391591,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.88389539999389 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 212.64734547238047,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.702621599994927 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm]",
            "value": 31.49652308938529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.749536199981776 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 40.14938171679087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.90698379999685 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv]",
            "value": 39.90761897028852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.057871799981513 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 190.67569172776774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.244507000020349 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm]",
            "value": 23.55433624283415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.45502779999697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 116.03238491706163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.618283600003451 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv]",
            "value": 32.485130548722275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.783314799987238 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 172.91671839757188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.783130800000436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm]",
            "value": 14.796563264987387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.5832612000022 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 88.08298361294617,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.352930600014588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv]",
            "value": 24.968450739534507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.050542600010886 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 152.63109759699995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.551744800003689 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm]",
            "value": 6.639593326501979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.61163400000623 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 30.18299891877845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.13123400000677 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv]",
            "value": 22.361180361206713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.7203583999908 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 133.51112030127857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.490012800008117 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv]",
            "value": 18.6717219333065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.55692440000439 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 119.5035992573237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.36794879999161 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv]",
            "value": 15.728080413677537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.58054979998543 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 106.07288705087882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.427479800001493 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv]",
            "value": 13.34133785142796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.95500160000574 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 95.29041784531853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.494234599991614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv]",
            "value": 7.465800340770121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.94411239999044 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 76.07596404111263,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.144756199994845 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv]",
            "value": 137.6698946311886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.263752199992268 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 335.90709830790564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.977013600002465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm]",
            "value": 133.15282426318535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.51016740000523 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 293.65063890251787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4054071999889857 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv]",
            "value": 36.76165196218521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.20225959999425 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 291.60606120665136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.429284000003463 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm]",
            "value": 104.9787252214169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.52573960000791 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 291.83745237618393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4265649999952075 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv]",
            "value": 82.8546681066902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.069325999982539 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 272.6761583416721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6673540000037974 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm]",
            "value": 80.48217320663454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.425111800007471 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 262.99093701669904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.802412400000321 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv]",
            "value": 64.27135551399482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.559030800000073 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 135.95435936030606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.355409599995255 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm]",
            "value": 61.58869744922865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.23674539998774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 226.53764351004173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.414277400019273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv]",
            "value": 51.273877962962885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.50310839999929 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 216.48203274811053,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.619321000018317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm]",
            "value": 32.11794325426818,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.135244000006423 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 90.44723607620855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.05616980000832 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv]",
            "value": 40.59402503365798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.634167199997137 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 195.32619572309878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.119641000010233 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm]",
            "value": 23.6934919280268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.20568260000164 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 87.6250720846886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.412258800010022 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv]",
            "value": 32.475467236397925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.792474600002606 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 169.56432312381529,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.897466999999779 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm]",
            "value": 14.89885615015025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.11924660000932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 92.14607319888059,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.85233439998774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv]",
            "value": 26.833433522217955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.26694160000079 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 151.63373828849336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.594838399996661 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm]",
            "value": 7.181848423929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.23991999999998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 35.01886336601476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.556038199985778 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv]",
            "value": 22.3050777545107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.83284080001795 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 108.13323242615235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.247850800011292 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv]",
            "value": 14.13054351714214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.76868619999459 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 124.4592184730446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.034760399982588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv]",
            "value": 15.801555370481573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.28490939999938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 103.33001643957866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.677730000021256 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv]",
            "value": 13.341025590807593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 74.95675600000595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 94.86458715760854,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.54134140001679 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv]",
            "value": 7.6441487671398765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 130.8190133999915 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 81.85747310758832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.216355600003226 msec\nrounds: 1"
          }
        ]
      },
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
          "id": "84c2f23875b2f6d8bcd5ba5d9ab1484d48fc6591",
          "message": "infra: bump pypa/gh-action-pypi-publish from 1.10.2 to 1.10.3",
          "timestamp": "2024-10-07T20:42:53Z",
          "url": "https://github.com/amazon-braket/amazon-braket-simulator-v2-python/pull/40/commits/84c2f23875b2f6d8bcd5ba5d9ab1484d48fc6591"
        },
        "date": 1728406791420,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv]",
            "value": 176.61372222901537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.662074200006373 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv_v2]",
            "value": 496.49316944514936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0141264000017145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv]",
            "value": 155.00110763788456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.451566800001274 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv_v2]",
            "value": 474.16551847431583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.108968200002437 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv]",
            "value": 141.02314889342935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.091034400002627 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv_v2]",
            "value": 450.9636145421265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.21747379999897 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv]",
            "value": 129.9011138164256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.698163399993518 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv_v2]",
            "value": 413.90964898666516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.415986200003317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv]",
            "value": 120.30098633093993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.312483800000336 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv_v2]",
            "value": 401.042743214995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4934998000048836 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv]",
            "value": 109.53033043816293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.129891199995654 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv_v2]",
            "value": 354.93122994403035,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.817447200004608 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv]",
            "value": 104.35500135540143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.58267439999645 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv_v2]",
            "value": 338.3560942093253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9554662000009557 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv]",
            "value": 86.1910626590445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.602131000006466 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv_v2]",
            "value": 277.06796044821107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6092228000029536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv]",
            "value": 93.02399827521609,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.74991420000515 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv_v2]",
            "value": 225.28158621348484,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.438889199991536 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv]",
            "value": 86.98323088565408,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.496468799998638 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv_v2]",
            "value": 156.3497609195092,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.3959163999925295 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv]",
            "value": 80.50352313204083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.421816599999147 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv_v2]",
            "value": 102.3014784056699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.775029800005086 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv]",
            "value": 75.90000326369065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.175230000001648 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv_v2]",
            "value": 33.507476603677404,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.84408559999565 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv]",
            "value": 47.611096565920306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.003507000000354 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv_v2]",
            "value": 21.757646570410365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.960853199994745 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 124.47967495854353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.03344000000834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 496.646345884765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.013505200000054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 148.29724070155072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.743213799995829 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 447.7924994033955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.233177200002956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 136.37445457728182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.3327515999949355 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 472.68517796288586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1155730000032236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 132.3679649404689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.554698000001281 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 457.47772037832124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1858987999962665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 124.75025933716839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.016015399994103 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 433.23010037651704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3082422000015868 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 120.52472415260603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.297052800003257 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 436.39983057240937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.291476599998532 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 115.59934828774037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.650567800009412 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 421.43243536073106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3728596000069047 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 111.34583059641086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.9810277999959 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 352.7872699113217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.834569399999509 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 108.23903404371015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.238811199998054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 422.1315464895028,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3689298000022063 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 71.13621682093022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.0575369999965 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 226.5204836359463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.414611799995782 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 99.55440245903566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.04475919999095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 388.3745213568878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.574834200004261 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 63.366970253192996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.78109219999533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 151.60487403613163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.5960939999968105 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 92.85951555044883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.768955599996843 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 377.0774611369702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6519750000034037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 47.23536509516044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.17057840000598 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 88.20741642310578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.33691520000184 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 84.90334620045633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.778098800004955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 370.3295792534229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.700297399996998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 26.93721645448819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.123360599991884 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 76.21774501238886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.12030419999246 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 72.48590363011168,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.79578579999361 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 339.36802072728506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.946653599997262 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 39.56383999855993,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.275605200010887 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 275.3553543457584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6316707999958453 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 16.06197898795104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.258828799997445 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 274.6032573336365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6416173999896273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 7.249254313792188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 137.94522259998985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 263.6757678227424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7925365999967653 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.9073101052124222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 524.2985905999944 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 208.98449418626208,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.785044000004746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv]",
            "value": 171.89038687531732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.817661000003227 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv_v2]",
            "value": 528.9857196082914,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.890410199996495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm]",
            "value": 171.718805647658,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.823473999998896 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm_v2]",
            "value": 513.22625107118,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9484583999997085 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv]",
            "value": 154.9383212236923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.4541811999902166 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv_v2]",
            "value": 492.2066460708436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.031666999994286 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm]",
            "value": 150.43558020490477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.647363600006884 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm_v2]",
            "value": 485.97854696220367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0577040000034685 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv]",
            "value": 143.42022294550472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.972517400004108 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv_v2]",
            "value": 477.6376272216821,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.09363740000299 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm]",
            "value": 135.08397481795126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.402802599995084 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm_v2]",
            "value": 457.80469099663986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.184337599999253 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv]",
            "value": 127.04987347866114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.870924799999558 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv_v2]",
            "value": 447.99190317376525,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2321831999988717 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm]",
            "value": 122.79755523823985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.143484599997919 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm_v2]",
            "value": 415.0142183875022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4095559999977922 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv]",
            "value": 119.31636780270924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.381079799994495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv_v2]",
            "value": 426.5006339499935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.344662400003017 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm]",
            "value": 78.47781171717685,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.742455199997949 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm_v2]",
            "value": 211.2614433460965,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.73347139999305 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv]",
            "value": 110.67096285440667,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.035793800001102 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv_v2]",
            "value": 382.04507352502065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6174921999995604 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm]",
            "value": 68.50775409812067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.596887799996239 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm_v2]",
            "value": 140.03048351601453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.141302200000155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv]",
            "value": 103.60725869962276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.651833400005216 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv_v2]",
            "value": 360.29650673044586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.775491800002783 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm]",
            "value": 50.86745388188663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.658935600000405 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm_v2]",
            "value": 119.34481605504249,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.379081999999016 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv]",
            "value": 96.71083921350287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.340102600002865 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv_v2]",
            "value": 318.63540437039717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.138383199996042 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm]",
            "value": 28.96334667624174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.52639680000402 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm_v2]",
            "value": 132.4296405292745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.551179600000069 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv]",
            "value": 92.11856071456216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.855575599998701 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv_v2]",
            "value": 238.1972545768472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.198201199994855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv]",
            "value": 84.36797863315239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.852838200002225 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv_v2]",
            "value": 184.97551201688884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.40612099999862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv]",
            "value": 77.35201766158119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.927911000008407 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv_v2]",
            "value": 124.56493826838546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.027941199998168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv]",
            "value": 74.83800042557948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.362195600006999 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv_v2]",
            "value": 74.30184279567693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.458616399998391 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv]",
            "value": 47.581545657394834,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.016551399998207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv_v2]",
            "value": 42.00873469135783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.804573200004597 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv]",
            "value": 153.20237390131894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.5273140000044805 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv_v2]",
            "value": 499.9329589920337,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.000268199992661 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm]",
            "value": 149.0263882515274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.710221000003003 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm_v2]",
            "value": 516.7574092667528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9351440000036746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv]",
            "value": 140.83409726450432,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.100553199995829 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv_v2]",
            "value": 510.64818923528867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9582954000043176 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm]",
            "value": 137.88367096647315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.252490399991984 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm_v2]",
            "value": 474.65453930800925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1067953999931888 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv]",
            "value": 128.4564615064389,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.784738800000923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv_v2]",
            "value": 478.1538213199196,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0913771999971686 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm]",
            "value": 123.15393179893377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.119919399996434 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm_v2]",
            "value": 447.1421624119219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2364251999988483 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv]",
            "value": 117.65387444336825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.49950759999274 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv_v2]",
            "value": 442.4857468714907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.259959799994249 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm]",
            "value": 112.91196664960441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.856457199999568 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm_v2]",
            "value": 414.56812282905133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4121487999991587 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv]",
            "value": 109.5673749729934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.12680440000031 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv_v2]",
            "value": 439.1010722851704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2773799999981748 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm]",
            "value": 71.74173023032567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.938888799998495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm_v2]",
            "value": 313.6000108383353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.188775399996757 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv]",
            "value": 92.34429417632211,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.82903939999369 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv_v2]",
            "value": 432.82248737884765,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3104160000002594 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm]",
            "value": 64.48162928052018,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.508293000004869 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm_v2]",
            "value": 185.79333493908265,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.382324400000016 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv]",
            "value": 97.65227143286785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.240417199997864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv_v2]",
            "value": 416.2921078440411,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4021593999918878 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm]",
            "value": 50.445817433860235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.823249000000942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm_v2]",
            "value": 103.0702844308809,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.702117400001953 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv]",
            "value": 90.50174256581205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.049510999998802 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv_v2]",
            "value": 396.9274953990271,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5193517999923642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm]",
            "value": 27.66631649040464,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.14503580000701 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm_v2]",
            "value": 108.32909477686115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.231130400007714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv]",
            "value": 85.62597450920434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.678699200001574 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv_v2]",
            "value": 376.26592790174635,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6576947999956246 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv]",
            "value": 81.40617245045948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.28408079999781 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv_v2]",
            "value": 335.44867266352924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9810819999966043 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv]",
            "value": 75.48062020732567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.248433800004022 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv_v2]",
            "value": 354.22033695059173,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.823101600006339 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv]",
            "value": 71.15286728191455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.054247400008535 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv_v2]",
            "value": 317.3040024283449,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.151551799999197 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv]",
            "value": 45.33482195963459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.058099200000925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv_v2]",
            "value": 145.78161791168088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.859575400005724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv]",
            "value": 152.92788074074483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.539029999999002 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv_v2]",
            "value": 472.17505455704094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1178586000019095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm]",
            "value": 124.06101012802822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.06055020000258 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm_v2]",
            "value": 452.9462659879444,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2077674000001934 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv]",
            "value": 139.25628953113093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.1810042000038266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv_v2]",
            "value": 418.6808705540588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3884540000040033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm]",
            "value": 136.44467209483332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.328977999998187 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm_v2]",
            "value": 430.6339560568391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.322157799994784 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv]",
            "value": 126.74152037745043,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.890074200008711 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv_v2]",
            "value": 383.2709585403371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6091201999975056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm]",
            "value": 122.57049948703482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.158570000000509 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm_v2]",
            "value": 351.9940391923058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.840957199998684 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv]",
            "value": 117.58570951711435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.504434799999672 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv_v2]",
            "value": 417.93712587405435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3927043999947273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm]",
            "value": 112.93621811885949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.854555400000663 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm_v2]",
            "value": 403.24720457003446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4798683999961213 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv]",
            "value": 111.26714721318459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.987378799997714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv_v2]",
            "value": 412.9361328202114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4216819999992367 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm]",
            "value": 72.79466311463487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.737270799992984 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm_v2]",
            "value": 280.01329503122594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.571259000000282 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv]",
            "value": 101.47349870416066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.854789799999253 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv_v2]",
            "value": 373.09824363301186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6802591999967262 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm]",
            "value": 63.3032782450665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.796970200005942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm_v2]",
            "value": 253.16780007369775,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9499493999983315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv]",
            "value": 95.19349572543817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.50491940000029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv_v2]",
            "value": 381.1182145625402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6238577999947665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm]",
            "value": 49.36608467640881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.256822199996805 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm_v2]",
            "value": 128.891800927067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.758445399997527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv]",
            "value": 90.30787526036478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.073231399996075 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv_v2]",
            "value": 325.62229350868637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.071042800002033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm]",
            "value": 27.542167237066057,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.307963399997334 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm_v2]",
            "value": 96.68177886659933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.343210600001385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv]",
            "value": 86.21927645065443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.598334399991472 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv_v2]",
            "value": 334.7439219034128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.987358200005019 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv]",
            "value": 78.94849447589158,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.666486000000532 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv_v2]",
            "value": 323.1434359391268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.094600999997965 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv]",
            "value": 75.86923573049725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.18057299999964 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv_v2]",
            "value": 294.5789750619569,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.394675399999869 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv]",
            "value": 69.98314847778673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.289154199991572 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv_v2]",
            "value": 319.00871487149493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.134710599999835 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv]",
            "value": 45.291932183461476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.078987399993366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv_v2]",
            "value": 90.96338447250189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.993434399995294 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv]",
            "value": 155.93296878294336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.413011999995888 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv_v2]",
            "value": 441.200152653492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.266545000009046 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv]",
            "value": 120.63964879003339,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.289148799997292 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv_v2]",
            "value": 420.15973464618924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3800472000061745 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv]",
            "value": 89.48902055627063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.174555200000214 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv_v2]",
            "value": 385.8409043669314,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5917418000062753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv]",
            "value": 67.2623356332062,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.86716140000226 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv_v2]",
            "value": 357.32534830231197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7985700000044744 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv]",
            "value": 52.25517447460726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.136860799994793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv_v2]",
            "value": 235.29488166338228,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.249986199999967 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv]",
            "value": 40.29685272955796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.815833800005294 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv_v2]",
            "value": 243.03728556524507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.114594999998644 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv]",
            "value": 19.985936296346686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 50.035184000000754 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv_v2]",
            "value": 206.5940353657598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.840410799999972 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv]",
            "value": 26.543979261976553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.67332659999738 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv_v2]",
            "value": 171.76486544162879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.821912400006113 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv]",
            "value": 21.84893787680721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.768815200005974 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv_v2]",
            "value": 132.94010713165025,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.522184399999787 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv]",
            "value": 18.22291934688527,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.875949400002355 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv_v2]",
            "value": 90.80569294308214,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.012525399996775 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv]",
            "value": 11.773484192165116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.93662400001085 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv_v2]",
            "value": 56.219885326528235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.78730059999134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv]",
            "value": 13.060136931146982,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.56887560000314 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv_v2]",
            "value": 22.3654327600715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.711855600007766 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv]",
            "value": 6.680389058697576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 149.69188039999608 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv_v2]",
            "value": 16.604998469849974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 60.222829999997884 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 133.93959035181797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.466052399990986 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 449.2756149553112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2258051999983763 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 132.85391139449345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.527064800001426 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 462.0513100589748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1642617999987124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 103.83235891858587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.6309089999977 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 432.05588521969605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.314515399996253 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 99.39971913211805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.06039060000603 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 389.7576977740791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5656965999928616 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 79.64258954373737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.55609600000298 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 380.4769659246284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6282799999989948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 76.02037589342838,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.15436799999361 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 351.98313634710956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8410452000002806 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 62.57642537050187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.980459000002156 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 341.878869171772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.925012599996535 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 58.2403014406224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.170240799998737 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 312.96108948518656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.195285399999648 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 48.1363872520856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.774305199995524 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 286.2233216251004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4937753999997767 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 31.33236318728262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.91588180000053 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 256.9447013892588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.891887999998289 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 39.08706255441339,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.583912799993414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 266.3855482217737,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.753957399999308 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 22.457862794881553,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.527834600000915 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 89.4537499602869,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.178961199993864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 31.01284823845795,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.24470040000824 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 224.4787827143203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.454764000001887 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 14.44634914421489,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.22164139999722 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 103.87024263378733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.627396400003363 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 25.800130015108813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.75949460000356 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 203.73534078365603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.908328600004097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 6.759162653301054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.94732000000295 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 33.981778385937105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.42753580000499 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 20.67376349280212,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.370486599992546 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 175.52921883929824,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.697057200006839 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 13.85434511900329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.17952139999397 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 134.42199737497094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.439258599993082 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 7.482314655176191,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 133.64848259999462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 118.7235687203076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.42292739999948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 4.964397490780236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 201.43431340000006 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 101.99768795721299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.804143799999565 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.6807240323830233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 594.9816749999968 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 85.2397530863217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.731615400003648 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv]",
            "value": 159.00553612744812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.289089200004128 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv_v2]",
            "value": 520.9107645477387,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9197146000010434 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm]",
            "value": 153.4927804056056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.514964400003009 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm_v2]",
            "value": 463.6842495737688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1566399999983332 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv]",
            "value": 119.07749899429066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.397892200002843 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv_v2]",
            "value": 436.4065343333291,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2914413999956196 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm]",
            "value": 113.40551382594325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.817913400002908 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm_v2]",
            "value": 442.3950738432298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.260422999995626 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv]",
            "value": 89.3575034657451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.191001999998207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv_v2]",
            "value": 391.0678232054276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5571012000000337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm]",
            "value": 83.94570042878559,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.912462400005097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm_v2]",
            "value": 381.9070175554219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6184384000089267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv]",
            "value": 67.15517309458588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.890885600004822 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv_v2]",
            "value": 335.4852025197789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.980757399996037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm]",
            "value": 63.08627733540386,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.851307800005543 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm_v2]",
            "value": 325.4095458103515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0730506000054447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv]",
            "value": 51.10652996718245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.56697120000399 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv_v2]",
            "value": 304.6710768009659,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2822281999983716 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm]",
            "value": 32.52630475448978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.744347000006655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm_v2]",
            "value": 148.36875820417916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.73996340000258 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv]",
            "value": 39.75530798760565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.153873799990834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv_v2]",
            "value": 266.06164957066204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.758527399998002 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm]",
            "value": 23.50706445584637,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.540403199996035 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm_v2]",
            "value": 96.64466351168524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.347182800001065 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv]",
            "value": 32.1738309358579,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.081160400003682 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv_v2]",
            "value": 222.31171009612603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.498188599995956 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm]",
            "value": 14.113891807179241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.85217979999925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm_v2]",
            "value": 98.80481350182639,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.120964399993682 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv]",
            "value": 17.684410691504564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.54697900000656 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv_v2]",
            "value": 162.1694694308002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.166388799999822 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm]",
            "value": 6.84568326472329,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 146.07745660000546 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm_v2]",
            "value": 34.9970317967402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.57385180000165 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv]",
            "value": 21.646293247618843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.19728599999462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv_v2]",
            "value": 138.35093433930297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.227995999994619 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv]",
            "value": 13.923264190551867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.82223840000006 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv_v2]",
            "value": 104.9204765739468,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.531028000003516 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv]",
            "value": 15.451846941186787,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.71718259999761 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv_v2]",
            "value": 68.91318979289863,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.511010200010332 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv]",
            "value": 12.91764693414582,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.41347979999773 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv_v2]",
            "value": 45.85220831848543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.80920039999137 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv]",
            "value": 7.593494091086277,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.69168079999736 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv_v2]",
            "value": 28.591545909889245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.97537360000251 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv]",
            "value": 142.82040128869693,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.001800800003366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv_v2]",
            "value": 531.3259696510003,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8820838000010554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm]",
            "value": 140.64793748092964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.109951400002501 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm_v2]",
            "value": 494.43009663135524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.022530600004302 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv]",
            "value": 110.67730281441428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.035276200006592 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv_v2]",
            "value": 468.7040669995585,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.133542400008537 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm]",
            "value": 105.59450009779435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.470190199999706 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm_v2]",
            "value": 444.48114870962024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.249814200001765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv]",
            "value": 83.78224979879437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.935702399989623 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv_v2]",
            "value": 362.10257612855884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.761648399996375 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm]",
            "value": 80.3636874748878,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.443431000008331 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm_v2]",
            "value": 387.85077612044364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5783111999999164 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv]",
            "value": 62.81079014503783,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.920831400001132 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv_v2]",
            "value": 361.8041086902063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7639266000051066 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm]",
            "value": 60.70733515803508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.472473999999693 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm_v2]",
            "value": 333.1305456658496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0018261999998685 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv]",
            "value": 49.509830399618515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.19800900000064 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv_v2]",
            "value": 296.8162480062203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.36908780000158 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm]",
            "value": 30.633379741888696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.64412899999343 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm_v2]",
            "value": 162.6155448492742,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.1494735999986005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv]",
            "value": 38.978744726802155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.655007799991836 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv_v2]",
            "value": 273.1045642001873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.661601199996767 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm]",
            "value": 23.14022497796996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.21479159999626 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm_v2]",
            "value": 103.2671026328021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.683626000003187 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv]",
            "value": 31.643733482596975,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.601833600007012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv_v2]",
            "value": 245.21767899825755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.078009399995608 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm]",
            "value": 14.151759031523085,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.6625938000002 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm_v2]",
            "value": 100.9394556262383,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.90692880000097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv]",
            "value": 26.046078899569583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.39349499999116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv_v2]",
            "value": 202.64117646007213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9348312000006445 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm]",
            "value": 6.046340434917294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 165.38929800000233 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm_v2]",
            "value": 31.411633270744606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.835339199994905 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv]",
            "value": 21.602097809101632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.29180039999028 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv_v2]",
            "value": 183.15522159596068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.459849800001848 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv]",
            "value": 13.637349492757007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.32803199999489 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv_v2]",
            "value": 157.83281155383722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.335818200000176 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv]",
            "value": 12.053039806651098,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 82.96662220000144 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv_v2]",
            "value": 123.87220550503145,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.072835999996641 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv]",
            "value": 10.370858734876782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.42403059999651 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv_v2]",
            "value": 113.00689468618889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.849017600005027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv]",
            "value": 6.723738042047203,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.72679359999665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv_v2]",
            "value": 83.62306495385923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.958423200007928 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv]",
            "value": 142.9338575003095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.996243000003233 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv_v2]",
            "value": 424.3640289698174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3564673999999286 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm]",
            "value": 135.55246821260815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.377217199996267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm_v2]",
            "value": 446.88802818290475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2376969999982066 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv]",
            "value": 111.38209632588709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.978103600009035 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv_v2]",
            "value": 422.4676759430064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.36704499999405 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm]",
            "value": 107.0584308643335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.34069359999512 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm_v2]",
            "value": 418.0374462881732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.392130200007614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv]",
            "value": 84.72793681559136,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.802482600000985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv_v2]",
            "value": 328.2317584056956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0466277999948943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm]",
            "value": 82.70257047696253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.091522599996551 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm_v2]",
            "value": 374.71245503103114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.668712999991385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv]",
            "value": 64.84639044366735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.421058800006904 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv_v2]",
            "value": 349.0920221220691,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8645742000094288 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm]",
            "value": 61.34591765493744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.30100319999883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm_v2]",
            "value": 300.76331322773865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3248736000018653 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv]",
            "value": 50.45990621865895,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.817714199996317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv_v2]",
            "value": 298.3821243804454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.351407200000267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm]",
            "value": 32.30961106115861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.950542800007952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm_v2]",
            "value": 184.46478869725345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.4210887999943225 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv]",
            "value": 40.258702421758976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.839350000002014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv_v2]",
            "value": 251.5556705784218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.975263199993151 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm]",
            "value": 17.02214563784926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.747000599998955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm_v2]",
            "value": 112.05561042053607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.92414039999494 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv]",
            "value": 31.75787612318416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.488251799999034 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv_v2]",
            "value": 238.81299624169677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1873767999959455 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm]",
            "value": 14.527560943357015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.834679400004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm_v2]",
            "value": 101.11227956452987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.889995600008206 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv]",
            "value": 26.639013665585942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.538927399998556 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv_v2]",
            "value": 193.93482789101773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.156371399993986 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm]",
            "value": 6.938925117394697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.11453980000033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm_v2]",
            "value": 34.10878566050524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.31795960000727 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv]",
            "value": 22.11794251289826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.21216200000708 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv_v2]",
            "value": 178.27340001502623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.609361799997714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv]",
            "value": 18.461575975464513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.166556599989235 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv_v2]",
            "value": 154.3480986120935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.478861799996594 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv]",
            "value": 15.496026618876694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.53267179999784 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv_v2]",
            "value": 125.51899909546987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.966921399997773 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv]",
            "value": 13.24589758722769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.4950726000061 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv_v2]",
            "value": 114.52322367205356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.73185340000191 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv]",
            "value": 7.6311493835430335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.04185880000614 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv_v2]",
            "value": 80.37902374979566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.441056800003025 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv]",
            "value": 153.9200686310913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.496878600000855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv_v2]",
            "value": 342.782921540478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.917298199997731 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm]",
            "value": 150.30144457720405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.653296000001774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm_v2]",
            "value": 314.05685836151105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1841367999959402 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv]",
            "value": 144.68001179649562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.911804800006394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv_v2]",
            "value": 288.5105464165662,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.466077799998857 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm]",
            "value": 144.2382779426629,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.932972399999926 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm_v2]",
            "value": 292.578939992715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4178809999957593 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv]",
            "value": 133.52101046568413,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.4894579999977395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv_v2]",
            "value": 212.80164473569607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.6992117999934635 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm]",
            "value": 131.13775165790443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.625569200001792 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm_v2]",
            "value": 270.0953215007283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.702396599999247 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv]",
            "value": 121.71773224581513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.215729799997007 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv_v2]",
            "value": 245.82973213306607,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.067856199992548 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm]",
            "value": 119.05396008818849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.399552600008064 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm_v2]",
            "value": 248.82416894811874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.018902200004959 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv]",
            "value": 113.91809603301918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.778236600005584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv_v2]",
            "value": 230.40611427788744,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.340162599999076 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm]",
            "value": 73.25114788940989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.65166320000526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm_v2]",
            "value": 123.51990421967487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.095861200001764 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv]",
            "value": 105.97112308094805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.436532999995961 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv_v2]",
            "value": 217.78843682831697,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.591611999990164 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm]",
            "value": 66.0613456754129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.13744520000273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm_v2]",
            "value": 140.7162060884687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.106501999999182 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv]",
            "value": 98.9623970798393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.104848200001015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv_v2]",
            "value": 199.88988466061255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.002754399993137 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm]",
            "value": 49.53807969893334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.186491000004025 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm_v2]",
            "value": 101.28833700252696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.872804999997697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv]",
            "value": 93.4473206242016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.701216400002522 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv_v2]",
            "value": 187.42628992564428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.33543080000527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm]",
            "value": 28.916773333420206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.58200499999293 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm_v2]",
            "value": 116.84385218946004,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.558430599998701 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv]",
            "value": 86.8059639655548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.519945800000642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv_v2]",
            "value": 174.86003066578218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.718859799992515 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv]",
            "value": 81.62489036758342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.251164999997854 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv_v2]",
            "value": 169.40518046450944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.90300720000414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv]",
            "value": 74.71859892228835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.383548599995265 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv_v2]",
            "value": 159.70623762416955,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.261496199999783 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv]",
            "value": 70.97405056703367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.089656599992395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv_v2]",
            "value": 150.64484429462286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.63812960000314 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv]",
            "value": 46.2695131029446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.61250320000363 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv_v2]",
            "value": 83.32207652071928,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.001621200010959 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv]",
            "value": 142.76567900495584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.004484600008709 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 315.5341368178491,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1692292000002453 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm]",
            "value": 133.85506826425808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.470766799997364 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 314.9897181060309,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1747067999958745 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv]",
            "value": 131.20225533517103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.621820200006368 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 305.94052051299394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2686091999948985 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm]",
            "value": 128.6058706933798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.77569480000011 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 288.9907138035493,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4603188000005503 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv]",
            "value": 121.70383716860738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.216667800002142 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 279.97561748346016,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.571739599999546 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm]",
            "value": 117.24074103547761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.529458200007412 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 271.2559704801021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6865547999923365 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv]",
            "value": 112.3033812053946,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.904451400007929 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 256.00912293667994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.906110799994167 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm]",
            "value": 108.86435642712301,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.185743000000457 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 251.10232665877749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.982440200002202 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv]",
            "value": 104.73617178276251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.547799799997847 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 231.94759951151735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.311318600002778 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm]",
            "value": 69.68059876819031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.351196999996318 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 103.74459044575501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.639056800006074 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv]",
            "value": 97.3426469739371,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.272989600002802 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 204.6577483915104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.886206399999082 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm]",
            "value": 63.16404598407903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.831791400000839 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 182.08230047153225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.492021999998542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv]",
            "value": 92.96356023659087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.756903000003604 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 202.04465962824958,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.949400800001058 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm]",
            "value": 48.77597567025046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.501896399991892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 95.65645832426756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.454077199995027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv]",
            "value": 86.9202011882799,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.504805399999896 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 187.60601850605275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.330319400002281 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm]",
            "value": 25.657548839324075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.97488439999961 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 110.15240091358042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.078331400007755 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv]",
            "value": 81.49464039091959,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.27074559999437 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 182.433120747616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.481460800001514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv]",
            "value": 76.92561901887849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.999570400006633 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 168.5766513652738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.932019599993055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv]",
            "value": 73.1733780850198,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.666172399996412 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 159.3767832270571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.274439599997095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv]",
            "value": 48.734588855921295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.51930719999291 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 152.3707223558359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.562940599997091 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv]",
            "value": 43.9943161103423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.73020899999665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 85.47469964274423,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.699368400002186 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv]",
            "value": 132.95818914358185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.521161399995435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 265.1833934092628,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7709752000068875 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm]",
            "value": 137.60315179448077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.267275400010931 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 215.50891827633728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.640179199998329 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv]",
            "value": 128.77032758739682,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.765764199996283 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 276.67802872694926,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6143093999953635 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm]",
            "value": 123.91114014922037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.070299400003478 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 258.94488865610657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8618255999949724 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv]",
            "value": 116.96925364912953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.549255200000516 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 253.86170619518683,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9391526000031267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm]",
            "value": 114.72116172710015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.716787599996678 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 242.8844333519645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.117184400001861 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv]",
            "value": 110.49288134153049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.050356799991732 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 236.94426440625642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.220401800000673 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm]",
            "value": 104.70193787374264,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.550921599998219 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 222.95074598873848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.485295599999972 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv]",
            "value": 103.03611151937477,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.705335199998899 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 214.04078435838665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.672006800001327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm]",
            "value": 68.41344714466096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.61700940000128 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 121.75000832165344,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.213551799997276 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv]",
            "value": 96.62920796772616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.34883779999518 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 210.82180362935657,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.743342400001893 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm]",
            "value": 60.32595877038789,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.576611800007868 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 128.4857839860019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.782962199996746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv]",
            "value": 90.5757983206216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.040476799996668 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 181.6179133961709,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.506064799999422 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm]",
            "value": 46.365231521496995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.56788539999752 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 93.14055226014067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.736461999999847 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv]",
            "value": 84.68085985618245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.809044000005997 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 176.44245500477078,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.667570200000682 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm]",
            "value": 27.140158945797626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.84576800000059 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 102.24440789548038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.780485999999655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv]",
            "value": 80.40507691805651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.437025600002016 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 172.49120001640884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.797397200001342 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv]",
            "value": 74.02299162997897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.509316200008925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 160.28046773831014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.239063399993938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv]",
            "value": 70.248905641514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.235097199991742 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 148.99538668577034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.71161719999418 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv]",
            "value": 66.61751093764974,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.011068200010413 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 145.7626803400207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.860466600005566 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv]",
            "value": 43.15756041566911,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.17091119999759 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 97.87758141599828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.216844199999287 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv]",
            "value": 141.78687073988556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.052839200002836 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 335.30937856216826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9823204000081205 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm]",
            "value": 141.7359708318293,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.05537200000208 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 316.8559775517601,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.156007999996291 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv]",
            "value": 131.32668608423086,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.614598600002864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 292.8223731278167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4150396000086403 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm]",
            "value": 131.00446520857002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.633327600001394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 285.78486641118934,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4991355999977714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv]",
            "value": 113.97267628177244,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.774032799999532 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 207.39084563557643,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.821813599994584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm]",
            "value": 118.17243400139826,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.462210400000458 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 266.9618624152796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.745853400005217 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv]",
            "value": 111.92560618345193,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.934506000002784 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 241.7952465278524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1357306000008975 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm]",
            "value": 109.31970848284175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.147481399998014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 244.76531436555723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.085546200008139 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv]",
            "value": 104.71573051012241,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.549663600000713 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 221.52269293973163,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5142101999999795 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm]",
            "value": 69.84305622710811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.31781559999763 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 140.24030681436307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.130617600000733 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv]",
            "value": 90.8369151993596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.008740200009015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 211.94385878483365,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.718230599996787 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm]",
            "value": 62.54824580755224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.987658599999577 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 65.76916139796515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.204694399994878 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv]",
            "value": 90.41013708830192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.060706600005688 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 194.06972599236042,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.152787199995146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm]",
            "value": 46.73458054906729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.397431799994138 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 114.25617220993671,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.75226239999165 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv]",
            "value": 85.62922115667543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.678256400000464 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 184.28661049789164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.4263301999981195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm]",
            "value": 27.499499344117478,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.36429839999664 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 110.35861495441175,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.061367799995423 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv]",
            "value": 81.45586789498388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.276586400002998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 180.73540585976298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.532950200006326 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv]",
            "value": 76.84938427499377,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.012466000009226 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 169.48956049387593,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.900068400001146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv]",
            "value": 72.94802139798837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.70839100000012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 149.07265923657573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.708138199996938 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv]",
            "value": 65.5198551696743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.262548999999126 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 140.1589312578871,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.134757599999375 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv]",
            "value": 41.19107961037778,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.277100999995582 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 92.5467185552979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.80535339999642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv]",
            "value": 143.04966318078124,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.990579200009961 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv_v2]",
            "value": 308.205541042929,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.244587999995474 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm]",
            "value": 37.93031247271239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.364138200005982 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm_v2]",
            "value": 323.07991827643815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0952093999985664 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv]",
            "value": 112.09731338164114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.920820399998775 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv_v2]",
            "value": 281.9079643790428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.547257000002446 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm]",
            "value": 107.7462693446148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.281063800005995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm_v2]",
            "value": 270.64687906016763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6948513999959687 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv]",
            "value": 84.8592065263226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.784225200005949 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv_v2]",
            "value": 251.1093508897753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.982328800009327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm]",
            "value": 80.6844337877393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.393964400007462 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm_v2]",
            "value": 243.77180112188213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.102197199995317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv]",
            "value": 62.26300676078774,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.0609012000009 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv_v2]",
            "value": 216.38665872400455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.621356999996351 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm]",
            "value": 61.02226127484953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.387462199998026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm_v2]",
            "value": 202.06948248034655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.948792800007595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv]",
            "value": 51.532306432571126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.405302600000596 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv_v2]",
            "value": 185.96990240797896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.377214199995706 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm]",
            "value": 32.55149778784009,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.720552599996154 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm_v2]",
            "value": 93.40593515129416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.705957800007582 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv]",
            "value": 39.79438907708756,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.12917080000534 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv_v2]",
            "value": 171.84531694361414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.819186799999443 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm]",
            "value": 23.91017551508253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.823197799999434 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm_v2]",
            "value": 81.21815669577543,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.312517800000933 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv]",
            "value": 32.578448545733515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.695138800001587 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv_v2]",
            "value": 151.91967216950238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.582425999999941 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm]",
            "value": 14.695713437913733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.04705360000298 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm_v2]",
            "value": 86.69673760356754,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.534459399990737 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv]",
            "value": 26.706100538638598,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.44462800000292 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv_v2]",
            "value": 129.69554619005166,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.710365000002639 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm]",
            "value": 7.018908296016986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 142.47229880000987 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm_v2]",
            "value": 33.33328488895876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.00004360000048 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv]",
            "value": 20.129126899767694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.67925359999299 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv_v2]",
            "value": 117.2147487660913,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.531349600002613 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv]",
            "value": 14.192927736776054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.45762640000248 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv_v2]",
            "value": 101.26334324289282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.875241800000367 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv]",
            "value": 15.661129001077951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.852357000007494 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv_v2]",
            "value": 86.44094136189715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.568592200001149 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv]",
            "value": 13.11042540556177,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.2751756000057 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv_v2]",
            "value": 68.4068222123638,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.618425000003299 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv]",
            "value": 7.563155067549714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.21995200000265 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv_v2]",
            "value": 70.93836402478772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.096744600010425 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv]",
            "value": 134.86998802899421,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.414547999997012 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 331.7433097654925,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0143788000032146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm]",
            "value": 130.335311831953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.672517800006062 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 285.11562436424805,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5073490000058882 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv]",
            "value": 105.99745021002084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.434189200010223 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 287.78866642151297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4747720000041227 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm]",
            "value": 102.72652215119108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.734584400007407 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 268.40576423976876,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7257023999927696 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv]",
            "value": 81.27216820283093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.304335200019523 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 254.96722039480784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.922072799991838 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm]",
            "value": 77.13025828980204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.965080399999351 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 242.45325452823698,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.124506399989514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv]",
            "value": 62.61724531280049,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.970041400009904 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 220.11398030100642,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.543100800015054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm]",
            "value": 59.92045008982121,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.688793200000873 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 205.4849691860694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.866535999985899 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv]",
            "value": 49.68670347242268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.126108800013753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 167.16217994457907,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.982214400000885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm]",
            "value": 31.707067283352746,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.538709999995266 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 99.97630161744169,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.002370400002292 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv]",
            "value": 39.52846681671633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.298223799995867 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 172.61934703188663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.793093399984173 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm]",
            "value": 23.18719764328672,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.12724700000672 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 95.93575282411793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.42364259999431 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv]",
            "value": 32.06782308667406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.18390659999477 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 151.6395786821729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.594584399999803 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm]",
            "value": 15.261378252565715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.52488140000605 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 83.9634848849939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.909939199995279 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv]",
            "value": 17.314698700522282,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 57.75439799999731 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 131.38517843282352,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.611208599996644 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm]",
            "value": 6.935590488891989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.18382999999722 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 33.46378923855781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.88304740001695 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv]",
            "value": 21.45174283504508,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.61625900000672 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 113.73596791018083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.792293400006201 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv]",
            "value": 18.263349493036632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.75446880000163 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 100.59765266645823,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.940589799998634 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv]",
            "value": 15.381000944045768,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.01527460000034 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 87.73885785377159,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.397458600004029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv]",
            "value": 12.96281639191872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.14372939999521 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 77.61573647256044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.883985200005554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv]",
            "value": 6.4251464317531735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 155.6384762000107 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 67.22195045126134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.876093200018659 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv]",
            "value": 128.27996147179485,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.795449800005372 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 287.7337491436566,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.475435199993626 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm]",
            "value": 126.39557142306815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.911669599980086 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 301.50438022432286,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3167014000127892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv]",
            "value": 100.76798506008123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.923786799981826 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 232.4753458730167,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.301531400005842 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm]",
            "value": 99.07144691928453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.093725600017933 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 258.9460956045992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8618076000147994 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv]",
            "value": 79.40682088385054,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.593376600011652 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 238.0768608278943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.200324200019168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm]",
            "value": 76.92227456466148,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.000135599986606 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 201.62313072146804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.959748400005992 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv]",
            "value": 62.08162109118941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.107826799998293 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 208.05164008123398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.806499000005715 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm]",
            "value": 57.6411739852032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.348709799989592 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 195.93757914609427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.103666200011503 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv]",
            "value": 48.31654993547704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.696842000006654 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 179.7659411497288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.5627889999868785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm]",
            "value": 30.86199166050229,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.40231579998181 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 97.35320582249521,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.271875400007957 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv]",
            "value": 36.55485253750568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.35614919999989 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 161.15386684363435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.205249799995727 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm]",
            "value": 22.456432634353856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.53067039999041 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 89.4640032635321,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.177680000014334 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv]",
            "value": 31.345869578896757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.902129800005245 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 140.92063961196132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.096192599988171 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm]",
            "value": 14.79357466056251,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.59691439999642 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 79.03797256092031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.652146400000674 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv]",
            "value": 25.56212793651401,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.12037380000584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 125.58894622370207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.962484199993014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm]",
            "value": 6.869760237219562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.56548780001322 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 32.09160577109171,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.160796599988316 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv]",
            "value": 21.449438422815668,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.62126719999833 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 114.10065215607689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.76419179999175 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv]",
            "value": 13.18205397281133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.86071200000788 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 100.78804560250435,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.921811599997454 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv]",
            "value": 15.443189692489552,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 64.75346219999665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 33.89009655871397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.507145200000195 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv]",
            "value": 12.989520166837375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.98513780001122 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 77.08679504434147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.972390400000222 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv]",
            "value": 6.712818475139262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.96872360000089 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 70.13222631765797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.258780199998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv]",
            "value": 135.34886562655515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.388314599984369 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 287.74762553598583,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4752675999925486 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm]",
            "value": 130.92314643727306,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.6380687999972 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 303.04582264934675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2998310000039055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv]",
            "value": 105.14814353487948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.510391399999207 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 275.31826791722176,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.632160000006479 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm]",
            "value": 102.30192214890143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.774987399987367 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 267.86095509225476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.733280200003719 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv]",
            "value": 81.06499559497097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.335780600005819 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 247.54864949863287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.039609999995264 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm]",
            "value": 77.34526904896839,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.929039000005105 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 233.9023491372225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.275288400003774 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv]",
            "value": 62.5957205934644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.97553300000527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 213.1922239586571,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.690602599998783 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm]",
            "value": 58.678874939653916,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.0419081999853 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 202.6532416187949,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.9345374000040465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv]",
            "value": 49.64635461862094,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.14246579999508 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 184.71893407139714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.413630199996078 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm]",
            "value": 31.17943956417492,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.07241739999063 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 94.59697818262364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.57116220001717 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv]",
            "value": 39.78274610523483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.136525200014148 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 166.78872265392405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.995609199999308 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm]",
            "value": 23.485131185332904,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.58013260000553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 92.49749146799734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.81110400000398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv]",
            "value": 31.96482764255376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.28438579999511 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 150.86251114859178,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.6285520000064935 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm]",
            "value": 11.806184648103681,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.7013688000061 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 86.62219921841539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.544384800004082 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv]",
            "value": 26.315118438167385,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.000968999995166 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 133.87283729766483,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.469775200002005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm]",
            "value": 6.9773085561954655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.32173960001455 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 34.2287267026026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.21522639999239 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv]",
            "value": 21.613863810054603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.26660040000843 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 117.98916354484797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.475354600000173 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv]",
            "value": 18.051546928754252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.396914400012065 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 104.5320847018199,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.56644079999478 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv]",
            "value": 15.365748703726604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.07980960000168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 90.30370146207152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.073743199995079 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv]",
            "value": 10.553834590998333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.75229040001523 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 77.91196069985031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.834999799997604 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv]",
            "value": 6.775563771523706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 147.58919459998197 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 69.16092977904218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.459030600005462 msec\nrounds: 1"
          }
        ]
      },
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
          "id": "84c2f23875b2f6d8bcd5ba5d9ab1484d48fc6591",
          "message": "infra: bump pypa/gh-action-pypi-publish from 1.10.2 to 1.10.3",
          "timestamp": "2024-10-07T20:42:53Z",
          "url": "https://github.com/amazon-braket/amazon-braket-simulator-v2-python/pull/40/commits/84c2f23875b2f6d8bcd5ba5d9ab1484d48fc6591"
        },
        "date": 1728407679038,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv]",
            "value": 174.26036408295957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.738539599997239 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-3-braket_sv_v2]",
            "value": 485.34317014069256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.060397799994007 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv]",
            "value": 149.63886157127627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.682756000009249 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-4-braket_sv_v2]",
            "value": 475.31408754953503,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.103871999997864 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv]",
            "value": 135.69162850778812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.3696513999948365 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-5-braket_sv_v2]",
            "value": 460.0467352264861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1736922000059167 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv]",
            "value": 127.26764536006472,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.857456599992929 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-6-braket_sv_v2]",
            "value": 419.8900929288133,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.381575599997632 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv]",
            "value": 119.60893237589102,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.360579600002893 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-7-braket_sv_v2]",
            "value": 420.40437688061576,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.378662199998871 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv]",
            "value": 106.4040467246844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.398138799997469 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-8-braket_sv_v2]",
            "value": 383.1413220604831,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.610002999995231 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv]",
            "value": 101.96602528745267,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.807188199999928 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-9-braket_sv_v2]",
            "value": 337.9426228843725,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.959082200004559 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv]",
            "value": 95.27911244229676,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.49547979999943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-10-braket_sv_v2]",
            "value": 277.82701489875706,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5993619999999282 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv]",
            "value": 89.72843921165813,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.144738600000892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-11-braket_sv_v2]",
            "value": 225.0135604423356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.444176599997718 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv]",
            "value": 85.49707477740567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.696306600003936 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-12-braket_sv_v2]",
            "value": 153.57996904386502,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.511265799997545 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv]",
            "value": 79.56524278299692,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.568301999999676 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-13-braket_sv_v2]",
            "value": 100.66855396050067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.933588599994891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv]",
            "value": 74.97445845126391,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.337875599995641 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-14-braket_sv_v2]",
            "value": 32.6934599858792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.587157200000092 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv]",
            "value": 46.27423805255766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.610296400001516 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-state_vector-15-braket_sv_v2]",
            "value": 21.733111024467405,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.01274060000833 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 139.84198191675074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.150928399994427 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 479.64699516273794,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0848665999892546 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 140.4810109147663,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.118399800003772 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 422.326546264851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3678359999962595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 129.38545531524542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.728843999996116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 454.3385652853353,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2010017999946285 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 121.57717990489289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.225227800005541 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 396.0818631503402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5247305999982927 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 115.23446399153131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.67795940000633 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 411.63291070997764,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4293489999990925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 116.01948830391308,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.619241600001715 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 422.02298235812276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.369539200003601 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 110.06621825832087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.085439800003314 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 353.96706463819174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.8251216000057866 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 107.26873086886785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.322381200001928 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 397.350372354066,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.516670599993631 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 102.46013127733299,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.759893799991914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 362.435187527238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7591140000026826 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 66.78383222194091,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.973683999994591 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 229.0409127082122,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.366032199993697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 97.64568443177843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.241108000002441 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 359.12321646962056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7845595999906436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 61.772448731755865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.18844680000393 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 248.36101598346747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.026396799997656 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 92.66857224134348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.791145000007418 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 389.1769576730896,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.569525199999134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 45.64680523350154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.907338200003323 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 118.31498449336769,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.452014800002416 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 84.1620376424131,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.881841599995369 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 370.734459071051,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.697348399999555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 25.972599032686578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.50211520000357 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 91.6801459401469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.907486999997218 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 71.27657819851945,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.029854199998226 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 358.639048016616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7883188000032533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 38.019670343306814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.302174399995693 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 302.60110462703216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.304680600001575 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 15.891289241288453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 62.92755640000677 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 260.6290793667859,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.836870399993586 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 7.219084872908587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.52171259999295 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 271.83217386083817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.678740399993785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.9230376923683936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 520.0106081999934 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 224.85674376873536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.447275999996236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv]",
            "value": 171.32458230212646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.83687399999917 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_sv_v2]",
            "value": 541.3118367569479,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.8473640000024716 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm]",
            "value": 175.73321167896714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.690444000003936 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-3-braket_dm_v2]",
            "value": 519.1272971769454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.926309800001036 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv]",
            "value": 158.75449100576213,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.2990344000013465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_sv_v2]",
            "value": 504.7648795094187,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9811204000006908 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm]",
            "value": 155.11231900177606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.446941199999401 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-4-braket_dm_v2]",
            "value": 510.6884018349847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9581412000093226 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv]",
            "value": 145.1499522384355,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.889426999998705 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_sv_v2]",
            "value": 486.72321287206677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.05455579999807 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm]",
            "value": 140.07808176395977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.138875600003303 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-5-braket_dm_v2]",
            "value": 481.1183654134279,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0784906000017145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv]",
            "value": 130.7061535883623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.650749199990514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_sv_v2]",
            "value": 464.92122839758093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1509019999939483 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm]",
            "value": 126.37333057670844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.913062000000082 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-6-braket_dm_v2]",
            "value": 446.9898230231007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2371874000100433 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv]",
            "value": 115.05100993606777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.691796800007978 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_sv_v2]",
            "value": 435.22419094438067,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.297666399999798 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm]",
            "value": 77.97276062149113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.824991600007252 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-7-braket_dm_v2]",
            "value": 212.97429161768295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.695402400000148 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv]",
            "value": 112.45941199246451,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.892097000000376 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_sv_v2]",
            "value": 364.37566197865806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.74442040000622 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm]",
            "value": 68.14593779677881,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.674389000003885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-8-braket_dm_v2]",
            "value": 267.3471114048623,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7404556000069533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv]",
            "value": 103.58477058580338,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.653928800003087 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_sv_v2]",
            "value": 382.11316067300345,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6170257999979185 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm]",
            "value": 50.88821563779674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.650914999999713 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-9-braket_dm_v2]",
            "value": 126.47296741499666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.906828000000133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv]",
            "value": 91.30302361470237,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.952539799995975 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_sv_v2]",
            "value": 275.2015851611065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6337000000003172 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm]",
            "value": 28.542102621117852,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.035961200003385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-10-braket_dm_v2]",
            "value": 105.54588755231511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.474551999994674 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv]",
            "value": 93.33976879925696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.71354700000029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-11-braket_sv_v2]",
            "value": 251.82312387002847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.971041199997671 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv]",
            "value": 86.41118600403031,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.572575800005325 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-12-braket_sv_v2]",
            "value": 193.2417037858156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.174866400000155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv]",
            "value": 80.59483891283463,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.407742400000643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-13-braket_sv_v2]",
            "value": 124.98602968661075,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.000894199994946 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv]",
            "value": 74.49147907612081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.424354200003563 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-14-braket_sv_v2]",
            "value": 72.0138983366923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.886208400003852 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv]",
            "value": 46.66387193626978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.429854799998793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-probability-15-braket_sv_v2]",
            "value": 41.45323157703467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.12357160000056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv]",
            "value": 155.14564902862259,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.445556200003466 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_sv_v2]",
            "value": 522.4521731616942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.914050799996403 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm]",
            "value": 147.61504134668567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.774377400006415 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-3-braket_dm_v2]",
            "value": 505.43872283328056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9784791999995832 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv]",
            "value": 138.4169716038027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.224547600003461 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_sv_v2]",
            "value": 497.9149314330065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0083752000005006 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm]",
            "value": 134.8809028602123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.413948000009896 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-4-braket_dm_v2]",
            "value": 481.24506182366616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0779434000019137 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv]",
            "value": 127.66383029120885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.833072200003243 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_sv_v2]",
            "value": 495.16206852691323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0195407999949566 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm]",
            "value": 118.28577417216715,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.454101999996055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-5-braket_dm_v2]",
            "value": 476.6747323204873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0978666000019075 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv]",
            "value": 117.72429704232577,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.494423199999801 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_sv_v2]",
            "value": 458.8234829903482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1794873999965603 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm]",
            "value": 109.52373254427239,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.13044119999995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-6-braket_dm_v2]",
            "value": 419.1580021130044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3857351999936327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv]",
            "value": 106.96842144579749,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.348553400002402 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_sv_v2]",
            "value": 428.65206415013654,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.332894399989982 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm]",
            "value": 72.26598136160989,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.837769600002048 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-7-braket_dm_v2]",
            "value": 221.9934308589359,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.5046378000051845 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv]",
            "value": 103.58642944019772,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.653774200000953 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_sv_v2]",
            "value": 443.18791805861093,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2563792000028116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm]",
            "value": 62.99795076486506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.87353219999841 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-8-braket_dm_v2]",
            "value": 218.92494976905562,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.567775399993934 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv]",
            "value": 98.14944328450704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.188544800007548 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_sv_v2]",
            "value": 428.9677089410779,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3311777999992955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm]",
            "value": 47.61950975505441,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.999796199998855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-9-braket_dm_v2]",
            "value": 76.6010660754458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.054648599995744 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv]",
            "value": 89.71656044440347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.146214199993665 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_sv_v2]",
            "value": 403.98771424868283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4753228000008676 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm]",
            "value": 28.293810991413817,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.34341839999797 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-10-braket_dm_v2]",
            "value": 110.11336898095462,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.081549399991218 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv]",
            "value": 87.75439538515573,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.3954405999948 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-11-braket_sv_v2]",
            "value": 381.46969745793626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.621440200005054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv]",
            "value": 78.74734519075882,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.698840799998834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-12-braket_sv_v2]",
            "value": 377.43560137136205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.649458600001253 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv]",
            "value": 76.5032986157077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.071331799994823 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-13-braket_sv_v2]",
            "value": 373.3130171410084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6787172000013015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv]",
            "value": 68.63048216001714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.570785000000797 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-14-braket_sv_v2]",
            "value": 347.82553043671703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.875004599991371 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv]",
            "value": 43.21188813663612,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.141779799993856 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-expectation z(q[0])-15-braket_sv_v2]",
            "value": 155.938828939988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.412770999997974 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv]",
            "value": 153.40827941413968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.518553000000793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_sv_v2]",
            "value": 455.2773750103951,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.196463199993559 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm]",
            "value": 149.5339445642497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.68744480000214 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-3-braket_dm_v2]",
            "value": 458.4761792284786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.181138399998872 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv]",
            "value": 140.88684436392919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.097894800006088 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_sv_v2]",
            "value": 448.8144610904616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.2280921999936254 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm]",
            "value": 135.26648254557688,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.39281439999786 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-4-braket_dm_v2]",
            "value": 423.6836445744747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3602515999982643 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv]",
            "value": 127.8795370668455,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8198594000014054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_sv_v2]",
            "value": 402.54287947055224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.484207400004834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm]",
            "value": 122.63683720180369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.15415680000342 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-5-braket_dm_v2]",
            "value": 399.99360010314206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5000399999953515 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv]",
            "value": 120.78425506692457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.279224800003249 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_sv_v2]",
            "value": 430.643154352872,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.322108200007733 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm]",
            "value": 109.89233430425328,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.099815799993394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-6-braket_dm_v2]",
            "value": 388.33389072230034,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.5751035999974192 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv]",
            "value": 109.96383399458843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.093899000004058 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_sv_v2]",
            "value": 411.2486372242207,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.431619000003593 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm]",
            "value": 69.96919298413724,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.29200420000143 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-7-braket_dm_v2]",
            "value": 240.51570800917415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.157732599992414 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv]",
            "value": 103.02770823069605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.706126799994763 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_sv_v2]",
            "value": 402.8600160537302,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.482251800006452 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm]",
            "value": 63.54618143749206,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.736586800005625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-8-braket_dm_v2]",
            "value": 257.37024743331125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8854529999980514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv]",
            "value": 96.19724220970164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.395308400006797 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_sv_v2]",
            "value": 364.4102384703968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.744159999997464 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm]",
            "value": 48.04620445891041,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.813298600000962 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-9-braket_dm_v2]",
            "value": 111.1174250501307,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.99948859999995 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv]",
            "value": 90.74391224044703,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.02002300000322 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_sv_v2]",
            "value": 378.96372369717216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6387750000026244 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm]",
            "value": 28.50876662818885,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.07692960000668 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-10-braket_dm_v2]",
            "value": 72.42394544218648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.807587999997395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv]",
            "value": 85.00227219579048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.764391399992746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-11-braket_sv_v2]",
            "value": 342.4231147103879,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.920363600003384 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv]",
            "value": 79.55990642165287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.569144999997661 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-12-braket_sv_v2]",
            "value": 353.32879894819627,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.83022499999106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv]",
            "value": 75.4280853096587,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.257661199997983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-13-braket_sv_v2]",
            "value": 352.3723148967083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.837907399998585 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv]",
            "value": 69.26860416863633,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.436554799999612 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-14-braket_sv_v2]",
            "value": 332.2492262579992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.009788800000024 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv]",
            "value": 45.28676786038837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.08150519999208 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[ghz-variance y(q[0])-15-braket_sv_v2]",
            "value": 147.26252224755615,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.790594000005967 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv]",
            "value": 156.3328808538842,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.396606999999221 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-3-braket_sv_v2]",
            "value": 492.7952351015986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0292404000088027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv]",
            "value": 116.82444430929753,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.559852400003365 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-4-braket_sv_v2]",
            "value": 437.6761044524162,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.284794599995621 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv]",
            "value": 88.99351045079723,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.236774400003924 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-5-braket_sv_v2]",
            "value": 381.24061337928555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6230154000018047 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv]",
            "value": 66.22862962724952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.0992102000032 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-6-braket_sv_v2]",
            "value": 318.9614207872977,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.13517539999566 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv]",
            "value": 51.51057384849575,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.41348980000157 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-7-braket_sv_v2]",
            "value": 237.37557187905372,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.212733400004254 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv]",
            "value": 38.95491595651971,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.670701000001372 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-8-braket_sv_v2]",
            "value": 245.55805129859806,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.0723567999975785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv]",
            "value": 32.578260050123646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.69531639999923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-9-braket_sv_v2]",
            "value": 205.40139108467713,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.868516200008344 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv]",
            "value": 26.565267677506647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.64313660000198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-10-braket_sv_v2]",
            "value": 170.5686461871944,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.862742200008597 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv]",
            "value": 22.177238306301867,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 45.09127720000379 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-11-braket_sv_v2]",
            "value": 132.5595848041528,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.543777400007912 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv]",
            "value": 14.035971916580335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 71.2455116000001 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-12-braket_sv_v2]",
            "value": 89.67146652326979,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.151819399992746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv]",
            "value": 15.35312055998231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.1333386000033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-13-braket_sv_v2]",
            "value": 59.924893254883315,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.68755580000152 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv]",
            "value": 11.134416285663931,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 89.81162320000067 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-14-braket_sv_v2]",
            "value": 23.89474715608513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.85020219999842 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv]",
            "value": 6.905203582298786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.81832259999692 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-state_vector-15-braket_sv_v2]",
            "value": 17.5625564385943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.93931879999354 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv]",
            "value": 134.69686793142597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.4240776000010555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_sv_v2]",
            "value": 478.82244918735097,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.0884568000042236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm]",
            "value": 134.1350351886398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.455173799996828 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-3-braket_dm_v2]",
            "value": 471.4201087635889,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.121250200002578 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv]",
            "value": 107.59101522071705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.294456399993578 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_sv_v2]",
            "value": 439.7754752685511,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.273887600006219 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm]",
            "value": 103.61541538753941,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.651073600002746 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-4-braket_dm_v2]",
            "value": 401.0609184252987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.493386800006192 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv]",
            "value": 79.49769666551319,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.578980800003592 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_sv_v2]",
            "value": 379.19134412383556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.637190999996619 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm]",
            "value": 78.75683780650431,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.697310199996537 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-5-braket_dm_v2]",
            "value": 365.4205460619743,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7365730000042277 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv]",
            "value": 62.498668778368334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.000340799996593 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_sv_v2]",
            "value": 337.2168120658007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.965451199997915 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm]",
            "value": 59.16515878343056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.901839199999813 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-6-braket_dm_v2]",
            "value": 305.0206273251613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.278466799997659 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv]",
            "value": 50.137869615244426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.945003800000904 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_sv_v2]",
            "value": 310.5412802835216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2201837999991767 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm]",
            "value": 32.09357047357596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.158889000005274 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-7-braket_dm_v2]",
            "value": 130.1537230004146,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.683222399998613 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv]",
            "value": 39.837474894319556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.10199260000263 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_sv_v2]",
            "value": 279.2484240896399,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5810407999974814 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm]",
            "value": 22.77947842529402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.89916140000878 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-8-braket_dm_v2]",
            "value": 94.50334165704356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.581636400002026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv]",
            "value": 31.62034399051361,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.62520939999922 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_sv_v2]",
            "value": 225.75113384599584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4296566000070925 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm]",
            "value": 14.499887904266238,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.96605040000168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-9-braket_dm_v2]",
            "value": 91.40301284804538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.9405584000001 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv]",
            "value": 25.23968182372554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.62015079999901 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_sv_v2]",
            "value": 180.91733847029087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.527386199992179 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm]",
            "value": 7.222775043793784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 138.45094079999853 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-10-braket_dm_v2]",
            "value": 28.42349613073044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.182160399995155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv]",
            "value": 21.10549600328037,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.38102339999841 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-11-braket_sv_v2]",
            "value": 173.5759619788761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.761166399997819 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv]",
            "value": 14.129008883033856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 70.7763727999918 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-12-braket_sv_v2]",
            "value": 142.76702830902565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.0044183999925735 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv]",
            "value": 9.042415569772153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 110.5899184000009 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-13-braket_sv_v2]",
            "value": 108.75477457926507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.194998600003146 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv]",
            "value": 4.562452284961458,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 219.18037440000262 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-14-braket_sv_v2]",
            "value": 96.87280631528847,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.322814400001334 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv]",
            "value": 1.6626459719366036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 601.4509503999989 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-density_matrix q[0], q[1]-15-braket_sv_v2]",
            "value": 80.24335305392897,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.46209139999337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv]",
            "value": 156.84657575381902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.375657199998841 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_sv_v2]",
            "value": 514.240396485126,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.9446157999936986 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm]",
            "value": 156.0378129552987,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.408702999999605 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-3-braket_dm_v2]",
            "value": 483.96727723115873,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.066255399995498 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv]",
            "value": 119.47431016787718,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.37000020000005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_sv_v2]",
            "value": 455.2200907191474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1967396000036388 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm]",
            "value": 117.31752080871232,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.52387599999247 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-4-braket_dm_v2]",
            "value": 443.16788458206565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.256481199992777 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv]",
            "value": 89.0336076761656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.231713799998033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_sv_v2]",
            "value": 395.6271176429861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.527632600003926 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm]",
            "value": 87.75731717873812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.39506120000533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-5-braket_dm_v2]",
            "value": 405.8584201875721,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.4639133999926344 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv]",
            "value": 68.8315539481604,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.528220600004715 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_sv_v2]",
            "value": 372.53357626560603,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.6843217999953595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm]",
            "value": 62.728161927487356,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.941802999998346 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-6-braket_dm_v2]",
            "value": 342.58770056791445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.91896059999317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv]",
            "value": 26.140478218931644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.25484719999395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_sv_v2]",
            "value": 254.41426559833616,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.930597199996555 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm]",
            "value": 32.9932838739367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.30919880000056 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-7-braket_dm_v2]",
            "value": 119.06423134279459,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.398827999997138 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv]",
            "value": 41.36632405781482,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.174253399996815 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_sv_v2]",
            "value": 245.93398571065188,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.066131800004769 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm]",
            "value": 23.548040647363443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.466378200003874 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-8-braket_dm_v2]",
            "value": 93.80623155921437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.660272600000553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv]",
            "value": 33.35819430600165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.97764179999649 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_sv_v2]",
            "value": 215.04582755628388,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.650171599996611 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm]",
            "value": 14.85077820736095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.33653860000004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-9-braket_dm_v2]",
            "value": 92.23000909949326,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.842457999990529 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv]",
            "value": 26.927162042831103,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.13722219999909 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_sv_v2]",
            "value": 179.0033124202157,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.586488800008738 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm]",
            "value": 6.345203126310253,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 157.5993675999939 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-10-braket_dm_v2]",
            "value": 30.412103219065116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.881645600002685 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv]",
            "value": 22.35817213124739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.72637540000051 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-11-braket_sv_v2]",
            "value": 147.1253501509518,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.796925200001169 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv]",
            "value": 18.2574791005442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 54.77207420000241 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-12-braket_sv_v2]",
            "value": 100.20549140118632,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.979493000003004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv]",
            "value": 15.723543179447288,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.59889679999924 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-13-braket_sv_v2]",
            "value": 69.77833474533027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.331095800002913 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv]",
            "value": 13.158450473610106,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 75.99679019999712 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-14-braket_sv_v2]",
            "value": 45.04025941604891,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.202358799995636 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv]",
            "value": 7.532439145932369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 132.7591210000037 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-probability-15-braket_sv_v2]",
            "value": 27.533627769507465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.319224199996825 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv]",
            "value": 139.20098523107424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.183857200004695 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_sv_v2]",
            "value": 472.15873523386995,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1179318000008607 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm]",
            "value": 134.44848853548814,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.437792799998988 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-3-braket_dm_v2]",
            "value": 468.4048295539255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.134905399998388 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv]",
            "value": 105.78423768727289,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.453204200008258 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_sv_v2]",
            "value": 445.1158373899453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.246606200003498 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm]",
            "value": 107.49812539388125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.30248780000511 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-4-braket_dm_v2]",
            "value": 463.1823312617032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.1589769999991404 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv]",
            "value": 81.73021692308494,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.235376800003905 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_sv_v2]",
            "value": 367.0202907166791,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7246450000006917 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm]",
            "value": 78.36650843635076,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.760553199996139 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-5-braket_dm_v2]",
            "value": 380.2527737911613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.629829600004996 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv]",
            "value": 62.77568018422367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.929735800000344 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_sv_v2]",
            "value": 369.3522167856348,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7074427999991713 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm]",
            "value": 60.11641423382427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.634392000003118 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-6-braket_dm_v2]",
            "value": 317.9114085177465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.145530400001917 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv]",
            "value": 49.54795075771919,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.182469399992442 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_sv_v2]",
            "value": 327.22675845713565,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0559848000052625 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm]",
            "value": 30.273794257741095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.031868800003394 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-7-braket_dm_v2]",
            "value": 190.6057152286119,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.2464323999970475 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv]",
            "value": 40.15041888690704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.90634040000259 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_sv_v2]",
            "value": 284.23693581623303,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5181916000055935 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm]",
            "value": 23.162435617757087,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.17335259999027 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-8-braket_dm_v2]",
            "value": 123.04527204686923,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.127090000004955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv]",
            "value": 32.43454990010733,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.831320400000095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_sv_v2]",
            "value": 224.74275719299973,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.449531599993861 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm]",
            "value": 14.305278552512501,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.90426620000108 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-9-braket_dm_v2]",
            "value": 90.51570471912717,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.04780660000415 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv]",
            "value": 18.889649549890798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 52.93904459999794 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_sv_v2]",
            "value": 219.36975245615298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.558513599999969 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm]",
            "value": 6.935238974256139,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.19113800000787 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-10-braket_dm_v2]",
            "value": 28.087277417179294,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.60330839999324 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv]",
            "value": 21.71267439066335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.056049200001326 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-11-braket_sv_v2]",
            "value": 184.03961356966116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.433612800004539 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv]",
            "value": 13.567329352105446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.70647340000005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-12-braket_sv_v2]",
            "value": 150.82140504435841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.630358600000363 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv]",
            "value": 15.643750061067784,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.923291800006155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-13-braket_sv_v2]",
            "value": 33.32533258748865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.007202399997368 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv]",
            "value": 12.979394925009125,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.04519400000436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-14-braket_sv_v2]",
            "value": 114.00448931445375,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.771584399994481 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv]",
            "value": 6.665035066082366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.0367200000028 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-expectation z(q[0])-15-braket_sv_v2]",
            "value": 74.18019020985346,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.480688000004193 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv]",
            "value": 124.0891361052024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.058723200008444 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_sv_v2]",
            "value": 430.808011443058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3212196000031327 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm]",
            "value": 133.3105709976722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.501280600001792 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-3-braket_dm_v2]",
            "value": 424.78840864592837,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3541131999991194 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv]",
            "value": 111.23144623333918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.990263399994092 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_sv_v2]",
            "value": 431.80760449520403,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.3158461999969404 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm]",
            "value": 102.24485323441147,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.78044339999542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-4-braket_dm_v2]",
            "value": 357.7479366701287,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.7952642000059313 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv]",
            "value": 80.46447182975942,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.427845199999865 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_sv_v2]",
            "value": 342.0939722569015,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.923173399994994 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm]",
            "value": 78.03004475086426,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.815576399998463 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-5-braket_dm_v2]",
            "value": 332.10145832361195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0111280000028273 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv]",
            "value": 62.94341432375414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.887285599990264 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_sv_v2]",
            "value": 343.3947066660278,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.912100800006101 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm]",
            "value": 59.37971122340752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.84076899999809 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-6-braket_dm_v2]",
            "value": 314.00916730947233,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.184620399997584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv]",
            "value": 49.82929430527272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.06851620000134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_sv_v2]",
            "value": 295.24266053365994,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3870443999944655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm]",
            "value": 31.306177173968017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.942577799998165 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-7-braket_dm_v2]",
            "value": 142.56647832121507,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.014271599996391 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv]",
            "value": 37.554928683685596,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.627663399995072 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_sv_v2]",
            "value": 255.0196798688542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.921265999997559 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm]",
            "value": 23.286641133954323,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.94307599999456 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-8-braket_dm_v2]",
            "value": 93.19753607331292,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.729897400005939 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv]",
            "value": 20.367359214722537,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.09816680000176 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_sv_v2]",
            "value": 223.16149407321248,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.48105980000264 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm]",
            "value": 14.70034313393822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.02562300000545 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-9-braket_dm_v2]",
            "value": 90.02843277960694,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.107602000004135 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv]",
            "value": 25.965144950262953,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.51316840000436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_sv_v2]",
            "value": 172.73258598148007,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.789295600004607 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm]",
            "value": 7.047995612492886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 141.88431080000328 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-10-braket_dm_v2]",
            "value": 28.27346230718216,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.3688553999973 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv]",
            "value": 21.38835435589165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.75441519999595 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-11-braket_sv_v2]",
            "value": 153.608335058535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.510063400003219 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv]",
            "value": 17.934345281638514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.75893539999015 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-12-braket_sv_v2]",
            "value": 139.30020369586362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.178740400001971 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv]",
            "value": 11.713136058603153,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 85.37423239999953 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-13-braket_sv_v2]",
            "value": 114.77517597492186,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.712685400007558 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv]",
            "value": 10.34261796077416,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.68731880000223 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-14-braket_sv_v2]",
            "value": 103.54575883821613,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.657565999998496 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv]",
            "value": 6.663663158214189,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 150.0676093999914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_exact_shots[qft-variance y(q[0])-15-braket_sv_v2]",
            "value": 78.98775486014532,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.660190199994759 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv]",
            "value": 160.09471459449796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.246302400006698 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_sv_v2]",
            "value": 331.53242708763986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0162961999963045 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm]",
            "value": 161.84970649194943,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.178571600003124 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-3-braket_dm_v2]",
            "value": 333.46376212580236,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9988266000032127 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv]",
            "value": 147.56896510151424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.7764925999995285 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_sv_v2]",
            "value": 295.6975940921084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.381833399998868 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm]",
            "value": 141.196036039898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.082351799999742 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-4-braket_dm_v2]",
            "value": 275.81408872762734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6256305999927463 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv]",
            "value": 132.1137752206262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.569233399999575 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_sv_v2]",
            "value": 277.7860650616856,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5998926000047504 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm]",
            "value": 130.10367779944465,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.686177799996585 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-5-braket_dm_v2]",
            "value": 250.4697560272825,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9924980000023425 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv]",
            "value": 120.40814508128048,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.305085999995754 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_sv_v2]",
            "value": 256.3024516560113,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.901640399999451 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm]",
            "value": 117.79870317292519,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.489057799999955 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-6-braket_dm_v2]",
            "value": 251.0561555882083,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.983172599998852 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv]",
            "value": 112.20066937122917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.912602800000968 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_sv_v2]",
            "value": 236.5133019808341,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.22809200000529 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm]",
            "value": 72.62700731428939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.768982599992796 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-7-braket_dm_v2]",
            "value": 119.76430289385107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.349733399995785 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv]",
            "value": 106.74400283901595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.368207800002892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_sv_v2]",
            "value": 223.456696326841,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.475139999999556 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm]",
            "value": 66.01616886492022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.147804200000792 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-8-braket_dm_v2]",
            "value": 113.5712692308144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.805043800009571 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv]",
            "value": 97.72355709989058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.232947200006492 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_sv_v2]",
            "value": 160.82507121344716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.217935999995916 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm]",
            "value": 49.757595424822476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.09743419998813 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-9-braket_dm_v2]",
            "value": 153.6297722212752,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.5091549999806375 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv]",
            "value": 94.22288049248088,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.613133400011066 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_sv_v2]",
            "value": 196.44470444954104,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0904910000099335 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm]",
            "value": 29.482721465343595,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.918171400000574 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-10-braket_dm_v2]",
            "value": 108.78902626811849,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.192103600003065 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv]",
            "value": 87.73746913720105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.397639000006166 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-11-braket_sv_v2]",
            "value": 183.64887393149172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.445173599991904 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv]",
            "value": 80.15964209558429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.475105599992276 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-12-braket_sv_v2]",
            "value": 166.46439023744745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.007290799993825 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv]",
            "value": 71.13428179143129,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.05791939998835 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-13-braket_sv_v2]",
            "value": 141.92949975692156,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.045751600003314 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv]",
            "value": 70.75239383297898,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.133797399995274 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-14-braket_sv_v2]",
            "value": 143.5117532683848,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.968070399989301 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv]",
            "value": 45.8259161797045,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.821713199983606 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-probability-100-15-braket_sv_v2]",
            "value": 101.4701235021276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.855117600000085 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv]",
            "value": 138.79661612774046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.2047865999820715 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 324.2139303565217,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0843832000073235 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm]",
            "value": 142.1499428305334,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.034825199980332 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 333.56375917874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.9979275999949095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv]",
            "value": 133.37515622563538,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.497648200001095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 296.3772094702811,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.3740785999953005 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm]",
            "value": 127.23130307363473,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.85970100000668 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 293.55338564850564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4065353999949366 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv]",
            "value": 120.571784196065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.29381440000816 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 273.4867254745741,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.656484599991927 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm]",
            "value": 117.55284229472089,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.506812600012381 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 270.08715118280656,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.7025085999857765 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv]",
            "value": 113.0508373788526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.845578000000387 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 253.72745935959495,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.941236800005754 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm]",
            "value": 106.4365887949456,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.395265400007702 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 241.91340342074247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.133710599990081 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv]",
            "value": 104.45569994071364,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.573436400000901 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 231.07169295045736,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.327661199999966 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm]",
            "value": 64.80590508291496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.430692600011753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 106.99667522817023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.34608479999497 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv]",
            "value": 98.50470449602739,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.151799400000527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 219.5010144888123,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.555787600020267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm]",
            "value": 61.68258622259235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.212030999986382 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 110.99261539472865,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.009608400015168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv]",
            "value": 93.16584896245514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.733546799997384 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 204.50894783919108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.889761599997655 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm]",
            "value": 46.71627343164687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.40581700000439 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 91.63138949803027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.913290799999231 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv]",
            "value": 88.96217157655808,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.240732800001751 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 195.05882447531732,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.126658599988332 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm]",
            "value": 27.847393321638563,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.91000379999514 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 111.81433882022874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.943396800009396 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv]",
            "value": 79.73875542407822,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.540953200004878 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 173.39509574175443,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.767175799996949 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv]",
            "value": 76.39875812287998,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.089218000004621 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 173.28377325025673,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.770880799991573 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv]",
            "value": 73.62203044429295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.582890800012137 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 151.75545397719333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.589549000000261 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv]",
            "value": 69.14853098920331,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.461623200008944 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 150.49470166828084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.644752200008952 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv]",
            "value": 43.056249347210276,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.225432200001705 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 90.20104387503453,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.086346199999753 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv]",
            "value": 139.32742194953735,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.17733799999678 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 293.4055862200648,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.4082513999919684 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm]",
            "value": 140.20414003174275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.132457000011527 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 280.5129347326782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.564897999990535 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv]",
            "value": 129.5845893857866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.7169670000103 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 257.0698448998074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8899934000028225 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm]",
            "value": 127.96134871143128,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.814859800009798 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 272.14995854753687,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.674444799980847 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv]",
            "value": 119.20630250395513,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.38881820000097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 241.90929523899254,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.133780799998021 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm]",
            "value": 116.1395672406038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.610330000010435 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 164.4215777146674,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.081926799993198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv]",
            "value": 109.19623620677204,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.157824799990522 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 232.8299549714442,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.294979999986026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm]",
            "value": 108.50933221491132,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.215797199999542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 238.16564439606324,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.198758400002589 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv]",
            "value": 103.07824415952602,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.701368199989702 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 222.90643600449496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.486187199995584 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm]",
            "value": 67.89530831334422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.728558199999497 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 108.61879493121154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.206509800014828 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv]",
            "value": 96.87627676876804,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.32244460000129 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 213.35436153829448,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.6870380000200385 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm]",
            "value": 57.81309659501714,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.297118800001954 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 114.00791543280022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.771320799996829 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv]",
            "value": 89.07766385781032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.226158799991026 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 188.6681103047342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.300312800000029 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm]",
            "value": 47.34869424089699,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.11990660000629 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 99.78904993991219,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.0211396000077 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv]",
            "value": 85.72698359521677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.664938599983543 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 185.70224902538948,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.384964399991077 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm]",
            "value": 27.26382617876116,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.678637599993635 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 95.40614270920797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.481505400002789 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv]",
            "value": 81.79718760337032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.225359199987906 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 169.9904907321738,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.882681999992201 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv]",
            "value": 75.29347136333578,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.281363999999485 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 161.84305839094606,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.178825400002097 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv]",
            "value": 70.5502301342105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.174298199986879 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 142.87233222715892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.9992557999967175 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv]",
            "value": 65.84091536467437,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.18812419999449 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 138.2923685985864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.23105699998996 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv]",
            "value": 41.77620596751962,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.937070800002402 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 109.21899159240535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.155916800000341 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv]",
            "value": 132.57811184155526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.54272320000382 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 283.0284268088369,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5332140000036816 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm]",
            "value": 143.81076436223861,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.9535824000013235 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 246.8726420577892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.050671599998168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv]",
            "value": 135.3587001493262,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.38777779999964 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 291.51624185711546,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.430340599993542 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm]",
            "value": 132.03695925755952,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.57363699999587 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 274.40985416798696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.644183999995221 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv]",
            "value": 122.23149035687419,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.181197800013251 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 280.41081979769496,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.56619619999492 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm]",
            "value": 117.93085039682457,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.479545399995914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 256.386944920318,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9003546000003553 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv]",
            "value": 113.43654773558336,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.815501000003678 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 252.19600936167487,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.965169799994328 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm]",
            "value": 111.2073029570539,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.992215199987186 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 243.2664100952976,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.110719599998447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv]",
            "value": 104.69678356189524,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.551391800005149 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 238.4163167557438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.1943437999862 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm]",
            "value": 70.26179897617584,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.232484999979533 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 114.70234729411797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.71821739999632 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv]",
            "value": 101.38161650383397,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.863721200008513 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 225.0221883132763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.444006199992145 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm]",
            "value": 57.58168817558515,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.366632199991727 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 117.0239955362072,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.545256000002155 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv]",
            "value": 91.05603216713986,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.982248799996341 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 203.77863461693684,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.907285800004502 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm]",
            "value": 46.502019508282835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.504442400009793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 93.02210320512339,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.75013320000835 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv]",
            "value": 87.37763177712058,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.44457660000171 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 190.1907232573112,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.257879999999204 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm]",
            "value": 29.291073422344734,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.1400940000085 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 91.42480995073333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.93794999999318 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv]",
            "value": 83.35540723433893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.996822200012502 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 186.68973853159514,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.356480799991914 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv]",
            "value": 76.04299276141728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.150455599998168 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 169.76522725327436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.89048780000212 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv]",
            "value": 71.55526411249447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.97521220001181 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 163.28416444380414,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.124292599997716 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv]",
            "value": 67.0500921717077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.914222600009452 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 154.4461653178183,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.474748000005093 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv]",
            "value": 41.76123010010096,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 23.945654799990734 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[ghz-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 87.05792529643001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.486605000004602 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv]",
            "value": 150.30226687707798,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.653259599988814 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_sv_v2]",
            "value": 318.59047418428105,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.138825799987899 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm]",
            "value": 147.71508690388424,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.769789200006926 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-3-braket_dm_v2]",
            "value": 331.39164341786653,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0175775999850885 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv]",
            "value": 113.58706684920554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.803819200011276 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_sv_v2]",
            "value": 284.90408362136884,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.509953200000382 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm]",
            "value": 110.25445603878646,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.069928199983224 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-4-braket_dm_v2]",
            "value": 278.12243327722564,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5955388000047606 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv]",
            "value": 87.17194255961225,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.471581000000697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_sv_v2]",
            "value": 245.45894809527996,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.074001000003591 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm]",
            "value": 78.78619343178761,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.692579200006548 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-5-braket_dm_v2]",
            "value": 249.5329989923592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.007486000000426 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv]",
            "value": 65.94399173677469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.16438379999272 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_sv_v2]",
            "value": 220.13019292046272,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.542766200006554 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm]",
            "value": 63.059345061359394,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.858077799998684 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-6-braket_dm_v2]",
            "value": 193.91999535893316,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.156765799983987 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv]",
            "value": 49.34228753744077,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.266591800009337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_sv_v2]",
            "value": 188.74172235470488,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.2982455999881495 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm]",
            "value": 31.85351724339274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.393707400002317 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-7-braket_dm_v2]",
            "value": 107.38121044857812,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.31261620000896 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv]",
            "value": 40.32758744522108,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.796921000006478 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_sv_v2]",
            "value": 163.75926824236947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.10652459999983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm]",
            "value": 23.286858043030165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.94267600000694 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-8-braket_dm_v2]",
            "value": 87.62041937085222,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.412864800013267 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv]",
            "value": 32.282014646934705,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.977000999996562 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_sv_v2]",
            "value": 151.51693298685032,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.599922400005198 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm]",
            "value": 14.465790228801415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.12861199998588 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-9-braket_dm_v2]",
            "value": 73.35948099981981,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.63150320000841 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv]",
            "value": 27.005673422084968,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.02925620000315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_sv_v2]",
            "value": 135.38795567605467,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.386181400011083 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm]",
            "value": 6.8808433093306665,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.33102339999004 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-10-braket_dm_v2]",
            "value": 28.007682888319298,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.704488800001855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv]",
            "value": 14.608354486374985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 68.4539796000081 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-11-braket_sv_v2]",
            "value": 113.2236813308887,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.832074599990847 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv]",
            "value": 18.686938147534374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.51331460001347 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-12-braket_sv_v2]",
            "value": 103.22710005360781,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.687378600006014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv]",
            "value": 11.805409238986568,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 84.70693219999248 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-13-braket_sv_v2]",
            "value": 84.20092421972964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.876354199989692 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv]",
            "value": 13.147471870925056,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 76.06025019999834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-14-braket_sv_v2]",
            "value": 71.85614732716762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.916693800001667 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv]",
            "value": 6.726079915210534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.67501020000873 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-probability-100-15-braket_sv_v2]",
            "value": 67.18943270401046,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 14.88329280000471 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv]",
            "value": 135.6185272162342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.373623799981033 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_sv_v2]",
            "value": 337.1257280729033,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.966252400005942 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm]",
            "value": 129.7532407365174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.7069365999932415 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-3-braket_dm_v2]",
            "value": 325.7288035397535,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.0700386000034996 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv]",
            "value": 105.81259480552224,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.450670799992622 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_sv_v2]",
            "value": 271.97324914510716,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6768322000170883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm]",
            "value": 103.7774665743935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.636003200012055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-4-braket_dm_v2]",
            "value": 261.32707848749044,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.8266221999947447 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv]",
            "value": 77.80786850113853,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.852170600012869 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_sv_v2]",
            "value": 255.56732982621475,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.912863200002903 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm]",
            "value": 76.33968552303597,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.099346599983619 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-5-braket_dm_v2]",
            "value": 235.8514818684182,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.239956400010669 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv]",
            "value": 63.060326472072454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.857831000016631 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_sv_v2]",
            "value": 226.72336625105757,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.410661399992932 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm]",
            "value": 60.56723737392471,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.510576400014543 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-6-braket_dm_v2]",
            "value": 212.30344310353095,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.710239199994248 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv]",
            "value": 49.014031295738796,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.40232100000594 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_sv_v2]",
            "value": 193.54615694505802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.166726200013727 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm]",
            "value": 28.00389052449964,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.70932400000402 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-7-braket_dm_v2]",
            "value": 112.57656022295899,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.882843799983675 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv]",
            "value": 39.742245151373226,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.162141599980714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_sv_v2]",
            "value": 171.1516734486486,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.8427708000181156 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm]",
            "value": 23.079336891505985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.32880120000482 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-8-braket_dm_v2]",
            "value": 100.71389229701036,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.929116800003612 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv]",
            "value": 30.92950594635858,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.33158660000299 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_sv_v2]",
            "value": 139.27435387568815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.180072799997106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm]",
            "value": 10.576024842931245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 94.55348439998943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-9-braket_dm_v2]",
            "value": 75.02695643522922,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.328542799990828 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv]",
            "value": 25.63612177960313,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.00746019999133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_sv_v2]",
            "value": 123.23100961463894,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.114840600001116 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm]",
            "value": 6.893964367011905,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 145.05441960000098 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-10-braket_dm_v2]",
            "value": 27.303281630577295,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.62563399998362 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv]",
            "value": 21.39505122110014,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.73978060000081 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-11-braket_sv_v2]",
            "value": 118.04657565411152,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.471232600004441 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv]",
            "value": 18.139404954963446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.12859999998909 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-12-braket_sv_v2]",
            "value": 101.55907396819474,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.846485999992183 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv]",
            "value": 11.555417211021476,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 86.5394975999834 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-13-braket_sv_v2]",
            "value": 88.76160553564281,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.266132399987328 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv]",
            "value": 10.349769444084972,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 96.62050980000458 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-14-braket_sv_v2]",
            "value": 77.08038019128402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.973469999997178 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv]",
            "value": 6.586725398442626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.82050859998526 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-expectation z(q[0])-100-15-braket_sv_v2]",
            "value": 66.53475220553536,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.029739600004177 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv]",
            "value": 130.99766590987252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.633723799995096 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_sv_v2]",
            "value": 304.20329248974815,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.2872753999981796 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm]",
            "value": 127.95123686231645,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.815477400004055 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-3-braket_dm_v2]",
            "value": 281.8431459464165,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.5480728000038653 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv]",
            "value": 104.78591430855857,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.543267399999422 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_sv_v2]",
            "value": 273.1451003047506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6610577999908855 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm]",
            "value": 102.25678265161174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.77930239998841 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-4-braket_dm_v2]",
            "value": 270.8507840243469,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.6920697999903496 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv]",
            "value": 79.25173680186984,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.618019999990793 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_sv_v2]",
            "value": 161.10237327620644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.207233200007067 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm]",
            "value": 74.88065521165382,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.354584000012437 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-5-braket_dm_v2]",
            "value": 186.17175759543417,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.371384000000035 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv]",
            "value": 63.12380920876245,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.841883000007329 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_sv_v2]",
            "value": 214.55176767233903,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.660879800007933 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm]",
            "value": 57.46416919421541,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.402148399992257 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-6-braket_dm_v2]",
            "value": 190.32899546939862,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.254060199990818 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv]",
            "value": 48.231034216502586,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.73353840000891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_sv_v2]",
            "value": 140.32298196886433,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.12641640000129 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm]",
            "value": 30.11154097677024,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.20985800000926 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-7-braket_dm_v2]",
            "value": 92.81637114467726,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.773961399991094 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv]",
            "value": 38.12321719631851,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.230734800014943 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_sv_v2]",
            "value": 152.70619505171393,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.548522800017054 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm]",
            "value": 22.437028549795205,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 44.56918159999077 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-8-braket_dm_v2]",
            "value": 112.58641091484252,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.882066599994687 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv]",
            "value": 30.91993854550755,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.34159080000154 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_sv_v2]",
            "value": 140.12641532564498,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.136413200009883 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm]",
            "value": 14.342435832903655,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.72316359999695 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-9-braket_dm_v2]",
            "value": 73.9525563291819,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.522182999986398 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv]",
            "value": 25.81836230637686,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.73212359999343 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_sv_v2]",
            "value": 128.1261926146751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.8048053999964395 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm]",
            "value": 6.945426209377785,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 143.97964500001308 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-10-braket_dm_v2]",
            "value": 27.754133414763636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 36.030669199999465 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv]",
            "value": 14.486096988695362,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.0317068000013 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-11-braket_sv_v2]",
            "value": 116.25350751378268,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.601890999989337 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv]",
            "value": 18.05328118312797,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.39159280001513 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-12-braket_sv_v2]",
            "value": 98.3867543564548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.163969800009909 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv]",
            "value": 15.24415912649367,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.59889540001222 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-13-braket_sv_v2]",
            "value": 84.81628385797782,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.790188800000578 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv]",
            "value": 10.21860859432019,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.86068139999315 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-14-braket_sv_v2]",
            "value": 77.15884586673647,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.96027679998133 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv]",
            "value": 6.6074113837569275,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 151.34520040001007 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-variance y(q[0])-100-15-braket_sv_v2]",
            "value": 64.93872596118081,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.399131799995303 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv]",
            "value": 133.0169587047689,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.517838399985521 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_sv_v2]",
            "value": 326.7914905574127,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.060055200012357 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm]",
            "value": 130.43693425118155,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.666540199988958 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-3-braket_dm_v2]",
            "value": 319.4440140840844,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.1304389999831983 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv]",
            "value": 104.5976875879342,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.560440799987191 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_sv_v2]",
            "value": 287.16534038373027,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.482314400002906 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm]",
            "value": 99.9044533787933,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.009563800008436 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-4-braket_dm_v2]",
            "value": 271.0823156627832,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.688916400005837 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv]",
            "value": 80.29894333023181,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.453463999986525 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_sv_v2]",
            "value": 252.90217895551402,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 3.9540979999856067 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm]",
            "value": 75.02707914857548,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 13.328520999993998 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-5-braket_dm_v2]",
            "value": 225.90115812402192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.426714799978981 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv]",
            "value": 58.447905352692935,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 17.10925300001236 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_sv_v2]",
            "value": 196.72719136071936,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.0831814000048325 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm]",
            "value": 54.29399005490428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.41824480000014 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-6-braket_dm_v2]",
            "value": 201.34451423663947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.966611599979842 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv]",
            "value": 47.25484597029983,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 21.161850799990134 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_sv_v2]",
            "value": 188.36424340327773,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.308863200002634 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm]",
            "value": 30.562979744806256,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.71932279999419 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-7-braket_dm_v2]",
            "value": 84.52498202632026,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.830821799981095 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv]",
            "value": 36.737738761340864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.219965999984197 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_sv_v2]",
            "value": 160.62197454425763,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.225798200011923 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm]",
            "value": 22.965603180567445,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 43.54338059999918 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-8-braket_dm_v2]",
            "value": 118.93829210224864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.407721200001106 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv]",
            "value": 31.12701405478335,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.12643519998437 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_sv_v2]",
            "value": 140.18092086079398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.133638400000564 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm]",
            "value": 13.80303554149354,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.44783199998892 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-9-braket_dm_v2]",
            "value": 77.65891063314317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.876822399994126 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv]",
            "value": 25.85638131947978,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.67517220000991 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_sv_v2]",
            "value": 131.34755445571696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.613388799995846 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm]",
            "value": 6.7444465832286875,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 148.27013419999275 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-10-braket_dm_v2]",
            "value": 28.577598556621002,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.99244339998313 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv]",
            "value": 20.887775754249866,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 47.874891600008596 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-11-braket_sv_v2]",
            "value": 117.89447077295947,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.482161999995697 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv]",
            "value": 17.98584409751195,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 55.599281000013434 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-12-braket_sv_v2]",
            "value": 105.27830467233937,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.49863319999622 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv]",
            "value": 11.436945337745074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 87.43593419999343 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-13-braket_sv_v2]",
            "value": 87.30569593532447,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 11.454006400003891 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv]",
            "value": 10.1232666036902,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 98.78234359998714 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-14-braket_sv_v2]",
            "value": 78.86764858684906,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 12.679470199987009 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv]",
            "value": 7.910774025365274,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 126.40988059999927 msec\nrounds: 1"
          },
          {
            "name": "benchmark/benchmark.py::test_nonzero_shots[qft-sample z(q[0])-100-15-braket_sv_v2]",
            "value": 63.77530358518134,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.680050799983292 msec\nrounds: 1"
          }
        ]
      }
    ]
  }
}