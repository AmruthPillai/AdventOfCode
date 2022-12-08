import { join } from "path";
import { readFile } from "@helpers/files";

import { partOne } from "./index";

describe("AoC 2020 / Day 7: Handy Haversacks", () => {
  const input = readFile(join(__dirname, "input.txt"));
  const sample = readFile(join(__dirname, "sample.txt"));

  test("Part One (Sample)", () => {
    expect(partOne(sample)).toEqual(4);
  });

  test("Part One", () => {
    expect(partOne(input)).toEqual(172);
  });
});
