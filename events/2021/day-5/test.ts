import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day 5: Hydrothermal Venture", () => {
  const sample = readFile(join(__dirname, "sample.txt"));
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(5);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(6564);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(12);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(19172);
  });
});
