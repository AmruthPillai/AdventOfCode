import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 3: Toboggan Trajectory", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(7);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(191);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(336);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1478615040);
  });
});
