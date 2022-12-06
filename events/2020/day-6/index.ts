import { intersection } from "@helpers/arrays";
import { getUniqueString } from "@helpers/strings";

export const partOne = (input: string): number => {
  const groups = input.split("\n\n").map((line) => line.replace(/\s+/g, ""));

  return groups.reduce((acc, str) => (acc += getUniqueString(str).length), 0);
};

export const partTwo = (input: string): number => {
  const groups = input.split("\n\n").map((line) => line.split("\n"));
  let count: number = 0;

  for (const group of groups) {
    if (group.length === 1) {
      count += group[0].length;
      continue;
    }

    const lines = group.map((line) => line.split(""));
    count += intersection(lines).length;
  }

  return count;
};
