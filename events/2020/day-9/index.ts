import { sum } from "@helpers/arrays";

const checkSumMatch = (array: number[], number: number): number => {
  for (let j = 0; j < array.length - 1; j++) {
    for (let k = j + 1; k < array.length; k++) {
      const result = array[j] + array[k];

      if (result === number) return result;
    }
  }

  // This statement is never reached, unless a match is never found (unlikely)
  return -1;
};

export const partOne = (input: string): number => {
  // Parse the input to get the preamble length, and the individual numbers
  const numbers = input.split("\n").map(Number);
  const preambleSize = numbers.splice(0, 1)[0];

  for (let i = preambleSize; i < numbers.length; i++) {
    const preamble = numbers.slice(i - preambleSize, i);
    const number = numbers[i];

    const match = checkSumMatch(preamble, number);

    if (match === -1) {
      return number;
    }
  }

  // This statement is never reached, unless all of the numbers are perfectly in order
  return 0;
};

export const partTwo = (input: string): number => {
  // Parse the input to get the individual numbers
  const numbers = input.split("\n").map(Number).slice(1);

  // Re-run the solution from Part One to get the invalid number
  const invalidNumber = partOne(input);

  // Go through each number in the array
  for (let i = 0; i < numbers.length - 1; i++) {
    // Keep track of an array to know which numbers to sum
    const tempArr: number[] = [numbers[i]];

    // Add each number individually, and check the sum
    for (let j = i + 1; j < numbers.length; j++) {
      tempArr.push(numbers[j]);

      const tempSum = sum(tempArr);

      // If a match is found, then sort the array to get the min and max numbers
      // Add the two numbers and return the sum as the answer
      if (tempSum === invalidNumber) {
        tempArr.sort((a, b) => a - b);

        return tempArr[0] + tempArr[tempArr.length - 1];
      }

      // If the sum is above the invalid number, break the inner loop and increment `i`
      if (tempSum > invalidNumber) {
        break;
      }
    }
  }

  // This statement is never reached, unless all of the numbers are perfectly in order
  return 0;
};
