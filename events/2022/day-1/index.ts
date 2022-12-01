import { sum } from "@helpers/arrays";

export const partOne = (input: string): number => {
  // Process text file to an array, parse each group of readings into a seperate array
  const readings = input.split("\n\n");

  // Parse each reading group into an array of numbers, then sum each array
  const calories = readings
    .map((reading) => reading.split("\n").map(Number))
    .map(sum);

  // Return the maximum number of calories in a single reading
  return Math.max(...calories);
};

export const partTwo = (input: string): number => {
  // Process text file to an array, parse each group of readings into a seperate array
  const readings = input.split("\n\n");

  // Parse each reading group into an array of numbers, then sum each array
  // Consecutively, sort them in descending order, and sum the first 3 numbers
  const calories = readings
    .map((reading) => reading.split("\n").map(Number))
    .map(sum)
    .sort((a, b) => b - a);

  return sum(calories.slice(0, 3));
};
