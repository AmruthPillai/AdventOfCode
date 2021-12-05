import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day 2: Dive!", () => {
  const sample = readFile(join(__dirname, "sample.txt"));
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(150);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(1990000);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(900);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1975421260);
  });
});
