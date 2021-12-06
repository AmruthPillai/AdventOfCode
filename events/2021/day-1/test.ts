import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day 1: Sonar Sweep", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(7);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(1451);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(5);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1395);
  });
});
