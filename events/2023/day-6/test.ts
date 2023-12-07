import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2023 / Day 6: Wait For It", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(288);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(131376);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(71503);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(34123437);
  });
});
