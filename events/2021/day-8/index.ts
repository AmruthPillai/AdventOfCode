export const partOne = (input: string): number => {
  // Processing Input
  const entries = input
    .split("\n")
    .map((signal) => signal.split(" | ").map((output) => output.split(" ")));

  // Initialize Variables
  let counter = 0;

  // Loop through digits and check for entries with length 2, 4, 3 or 7
  // and increment the counter if it is found
  for (const [, digits] of entries) {
    counter += digits.filter(
      (output) =>
        output.length === 2 || // 1
        output.length === 4 || // 4
        output.length === 3 || // 7
        output.length === 7 // 8
    ).length;
  }

  return counter;
};

// The map corresponds to the sum of all digits in the seven-segment display
// as the key, and the corresponding digit as the value.
const segmentSumMap = {
  17: 1,
  25: 7,
  30: 4,
  34: 2,
  37: 5,
  39: 3,
  41: 6,
  42: 0,
  45: 9,
  49: 8,
};

export const partTwo = (input: string): number => {
  // Processing Input
  const entries = input
    .split("\n")
    .map((signal) => signal.split(" | ").map((output) => output.split(" ")));

  // Initialize Variables
  let sumOfDigits = 0;

  // Loop through entries, get the signal and output digits
  for (const [signals, digits] of entries) {
    const countMap = {};

    // Create a map of how often a specific character is repeated
    for (const signal of signals) {
      for (const char of signal) {
        countMap[char] = countMap[char] + 1 || 1;
      }
    }

    sumOfDigits += +digits
      .map(
        (digit) =>
          segmentSumMap[
            digit
              .split("")
              .map((char) => countMap[char])
              .reduce((acc, val) => acc + val, 0)
          ]
      )
      .join("");
  }

  return sumOfDigits;
};
