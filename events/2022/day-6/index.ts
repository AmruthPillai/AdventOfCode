import { isUniqueString } from "@helpers/strings";

export const partOne = (input: string): number => {
  let index = 0;
  const numDistinct = 4;

  while (index < input.length - numDistinct - 1) {
    const segment = input.substring(index, index + numDistinct);
    if (isUniqueString(segment)) return index + numDistinct;
    index++;
  }

  return index;
};

export const partTwo = (input: string): number => {
  let index = 0;
  const numDistinct = 14;

  while (index < input.length - numDistinct - 1) {
    const segment = input.substring(index, index + numDistinct);
    if (isUniqueString(segment)) return index + numDistinct;
    index++;
  }

  return index;
};
