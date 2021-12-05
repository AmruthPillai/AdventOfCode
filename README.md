# [Advent of Code](https://adventofcode.com/)

A humble documentation of my attempts at solving the Advent of Code each year, written in **Typescript**.

| Year                 |
| -------------------- |
| [2015](/events/2015) |
| [2021](/events/2021) |

### Prerequisites

- You need to have [Node.js](https://nodejs.org/en/) installed on your system.
```sh
$ node -v
v17.1.0
```

- Clone the repository and `cd` into the working directory
```sh
$ git clone https://github.com/AmruthPillai/AdventOfCode.git && cd AdventOfCode
```

- Install required dependencies
```sh
$ npm install
```

### Testing

Every challenge is battle-tested with [Jest](https://jestjs.io/), a resilient testing framework, against two inputs (sample, generated). To run the tests for all challenges, across all years, just run:
```sh
$ npm test
```

To run any specific tests, you can also use pattern matching:
```sh
$ npm t 2015 # Run tests for all challenges from AoC 2015
$ npm t 2015/day-4 # Run tests for day 4 challenge from AoC 2015
```