import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2023 / Day 01: Trebuchet?!", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    const sample = readFile(join(__dirname, "sample-part1.txt"));
    expect(partOne(sample)).toEqual(142);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(54632);
  });

  test("Part Two (Sample)", () => {
    const sample = readFile(join(__dirname, "sample-part2.txt"));
    expect(partTwo(sample)).toEqual(281);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(54019);
  });
});
