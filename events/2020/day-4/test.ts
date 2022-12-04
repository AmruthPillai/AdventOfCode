import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 4: Passport Processing", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(2);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(242);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(2);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(186);
  });
});
