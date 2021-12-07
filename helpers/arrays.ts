/**
 * Helper function to return an array of size N
 * Can be used to loop over numbers, generate placholder arrays, etc.
 *
 * @param  {number} size
 * @param  {T = null} fill
 * @returns {Array<T>}
 */
export const range = <T = any>(size: number, fill: T = null): Array<T> =>
  new Array<T>(size).fill(fill);

/**
 * Helper function to return sum of all numbers in an array
 *
 * @param  {number[]} array
 * @returns {number}
 */
export const sum = (array: number[]): number =>
  array.reduce((acc, val) => acc + val, 0);

/**
 * Helper function to count the number of repeated items in an array
 *
 * @param  {T[]} array
 * @returns {Record<T, number>}
 */
export const countBy = (array: any[]): Record<any, number> =>
  array.reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
