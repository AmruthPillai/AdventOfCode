import { URL } from "url";
import { readFile } from "fs/promises";

// Helper function to get a set of item counts
const countBy = (arr) => {
  const countMap = {};

  for (const item of arr) {
    countMap[item] = countMap[item] ? countMap[item] + 1 : 1;
  }

  return countMap;
};

// Use recursion to get the reduced byte by MSB
const reduceByMSB = (matrix, iteration, byMostRecurring) => {
  if (matrix.length <= 1) {
    return matrix[0].join("");
  }

  const msbArr = matrix.map((a) => a[iteration]);
  const msbCountMap = countBy(msbArr);
  const msb = byMostRecurring
    ? msbCountMap[0] > msbCountMap[1]
      ? "0"
      : "1"
    : msbCountMap[0] > msbCountMap[1]
    ? "1"
    : "0";
  const newMsbArr = matrix.filter((a) => a[iteration] === msb);

  return reduceByMSB(newMsbArr, iteration + 1, byMostRecurring);
};

const main = async () => {
  // Get input data from raw text file
  const inputData = await readFile(
    new URL("input.txt", import.meta.url),
    "utf-8"
  );

  // Split the input by lines, calculate the length of bytes
  const input = inputData.split("\n");
  const byteLength = input[0].length;
  const inputMatrix = [];

  // Create the inputMatrix
  for (const line of input) {
    inputMatrix.push(line.split(""));
  }

  // Creating inputSet to Count Most/Least Recurring Bits
  const inputSet = {};
  for (let i = 0; i < byteLength; i++) {
    inputSet[i] = countBy(inputMatrix.map((a) => a[i]));
  }

  // Generating inputMax and inputMin arrays
  const inputMax = [];
  const inputMin = [];
  for (let i = 0; i < byteLength; i++) {
    inputMax.push(inputSet[i][0] > inputSet[i][1] ? 0 : 1);
    inputMin.push(inputSet[i][0] < inputSet[i][1] ? 0 : 1);
  }

  // Converting bytes to decimal numbers, to get gamma rate and epsilon rate
  const gammaRate = parseInt(inputMax.join(""), 2);
  const epsilonRate = parseInt(inputMin.join(""), 2);

  // Print Result to Console
  console.log("Result (Part One):", {
    gammaRate,
    epsilonRate,
    "Gamma Rate x Epsilon Rate": gammaRate * epsilonRate,
  });

  // Calculate the o2 and co2 rating by converting binary to decimal
  const o2Rating = parseInt(reduceByMSB(inputMatrix, 0, true), 2);
  const co2Rating = parseInt(reduceByMSB(inputMatrix, 0, false), 2);

  // Print Result to Console
  console.log("Result (Part Two):", {
    o2Rating,
    co2Rating,
    "O2 Rating x CO2 Rating": o2Rating * co2Rating,
  });
};

main();
