import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 9: Smoke Basin", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(15);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(500);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(1134);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(970200);
  });
});
