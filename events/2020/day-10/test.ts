import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 10: Adapter Array", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(220);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(2346);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(19208);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(6044831973376);
  });
});
