const runCode = (instructions: string[][]) => {
  // Store a set of instruction lines that have been executed
  const executed = new Set();

  // Store state variables for pointer location, accumulator and success toggle
  let success: boolean = false;
  let accumulator: number = 0;
  let pointer: number = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (pointer > instructions.length - 1) {
      success = true;
      break;
    }

    const [operation, argument] = instructions[pointer];

    // If the line has already been executed, exit the loop
    if (executed.has(pointer)) {
      break;
    } else {
      // If not executed yet, add it to the set as it will be executed
      executed.add(pointer);
    }

    // Command: nop, perform no operation and move forward by 1
    if (operation === "nop") {
      pointer++;
    }

    // Command: acc, add the argument to accumulator and move forward by 1
    if (operation === "acc") {
      accumulator += Number(argument);
      pointer++;
    }

    // Command: jmp, move the execution pointer by value of argument
    if (operation === "jmp") {
      pointer += Number(argument);
    }
  }

  // Accumulator returns the last updated value of accumulator, pointer returns the last known index of the instruction,
  // and success is a boolean which determines if the program ran through till it's end
  return { accumulator, pointer, success };
};

export const partOne = (input: string): number => {
  // Parse the input to an array of instructions
  const instructions = input.split("\n").map((line) => line.split(" "));

  // Run the set of instructions as-is
  const { accumulator } = runCode(instructions);

  // Return the last updated value of accumulator
  return accumulator;
};

export const partTwo = (input: string): number => {
  // Parse the input to an array of instructions
  const instructions = input.split("\n").map((line) => line.split(" "));

  // Go through each line of instructions
  for (let index = 0; index < instructions.length; index++) {
    // Deep clone the set of instructions so the nested values are not carried over to the next iteration
    const modifiedInstructions = JSON.parse(JSON.stringify(instructions));
    const [operation] = modifiedInstructions[index];

    // If the operation is 'nop', change to 'jmp', else vice-versa
    // Skip over an iteration if the operation is anything else (acc)
    if (operation === "nop") {
      modifiedInstructions[index][0] = "jmp";
    } else if (operation === "jmp") {
      modifiedInstructions[index][0] = "nop";
    } else {
      continue;
    }

    // Run the code and check the success flag
    const { accumulator, success } = runCode(modifiedInstructions);

    // If successful, return the last successful run's accumulator value and break
    if (success) return accumulator;
  }

  // This is executed only if there is no way for a successful run
  return 0;
};
