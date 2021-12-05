const isNiceString = (string: string): boolean => {
  const numOfVowels = string.match(/[aeiou]/gi)?.length || 0;
  const numOfDoubleLetters = string.match(/([a-z])\1+/gi)?.length || 0;
  const forbiddenPairs = ["ab", "cd", "pq", "xy"];
  const hasForbiddenPair = forbiddenPairs.some((pair) => string.includes(pair));

  return numOfVowels >= 3 && numOfDoubleLetters > 0 && !hasForbiddenPair;
};

const isBetterString = (string: string): boolean => {
  const hasLetterPair = string.match(/\S*(\S\S)\S*\1\S*/gi)?.length > 0;
  const hasWedgedLetter = string.match(/(.).\1/gi)?.length > 0;

  return hasLetterPair && hasWedgedLetter;
};

export const partOne = (input: string): number => input.split('\n').filter(isNiceString).length;

export const partTwo = (input: string): number => input.split('\n').filter(isBetterString).length;

