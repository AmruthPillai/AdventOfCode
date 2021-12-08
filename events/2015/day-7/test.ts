import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2015 / Day 7: Some Assembly Required", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(16076);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(2797);
  });
});
