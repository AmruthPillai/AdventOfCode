import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 6: Lanternfish", () => {
  const sample = readFile(join(__dirname, "sample.txt"));
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(5934);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(388419);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(26984457539);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1740449478328);
  });
});
