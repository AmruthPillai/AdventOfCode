import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 6: Probably a Fire Hazard", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(569999);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(17836115);
  });
});
