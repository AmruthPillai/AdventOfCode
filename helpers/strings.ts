/**
 * Helper function to check if a string is uppercase
 * Returns true if the string is uppercase, false otherwise
 *
 * @param  {string} string
 * @returns {boolean}
 */
export const isUpperCase = (string: string): boolean => /^[A-Z]*$/.test(string);

/**
 * Helper function to get the common character between any number of strings
 *
 * @param  {string[]} strings
 * @returns {string}
 */
export const getCommonCharacter = (...strings: string[]): string =>
  strings
    .map((string) => string.split(""))
    .reduce((acc, char) => acc.filter((x) => char.includes(x)))
    .at(0);

export const isUniqueString = (string: string): boolean => {
  const sortedString = string.split("").sort();

  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] !== sortedString[i + 1]) {
      // eslint-disable-next-line no-continue
      continue;
    } else {
      return false;
    }
  }

  return true;
};
