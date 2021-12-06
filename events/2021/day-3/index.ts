import { countBy } from "@helpers/arrays";
import { Matrix } from "@helpers/matrix";

// Use recursion to get the reduced byte by most significant bit
const reduceByMostSignifcantBit = (
  matrix: Matrix<string>,
  iteration: number,
  byMostRecurring: boolean = true
): string => {
  if (matrix.length <= 1) {
    return matrix[0].join("");
  }

  const bitArray = matrix.map((a) => a[iteration]);
  const bitCountMap = countBy(bitArray) as Record<string, number>;
  const mostSignificantBit = (() => {
    if (byMostRecurring) {
      return bitCountMap["0"] > bitCountMap["1"] ? "0" : "1";
    }

    return bitCountMap["0"] > bitCountMap["1"] ? "1" : "0";
  })();
  const newBitArray = matrix.filter((a) => a[iteration] === mostSignificantBit);

  return reduceByMostSignifcantBit(newBitArray, iteration + 1, byMostRecurring);
};

export const partOne = (input: string): number => {
  // Split the input by lines, calculate the length of bytes
  const inputLines = input.split("\n");
  const byteLength = inputLines[0].length;
  const inputMatrix: Matrix<string> = [];

  // Create the inputMatrix
  inputLines.forEach((line) => inputMatrix.push(line.split("")));

  // Initialize Variables
  const inputMax: number[] = [];
  const inputMin: number[] = [];
  const inputSet: Record<number, Record<string, number>> = {};

  // Creating inputSet to Count Most/Least Recurring Bits
  for (let i = 0; i < byteLength; i++) {
    inputSet[i] = countBy(inputMatrix.map((a) => a[i]));
  }

  // Generating inputMax and inputMin arrays
  for (let i = 0; i < byteLength; i++) {
    inputMax.push(inputSet[i][0] > inputSet[i][1] ? 0 : 1);
    inputMin.push(inputSet[i][0] < inputSet[i][1] ? 0 : 1);
  }

  // Converting bytes to decimal numbers, to get gamma rate and epsilon rate
  const gammaRate = parseInt(inputMax.join(""), 2);
  const epsilonRate = parseInt(inputMin.join(""), 2);

  return gammaRate * epsilonRate;
};

export const partTwo = (input: string): number => {
  // Split the input by lines, calculate the length of bytes
  const inputLines = input.split("\n");
  const byteLength = inputLines[0].length;
  const inputMatrix: Matrix<string> = [];

  // Create the inputMatrix
  inputLines.forEach((line) => inputMatrix.push(line.split("")));

  // Initialize Variables
  const inputMax: number[] = [];
  const inputMin: number[] = [];
  const inputSet: Record<number, Record<string, number>> = {};

  // Creating inputSet to Count Most/Least Recurring Bits
  for (let i = 0; i < byteLength; i++) {
    inputSet[i] = countBy(inputMatrix.map((a) => a[i]));
  }

  // Generating inputMax and inputMin arrays
  for (let i = 0; i < byteLength; i++) {
    inputMax.push(inputSet[i][0] > inputSet[i][1] ? 0 : 1);
    inputMin.push(inputSet[i][0] < inputSet[i][1] ? 0 : 1);
  }

  const o2Rating = parseInt(reduceByMostSignifcantBit(inputMatrix, 0), 2);
  const co2Rating = parseInt(
    reduceByMostSignifcantBit(inputMatrix, 0, false),
    2
  );

  return o2Rating * co2Rating;
};
