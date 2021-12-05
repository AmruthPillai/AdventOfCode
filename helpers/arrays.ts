// Calculate sum of numbers in an array
export const calculateSum = (array: number[]): number =>
  array.reduce((acc, num) => num + acc, 0);

// Get map of items and the number of times they repeat
export const countBy = (array: any[]): Record<any, number> =>
  array.reduce((acc, item) => ({ ...acc, [item]: acc[item] + 1 || 1 }), {});
