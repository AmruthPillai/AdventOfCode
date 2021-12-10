const directionMap: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

const parseDirections = (directions: string[]): string => {
  let illegalChar = "";
  const stack: string[] = [];

  directions.every((char) => {
    if (char === "(" || char === "[" || char === "{" || char === "<") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}" || char === ">") {
      const poppedChar = stack.pop();

      if (directionMap[poppedChar] !== char) {
        illegalChar = char;

        // console.log(
        //   `Expected ${directionMap[poppedChar]}, but found ${char} instead`
        // );

        return false;
      }
    }
    return true;
  });

  return illegalChar as string;
};

const illegalCharWeight = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

export const partOne = (input: string): number =>
  input
    .split("\n")
    .map((x) => x.split(""))
    .map(parseDirections)
    .filter((x) => x)
    .reduce((acc, illegalChar) => (acc += illegalCharWeight[illegalChar]), 0);

const isValidDirection = (directions: string[]) => {
  const stack: string[] = [];

  return directions.every((char) => {
    if (char === "(" || char === "[" || char === "{" || char === "<") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}" || char === ">") {
      const poppedChar = stack.pop();

      if (directionMap[poppedChar] !== char) {
        return false;
      }
    }
    return true;
  });
};

const completeDirections = (directions: string[]) => {
  const stack: string[] = [];

  directions.forEach((char) => {
    if (char === "(" || char === "[" || char === "{" || char === "<") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}" || char === ">") {
      stack.pop();
    }
  });

  return stack.map((char) => directionMap[char]).reverse();
};

const completionCharWeight = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

export const partTwo = (input: string): number => {
  const weights: number[] = input
    .split("\n")
    .map((x) => x.split(""))
    .filter(isValidDirection)
    .map(completeDirections)
    .map((string) =>
      string.reduce((acc, val) => 5 * acc + completionCharWeight[val], 0)
    )
    .sort((a, b) => a - b);

  return weights[Math.floor((weights.length - 1) / 2)];
};
