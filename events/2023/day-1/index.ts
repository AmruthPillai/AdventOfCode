export const partOne = (input: string): number => {
  let result = 0;
  const lines = input.split("\n");

  for (const line of lines) {
    const firstNumber = line.match(/\d/)?.[0];
    const lastNumber = line.match(/\d/g)?.pop();
    const number = parseInt(`${firstNumber}${lastNumber}`, 10);

    result += number;
  }

  return result;
};

const numberMap: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

const findOverlappingNumbers = (str: string) => {
  const pattern = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/gi;

  let match: RegExpExecArray;
  const matches = [];

  // eslint-disable-next-line no-cond-assign
  while ((match = pattern.exec(str)) !== null) {
    if (pattern.lastIndex === match.index) pattern.lastIndex++;
    matches.push(match[1]);
  }

  return matches;
};

export const partTwo = (input: string): number => {
  let result = 0;
  const lines = input.split("\n");

  for (const line of lines) {
    const matches = findOverlappingNumbers(line);
    const firstNumber = matches[0];
    const lastNumber = matches.pop();

    const number = parseInt(`${numberMap[firstNumber]}${numberMap[lastNumber]}`, 10);

    result += number;
  }

  return result;
};
