type Instruction = { move: number; from: number; to: number };

export const partOne = (input: string): string => {
  // Parse the input, split them into stacks and instructions
  const [rawStacks, rawInstructions] = input.split("\n\n");

  const stacks = rawStacks
    .split("\n")
    .map((line) => line.split("\n"))
    .map((row) => row[0].split(/\s{1,4}/));

  // Remove the row with numbers on it, since we don't need it anymore
  stacks.pop();

  const numColumns = stacks[stacks.length - 1].length;
  const stackMatrix = new Array<string[]>(numColumns).fill([]);

  for (let i = 0; i < stacks.length; i++) {
    for (let j = 0; j < numColumns; j++) {
      const cell = stacks[i][j];
      const match = cell.match(/\[(.*?)\]/);

      if (match !== null) {
        const crate = match[1];
        stackMatrix[j] = [crate, ...stackMatrix[j]];
      }
    }
  }

  // Parse the set of intructions into a JS object
  const instructions = rawInstructions
    .split("\n")
    .map((line) => line.split(" "))
    .reduce((acc, line) => {
      const move = Number(line[1]);
      const from = Number(line[3]);
      const to = Number(line[5]);

      const instruction: Instruction = { move, from, to };

      return [...acc, instruction];
    }, [] as Instruction[]);

  // Loop through each instruction and move the crates accordingly
  for (const instruction of instructions) {
    const { move, from, to } = instruction;
    const movedCrates = stackMatrix[from - 1].splice(-move, move);

    stackMatrix[to - 1].push(...movedCrates.reverse());
  }

  // Set an array to store the top-most item of each stack
  const result = [];

  for (const stack of stackMatrix) {
    result.push(stack[stack.length - 1]);
  }

  return result.join("");
};

export const partTwo = (input: string): string => {
  // Parse the input, split them into stacks and instructions
  const [rawStacks, rawInstructions] = input.split("\n\n");

  const stacks = rawStacks
    .split("\n")
    .map((line) => line.split("\n"))
    .map((row) => row[0].split(/\s{1,4}/));

  // Remove the row with numbers on it, since we don't need it anymore
  stacks.pop();

  const numColumns = stacks[stacks.length - 1].length;
  const stackMatrix = new Array<string[]>(numColumns).fill([]);

  for (let i = 0; i < stacks.length; i++) {
    for (let j = 0; j < numColumns; j++) {
      const cell = stacks[i][j];
      const match = cell.match(/\[(.*?)\]/);

      if (match !== null) {
        const crate = match[1];
        stackMatrix[j] = [crate, ...stackMatrix[j]];
      }
    }
  }

  // Parse the set of intructions into a JS object
  const instructions = rawInstructions
    .split("\n")
    .map((line) => line.split(" "))
    .reduce((acc, line) => {
      const move = Number(line[1]);
      const from = Number(line[3]);
      const to = Number(line[5]);

      const instruction: Instruction = { move, from, to };

      return [...acc, instruction];
    }, [] as Instruction[]);

  // Loop through each instruction and move the crates accordingly
  for (const instruction of instructions) {
    const { move, from, to } = instruction;
    const movedCrates = stackMatrix[from - 1].splice(-move, move);

    stackMatrix[to - 1].push(...movedCrates);
  }

  // Set an array to store the top-most item of each stack
  const result = [];

  for (const stack of stackMatrix) {
    result.push(stack[stack.length - 1]);
  }

  return result.join("");
};
