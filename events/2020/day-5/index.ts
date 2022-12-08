const calculateCellNumber = (
  string: string,
  index: number,
  min: number,
  max: number,
  length: number = Math.floor(max / 2)
) => {
  if (index === string.length - 1) {
    if (string[index] === "F" || string[index] === "L") {
      return min;
    }

    return max;
  }

  if (string[index] === "F" || string[index] === "L") {
    return calculateCellNumber(string, index + 1, min, min + length, Math.floor(length / 2));
  }

  return calculateCellNumber(string, index + 1, max - length, max, Math.floor(length / 2));
};

const calculateSeatID = (row: number, column: number): number => row * 8 + column;

const findMissingNumbers = (array: number[]): number[] => {
  const missingNumbers: number[] = [];
  const min = Math.min(...array);
  const max = Math.max(...array);

  for (let i = min; i <= max; i++) {
    if (!array.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};

export const partOne = (input: string): number => {
  // Parse the input into rows of boarding passes
  const boardingPassArr = input.split("\n");

  // An array to store the boarding pass ID numbers
  const boardingPassIDs: number[] = [];

  // Loop through each of the boarding passes
  for (const boardingPass of boardingPassArr) {
    // Get the first 7 characters (row hint)
    const rowString = boardingPass.substring(0, 7);
    // and the next 3 characters (column hint)
    const columnString = boardingPass.substring(7);

    // Calculate the Cell Number for both row and column
    const row = calculateCellNumber(rowString, 0, 0, 127);
    const column = calculateCellNumber(columnString, 0, 0, 7);

    const seatID = calculateSeatID(row, column);
    boardingPassIDs.push(seatID);
  }

  return Math.max(...boardingPassIDs);
};

export const partTwo = (input: string): number => {
  // Parse the input into rows of boarding passes
  const boardingPassArr = input.split("\n");

  // An array to store the boarding pass ID numbers
  const boardingPassIDs: number[] = [];

  // Loop through each of the boarding passes
  for (const boardingPass of boardingPassArr) {
    // Get the first 7 characters (row hint)
    const rowString = boardingPass.substring(0, 7);
    // and the next 3 characters (column hint)
    const columnString = boardingPass.substring(7);

    // Calculate the Cell Number for both row and column
    const row = calculateCellNumber(rowString, 0, 0, 127);
    const column = calculateCellNumber(columnString, 0, 0, 7);

    const seatID = calculateSeatID(row, column);
    boardingPassIDs.push(seatID);
  }

  const missingNumber = findMissingNumbers(boardingPassIDs).at(0);

  return missingNumber;
};
