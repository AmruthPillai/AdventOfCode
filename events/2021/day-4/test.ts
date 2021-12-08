import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 4: Giant Squid", () => {
  const sample = readFile(join(__dirname, "sample.txt"));
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(4512);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(14093);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(1924);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(17388);
  });
});
