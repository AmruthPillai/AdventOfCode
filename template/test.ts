import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from ".";

describe("AoC 2021 / Day XX: <Challenge Title>", () => {
  const input = readFile(join(__dirname, "input.txt"));

  test("Part One", () => {
    expect(partOne(input)).toEqual(null);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(null);
  });
});
