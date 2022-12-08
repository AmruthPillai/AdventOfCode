import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 8: Handheld Halting", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(5);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(1087);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(8);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(780);
  });
});
