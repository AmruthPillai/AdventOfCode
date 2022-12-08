type JoltageRating = 1 | 2 | 3;

export const partOne = (input: string): number => {
  // Parse the input into an array of adapters,
  // transform them into numbers and sort them in ascending order
  const adapters = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  // Add the effective rating of the charging outlet to the adapters array
  adapters.unshift(0);

  // Keep track of the count of differences in the joltage adapters
  const differenceCountMap: Record<JoltageRating, number> = {
    1: 0,
    2: 0,
    3: 1, // Add 1 to the 3-jolt count, to account for the device's built-in joltage adapter
  };

  // Loop through each of the adapters and calculate the difference
  for (let i = 1; i < adapters.length; i++) {
    const difference = (adapters[i] - adapters[i - 1]) as JoltageRating;

    differenceCountMap[difference] += 1;
  }

  return differenceCountMap[1] * differenceCountMap[3];
};

export const partTwo = (input: string): number => {
  // Parse the input into an array of adapters,
  // transform them into numbers and sort them in ascending order
  const adapters = input
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  // Get the highest number from the adapters array, and add 3 to get the device's built-in joltage rating
  const highestRating = adapters[adapters.length - 1] + 3;
  adapters.push(highestRating);

  const cache = {};

  const findCombinations = (currentEnd: number, availableAdapters: number[]) => {
    if (currentEnd === highestRating) {
      return 1;
    }

    let combinationCount = 0;

    for (let i = 1; i <= 3; i++) {
      if (availableAdapters.includes(currentEnd + i)) {
        const remaining = availableAdapters.filter((value) => value > currentEnd + i);

        if (cache[currentEnd + i] == null) {
          cache[currentEnd + i] = findCombinations(currentEnd + i, remaining);
        }

        combinationCount += cache[currentEnd + i];
      }
    }

    return combinationCount;
  };

  return findCombinations(0, adapters);
};
