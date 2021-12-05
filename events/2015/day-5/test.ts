import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from ".";

describe("AoC 2015 / Day 5: Doesn't He Have Intern-Elves For This?", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(236);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(51);
  });
});
