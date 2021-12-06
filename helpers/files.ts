import { readFileSync } from "fs";

/**
 * Helper function to get contents of a file
 *
 * @param  {string} filepath
 * @returns {string}
 */
export const readFile = (filepath: string): string =>
  readFileSync(filepath, "utf-8");
