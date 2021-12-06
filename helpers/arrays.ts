// Get an array of size N, useful for looping over numbers
export const range = <T>(size: number, fill: T = null): Array<T> =>
  new Array<T>(size).fill(fill);

// Calculate sum of numbers in an array
export const sum = (array: number[]): number =>
  array.reduce((acc, item) => item + acc, 0);

// Get map of items and the number of times they repeat
export const countBy = (array: any[]): Record<any, number> =>
  array.reduce((acc, item) => ({ ...acc, [item]: acc[item] + 1 || 1 }), {});
