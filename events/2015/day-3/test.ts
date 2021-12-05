import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from ".";

describe("AoC 2015 / Day 3: Perfectly Spherical Houses in a Vacuum", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(2565);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(2639);
  });
});
