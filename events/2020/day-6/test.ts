import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 6: Custom Customs", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(11);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(6903);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(6);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(3493);
  });
});
