import { Matrix } from "./matrix";

/**
 * Helper function to return an array with a sequence of numbers
 * similar to Python's range function
 *
 * @param  {number} start
 * @param  {number} stop
 * @param  {number} step = 1
 * @returns {number[]}
 */
export const range = (start: number, stop: number, step: number = 1): number[] =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

/**
 * Helper function to return sum of all numbers in an array
 *
 * @param  {number[]} array
 * @returns {number}
 */
export const sum = (array: number[]): number => array.reduce((acc, val) => acc + val, 0);

/**
 * Helper function to return the product of all numbers in an array
 *
 * @param  {number[]} array
 * @returns {number}
 */
export const product = (array: number[]): number => array.reduce((acc, val) => acc * val, 1);

/**
 * Helper function to count the number of repeated items in an array
 *
 * @param  {T[]} array
 * @returns {Record<T, number>}
 */
export const countBy = (array: any[]): Record<any, number> =>
  array.reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});

/**
 * Helper function to get the intersection of items between multiple arrays
 *
 * @param  {T[][]} array
 * @returns {T[]}
 */
export const intersection = <T>(array: T[][]): T[] =>
  array.reduce((a, b) => a.filter((c) => b.includes(c)));

/**
 * Helper function to generate permutations given an array
 *
 * @param  {T[]} array
 * @returns {Matrix<T>}
 */
export const permutator = <T>(array: T[]): Matrix<T> => {
  const result: Matrix<T> = [];

  const permute = (arr: T[], memo: T[] = []) => {
    if (arr.length === 0) {
      result.push(memo);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), memo.concat(next));
      }
    }
  };

  permute(array);

  return result;
};
