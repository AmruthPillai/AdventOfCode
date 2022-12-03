import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2022 / Day 3: Rucksack Reorganization", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(157);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(7701);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(70);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(2644);
  });
});
