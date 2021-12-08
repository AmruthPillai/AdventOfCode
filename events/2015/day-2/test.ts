import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from "./index";

describe("AoC 2015 / Day 2: I Was Told There Would Be No Math", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(1588178);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(3783758);
  });
});
