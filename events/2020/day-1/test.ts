import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 1: Report Repair", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(514579);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(545379);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(241861950);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(257778836);
  });
});
