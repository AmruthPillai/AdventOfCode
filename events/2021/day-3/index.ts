import { countBy } from "@helpers/arrays";
import { Matrix } from "@helpers/matrix";

export const partOne = (input: string): number => {
  // Processing input
  const inputLines = input.split("\n");

  // Create the matrix
  const matrix: Matrix<number> = inputLines.map((line) => line.split("").map(Number));

  // Initialize Variables
  let gammaRate: string | number = "";
  let epsilonRate: string | number = "";

  // Loop through each column
  for (let i = 0; i < matrix[0].length; i++) {
    // Return an array consisting of all the cells in a column
    const bitArray = matrix.map((rows) => rows[i]);
    // Get the count of 0s and 1s in the array
    const bitCount = countBy(bitArray) as Record<number, number>;

    // Append to the binary string depending on the occurance
    if (bitCount[0] > bitCount[1]) {
      gammaRate += "0";
      epsilonRate += "1";
    } else {
      gammaRate += "1";
      epsilonRate += "0";
    }
  }

  // Convert binary string to decimal using parseInt(num, 2)
  gammaRate = parseInt(gammaRate, 2);
  epsilonRate = parseInt(epsilonRate, 2);

  return gammaRate * epsilonRate;
};

// Use recursion to get the reduced matrix by most/least common bit
const reduceByBit = (matrix: Matrix<number>, column: number = 0, mostCommon: boolean = true) => {
  // Exit Criteria, if there is only one row in the matrix
  if (matrix.length === 1) {
    return matrix[0].join("");
  }

  // Get single column in a matrix
  const bitArray = matrix.map((rows) => rows[column]);
  // Get count of bits in the array using countBy
  const bitCount = countBy(bitArray) as Record<number, number>;

  // Get the most common bit depending on the count value
  const mostCommonBit = (() => (bitCount[0] > bitCount[1] ? 0 : 1))();

  // Filter the matrix by most/least common bit, depending on the mostCommon flag
  const filteredMatrix = matrix.filter((rows) =>
    mostCommon ? rows[column] === mostCommonBit : rows[column] !== mostCommonBit
  );

  // Call the function again with modified parameters
  return reduceByBit(filteredMatrix, column + 1, mostCommon);
};

export const partTwo = (input: string): number => {
  // Processing input
  const inputLines = input.split("\n");

  // Create the matrix
  const matrix: Matrix<number> = inputLines.map((line) => line.split("").map(Number));

  // Use the recursion function to get both values
  // Convert binary string to decimal using parseInt(num, 2)
  const o2Rating = parseInt(reduceByBit(matrix, 0, true), 2);
  const co2Rating = parseInt(reduceByBit(matrix, 0, false), 2);

  return o2Rating * co2Rating;
};
