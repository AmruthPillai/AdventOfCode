import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day 3: Binary Diagnostic", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(198);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(2003336);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(230);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1877139);
  });
});
