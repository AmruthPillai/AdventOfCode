/**
 * Helper function to calculate the sum of numbers from m to n
 *
 * @param  {number} to
 * @param  {number = 1} from
 * @returns {number}
 */
export const rangeSum = (to: number, from: number = 1): number =>
  ((from + to) / 2) * (to - from + 1);
