# [Advent of Code](https://adventofcode.com/)

A humble documentation of my attempts at solving the Advent of Code each year, written in **Typescript**.

![Run Tests](https://github.com/AmruthPillai/AdventOfCode/actions/workflows/run-tests.yml/badge.svg)

| Year                 |
| -------------------- |
| [2015](/events/2015) |
| [2020](/events/2020) |
| [2021](/events/2021) |
| [2022](/events/2022) |

### Prerequisites

- You need to have [Node.js](https://nodejs.org/en/) and [pnpm](https://pnpm.io/) installed on your system.
```sh
$ node -v
v18.12.1

$ pnpm -v
7.17.1
```

- Clone the repository and `cd` into the working directory
```sh
$ git clone https://github.com/AmruthPillai/AdventOfCode.git && cd AdventOfCode
```

- Install required dependencies
```sh
$ pnpm install
```

### Testing

Every challenge is battle-tested with [Jest](https://jestjs.io/), a resilient testing framework, against two inputs (sample, generated). To run the tests for all challenges, across all years, just run:
```sh
$ pnpm test
```

To run any specific tests, you can also use pattern matching:
```sh
$ pnpm t 2021 # Run tests for all challenges from AoC 2021
$ pnpm t 2021/day-4 # Run tests for day 4 challenge from AoC 2021
```
