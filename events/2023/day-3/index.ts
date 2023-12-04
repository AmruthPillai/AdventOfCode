import { sum } from "@helpers/arrays";

/**
 * Represents a number match.
 */
type NumberEntry = {
  /** Index of the line the number was found on */
  line: number;
  /** Index of the first digit within the line */
  start: number;
  /** Index of the last digit within the line */
  end: number;
  /** Actual number */
  number: number;
};

/**
 * Represents a symbol match.
 */
type SymbolEntry = {
  /** Index of the line the symbol was found on */
  line: number;
  /** Index of the symbol within the line */
  index: number;
};

/**
 * Checks whether or not a symbol is nearby a number.
 * This is true for the following fields:
 *
 * ┌───┬───┬───┬───┬───┐
 * │ x │ x │ x │ x │ x │
 * ├───┼───┼───┼───┼───┤
 * │ x │ 1 │ 2 │ 3 │ x │
 * ├───┼───┼───┼───┼───┤
 * │ x │ x │ x │ x │ x │
 * └───┴───┴───┴───┴───┘
 *
 * This means that the symbol has to be in
 * - either the same line or an adjacent line, and
 * - between (start - 1) and (end + 1).
 *
 * @param number - number to check
 * @param symbol - symbol to check
 * @returns whether or not the symbol is adjacent to the number
 */
const isNearby = (number: NumberEntry, symbol: SymbolEntry) =>
  symbol.line <= number.line + 1 &&
  symbol.line >= number.line - 1 &&
  symbol.index >= number.start - 1 &&
  symbol.index <= number.end + 1;

const parseInput = (input: string) => {
  const lines = input.split("\n");

  const numbers: NumberEntry[] = [];
  const symbols: SymbolEntry[] = [];
  const gears: SymbolEntry[] = [];

  for (const [i, line] of lines.entries()) {
    // Extract the positions of all symbols (i.e. characters that are not digits and not the dot)
    Array.from(line.matchAll(/[^0-9|.]/g)).forEach((match) =>
      symbols.push({
        line: i,
        index: match.index!,
      }),
    );

    // Extract the positions (start and end) and values of all numbers
    Array.from(line.matchAll(/[0-9]+/g)).forEach((match) =>
      numbers.push({
        line: i,
        start: match.index!,
        end: match.index! + match[0].length - 1,
        number: parseInt(match[0], 10),
      }),
    );

    Array.from(line.matchAll(/\*/g)).forEach((match) =>
      gears.push({
        line: i,
        index: match.index!,
      }),
    );
  }

  return {
    numbers,
    symbols,
    gears,
  };
};

export const partOne = (input: string): number => {
  const { numbers, symbols } = parseInput(input);

  const validNumbers = numbers.filter((number) =>
    symbols.some((symbol) => isNearby(number, symbol)),
  );

  return sum(validNumbers.map(({ number }) => number));
};

export const partTwo = (input: string): number => {
  const { numbers, gears } = parseInput(input);

  const validGears = gears
    .map((gear) => {
      const matchingNumbers = numbers.filter((number) => isNearby(number, gear));
      return {
        isValid: matchingNumbers.length === 2,
        // the gear ratio is the product of the matching numbers
        gearRatio: matchingNumbers.reduce(
          (acc, number) => (acc === 0 ? number.number : acc * number.number),
          0,
        ),
      };
    })
    .filter((gear) => gear.isValid);

  return sum(validGears.map(({ gearRatio }) => gearRatio));
};
