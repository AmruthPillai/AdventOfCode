export const partOne = (input: string): number => {
  // Process text file to an array, parse each line as objects of {command, value}
  const instructions = input.split("\n").map((line) => {
    const [command, value] = line.split(" ");
    return { [command]: Number(value) };
  });

  // Initialize position and depth
  let position = 0;
  let depth = 0;

  // Loop through instructions and perform arithmetic operations based on the command
  instructions.forEach((instruction) => {
    if ("forward" in instruction) {
      position += instruction.forward;
    } else if ("down" in instruction) {
      depth += instruction.down;
    } else if ("up" in instruction) {
      depth -= instruction.up;
    }
  });

  return position * depth;
};

export const partTwo = (input: string): number => {
  // Process text file to an array, parse each line as objects of {command, value}
  const instructions = input.split("\n").map((line) => {
    const [command, value] = line.split(" ");
    return { [command]: Number(value) };
  });

  // Initialize position and depth
  let position = 0;
  let depth = 0;
  let aim = 0;

  // Loop through instructions, perform actions (may be multiple) based on the command
  instructions.forEach((instruction) => {
    if ("down" in instruction) {
      aim += instruction.down;
    } else if ("up" in instruction) {
      aim -= instruction.up;
    } else if ("forward" in instruction) {
      position += instruction.forward;
      depth += aim * instruction.forward;
    }
  });

  return position * depth;
};
