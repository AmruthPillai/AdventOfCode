export const partOne = (input: string): number =>
  input.split("\n").reduce((total, line) => total + (line.length - eval(line).length), 0);

export const partTwo = (input: string): number =>
  input.split("\n").reduce((total, line) => total + JSON.stringify(line).length - line.length, 0);
