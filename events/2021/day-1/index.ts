import { sum } from "@helpers/arrays";

export const partOne = (input: string): number => {
  // Process text file to an array, parse each input as integers
  const measurements = input.split("\n").map(Number);

  // Initialize counter
  let increaseCounter = 0;

  // Loop through input array (sliding window)
  for (let i = 1; i < measurements.length; i++) {
    // Determine whether the sum increases or decreases
    if (measurements[i - 1] < measurements[i]) {
      increaseCounter++;
    }
  }

  return increaseCounter;
};

export const partTwo = (input: string): number => {
  // Process text file to an array, parse each input as integers
  const measurements = input.split("\n").map(Number);

  // Initialize counter
  let increaseCounter = 0;

  // Loop through input array (size-3 sliding window)
  for (let i = 3; i < measurements.length; i++) {
    // Get the first and second 3-size sliding windows
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

    // Calculate the sum of the inputs in each each window
    const firstWindowSum = sum(firstWindow);
    const secondWindowSum = sum(secondWindow);

    // Determine whether the sum increases or decreases
    if (firstWindowSum < secondWindowSum) {
      increaseCounter++;
    }
  }

  return increaseCounter;
};
