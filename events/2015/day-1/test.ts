import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from ".";

describe("AoC 2015 / Day 1: Not Quite Lisp", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(138);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(1771);
  });
});
