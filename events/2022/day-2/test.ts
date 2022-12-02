import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2022 / Day 2: Rock Paper Scissors", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(15);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(12740);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(12);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(11980);
  });
});
