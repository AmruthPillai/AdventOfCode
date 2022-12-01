export const partOne = (input: string): number => {
  // Parse each line from the input into a number
  const entries = input.split("\n").map(Number);

  // Loop through each entry in entries, to check if any two numbers add up to 2020
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      // If the two numbers add up to 2020, return their product
      if (entries[i] + entries[j] === 2020) {
        return entries[i] * entries[j];
      }
    }
  }

  return 0;
};

export const partTwo = (input: string): number => {
  // Parse each line from the input into a number
  const entries = input.split("\n").map(Number);

  // Loop through each entry in entries, to check if any three numbers add up to 2020
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      for (let k = j + 1; k < entries.length; k++) {
        // If the three numbers add up to 2020, return their product
        if (entries[i] + entries[j] + entries[k] === 2020) {
          return entries[i] * entries[j] * entries[k];
        }
      }
    }
  }

  return 0;
};
