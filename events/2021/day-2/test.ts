import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day 2: Dive!", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(150);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(2147104);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(900);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(2044620088);
  });
});
