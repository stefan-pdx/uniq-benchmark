## Uniq Benchmark

This app roughly benchmarks sending data to WebWorkers via
`postMessage` and [Uniq](https://github.com/bittnkr/uniq).

## Get started

1. Clone the repository.
2. Install dependencies with `yarn`.
3. Run Rollup's watcher with `npm run build`.
4. In another window, run an instance of `http-server` with `npm run start`.
5. Open up a browser at [http://127.0.0.1:8080/](http://127.0.0.1:8080/).
6. Open the console.
7. Click the `Run postMessage tests`. Wait for a timer to be logged to console.
8. Click the `Run uniq tests`. Wait for a timer to be logged to console.

## Results

On a 2017 Macbook Air and Chrome 80.0.3987.149:

|  Mechanism  | Time to send 1M | Time to receive 1M |
| ----------- | --------------- | ------------------ |
| postMessage |      11.714 sec |         13.460 sec |
|        uniq |      11.065 sec |         18.745 sec |

