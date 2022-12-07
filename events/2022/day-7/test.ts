import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2022 / Day 7: No Space Left On Device", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(95437);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(1077191);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(24933642);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(5649896);
  });
});
