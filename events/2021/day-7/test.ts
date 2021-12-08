import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne, partTwo } from "./index";

describe("AoC 2021 / Day 7: The Treachery of Whales", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(37);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(344735);
  });

  test("Part Two (Sample)", () => {
    expect(partTwo(sample)).toEqual(168);
  });

  test("Part Two", () => {
    expect(partTwo(input)).toEqual(96798233);
  });
});
