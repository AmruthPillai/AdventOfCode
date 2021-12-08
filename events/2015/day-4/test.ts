import { readFile } from "@helpers/files";
import { join } from "path";

import { partOne, partTwo } from "./index";

describe("AoC 2015 / Day 4: The Ideal Stocking Stuffer", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(346386);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(9958218);
  });
});
