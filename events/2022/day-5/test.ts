import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2022 / Day 5: Supply Stacks", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual("CMZ");
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual("GRTSWNJHH");
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual("MCD");
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual("QLFQDBBHM");
  });
});
