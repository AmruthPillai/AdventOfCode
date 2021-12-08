import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 8: Seven Segment Search", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(26);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(375);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(61229);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1019355);
  });
});
