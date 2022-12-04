export const partOne = (input: string): number => {
  // Parse the input to get a list of assignment pairs
  const pairs = input
    .split("\n")
    .map((line) => line.split(",").map((pair) => pair.split("-").map(Number)));

  // Set a counter for the number of fully contained assignment pairs
  let numPairs = 0;

  for (const pair of pairs) {
    const firstElfMin = pair[0][0];
    const firstElfMax = pair[0][1];
    const secondElfMin = pair[1][0];
    const secondElfMax = pair[1][1];

    // Check for any overlap between the two pairs
    if (
      (firstElfMin >= secondElfMin && firstElfMax <= secondElfMax) ||
      (secondElfMin >= firstElfMin && secondElfMax <= firstElfMax)
    ) {
      // Increment the counter if an overlap was found
      numPairs++;
    }
  }

  // Return the number of pairs
  return numPairs;
};

export const partTwo = (input: string): number => {
  // Parse the input to get a list of assignment pairs
  const pairs = input
    .split("\n")
    .map((line) => line.split(",").map((pair) => pair.split("-").map(Number)));

  // Set a counter for the number of fully contained assignment pairs
  let numPairs = 0;

  for (const pair of pairs) {
    const firstElfMin = pair[0][0];
    const firstElfMax = pair[0][1];
    const secondElfMin = pair[1][0];
    const secondElfMax = pair[1][1];

    // Check for any overlap between the two pairs
    if (
      (firstElfMin >= secondElfMin && firstElfMax <= secondElfMax) ||
      (secondElfMin >= firstElfMin && secondElfMax <= firstElfMax) ||
      (firstElfMax >= secondElfMin && firstElfMin <= secondElfMax)
    ) {
      // Increment the counter if an overlap was found
      numPairs++;
    }
  }

  // Return the number of pairs
  return numPairs;
};
