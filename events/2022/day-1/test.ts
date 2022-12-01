import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from "./index";

describe("AoC 2022 / Day 1: Calorie Counting", () => {
  const sample = readFile(join(__dirname, "sample.txt"));
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(24000);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(68292);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(45000);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(203203);
  });
});
