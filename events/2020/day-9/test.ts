import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2020 / Day 9: Encoding Error", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(127);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(2089807806);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(62);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(245848639);
  });
});
