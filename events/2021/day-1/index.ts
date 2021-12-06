import { sum } from "@helpers/arrays";

export const partOne = (input: string): number => {
  const measurements = input.split("\n").map(Number);

  let counter = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i - 1] < measurements[i]) {
      counter++;
    }
  }

  return counter;
};

export const partTwo = (input: string): number => {
  const measurements = input.split("\n").map(Number);

  let counter = 0;

  for (let i = 3; i < measurements.length; i++) {
    const firstWindow = [
      measurements[i - 3],
      measurements[i - 2],
      measurements[i - 1],
    ];
    const secondWindow = [
      measurements[i - 2],
      measurements[i - 1],
      measurements[i],
    ];

    // ES6
    // [].map; // [1, 2, 3](n) -> [1, 4, 9](n) // input.length === output.length
    // [].filter; // [1, 2, 3, 4](n) -> [2, 4](m) // input.length !== output.length
    // [].reduce; // [1, 2, 3](n) -> 6(1) // input.length => 1

    const firstWindowSum = sum(firstWindow);
    const secondWindowSum = sum(secondWindow);

    if (firstWindowSum < secondWindowSum) {
      counter++;
    }
  }

  return counter;
};
