import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2023 / Day 03: Gear Ratios", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(4361);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(531932);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(467835);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(73646890);
  });
});
