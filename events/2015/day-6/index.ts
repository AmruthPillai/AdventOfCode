import { calculateMatrixSum, generateMatrix } from "@helpers/matrix";

interface Instruction {
  command: "turn on" | "turn off" | "toggle";
  from: number[];
  to: number[];
}

const processInstruction = (instruction: string): Instruction => {
  const words = instruction.split(" ");
  const command = (instruction.startsWith("turn") ? words.splice(0, 2) : words.splice(0, 1)).join(
    " "
  ) as "turn on" | "turn off" | "toggle";
  const from = words[0].split(",").map(Number);
  const to = words[2].split(",").map(Number);

  return {
    command,
    from,
    to,
  };
};

export const partOne = (input: string): number => {
  // Processing Input
  const instructions: Instruction[] = input.split("\n").map(processInstruction);

  // Initialize Variables
  const lightGrid = generateMatrix<number>(1000);

  // Start processing series of instructions and performing actions on the lightGrid matrix
  for (const { command, from, to } of instructions) {
    for (let i = from[0]; i <= to[0]; i++) {
      for (let j = from[1]; j <= to[1]; j++) {
        if (command === "turn on") {
          lightGrid[i][j] = 1;
        } else if (command === "turn off") {
          lightGrid[i][j] = 0;
        } else if (command === "toggle") {
          lightGrid[i][j] = lightGrid[i][j] ? 0 : 1;
        }
      }
    }
  }

  return calculateMatrixSum(lightGrid);
};

export const partTwo = (input: string): number => {
  // Processing Input
  const instructions: Instruction[] = input.split("\n").map(processInstruction);

  // Initialize Variables
  const lightGrid = generateMatrix<number>(1000);

  // Start processing series of instructions and performing actions on the lightGrid matrix
  for (const { command, from, to } of instructions) {
    for (let i = from[0]; i <= to[0]; i++) {
      for (let j = from[1]; j <= to[1]; j++) {
        if (command === "turn on") {
          lightGrid[i][j] += 1;
        } else if (command === "turn off") {
          lightGrid[i][j] = lightGrid[i][j] > 0 ? lightGrid[i][j] - 1 : 0;
        } else if (command === "toggle") {
          lightGrid[i][j] += 2;
        }
      }
    }
  }

  return calculateMatrixSum(lightGrid);
};
