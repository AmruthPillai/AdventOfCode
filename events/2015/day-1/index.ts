export const partOne = (input: string): number => {
  // Processing Input
  const instructions = input.split("");

  // Initialize Variables
  let currentFloor = 0;

  // Loop through instructions and perform arithmetic
  instructions.forEach((instruction) =>
    instruction === "(" ? (currentFloor += 1) : (currentFloor -= 1)
  );

  return currentFloor;
};

export const partTwo = (input: string): number => {
  // Processing Input
  const instructions = input.split("");

  // Initialize Variables
  let position = 0;
  let currentFloor = 0;

  // Loop through instructions and perform arithmetic,
  // until currentFloor reaches -1 (basement)
  instructions.some((instruction, index) => {
    instruction === "(" ? (currentFloor += 1) : (currentFloor -= 1);

    if (currentFloor < 0) {
      position = index + 1;
      return true;
    }

    return false;
  });

  return position;
};
