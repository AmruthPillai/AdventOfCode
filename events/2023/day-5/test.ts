import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2023 / Day 5: If You Give A Seed A Fertilizer", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(35);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(178159714);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(46);
  });
});
