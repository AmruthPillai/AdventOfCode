import {
  Matrix,
  calculateMatrixSum,
  checkMatrixEquality,
} from "@helpers/matrix";

const checkForWinner = (matrix: Matrix<number>) => {
  // Check Rows
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].every((x) => x === null)) {
      return true;
    }
  }

  // Check Columns
  for (let i = 0; i < matrix.length; i++) {
    if (matrix.map((x) => x[i]).every((x) => x === null)) {
      return true;
    }
  }

  return false;
};

const removeMatrix = (
  matrixToRemove: Matrix<number>,
  matrices: Array<Matrix<number>>
) => {
  for (let i = 0; i < matrices.length; i++) {
    if (checkMatrixEquality(matrices[i], matrixToRemove)) {
      matrices.splice(i, 1);
    }
  }
};

export const partOne = (input: string): number => {
  // Initialize Variables
  const inputLines = input.split("\n").filter(Boolean);
  const drawNumbers = inputLines[0].split(",").map(Number);
  const matrices: Array<Matrix<number>> = [];

  // Process Input to Extract Matrices
  for (let i = 1; i < inputLines.length; i += 5) {
    const outerMatrix = inputLines.slice(i, i + 5);
    const matrix = outerMatrix.map((x) =>
      x.split(" ").filter(Boolean).map(Number)
    );
    matrices.push(matrix);
  }

  // Game Loop, to run through drawn numbers and matrices
  for (const draw of drawNumbers) {
    for (const matrix of matrices) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          // If a number on the board is matched with the drawn number,
          // we then mark it as null to indicate it has been called
          if (matrix[i][j] === draw) {
            matrix[i][j] = null;
          }
        }
      }

      // Check for a winner after every draw
      if (checkForWinner(matrix)) {
        // If a winner is found, get the sum of all non-null numbers on the board
        const matrixSum = calculateMatrixSum(matrix);

        return draw * matrixSum;
      }
    }
  }
};

export const partTwo = (input: string): number => {
  // Initialize Variables
  const inputLines = input.split("\n").filter(Boolean);
  const drawNumbers = inputLines[0].split(",").map(Number);
  const matrices: Array<Matrix<number>> = [];

  // Process Input to Extract Matrices
  for (let i = 1; i < inputLines.length; i += 5) {
    const outerMatrix = inputLines.slice(i, i + 5);
    const matrix = outerMatrix.map((x) =>
      x.split(" ").filter(Boolean).map(Number)
    );
    matrices.push(matrix);
  }

  for (const draw of drawNumbers) {
    for (const matrix of matrices) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          // If a number on the board is matched with the drawn number,
          // we then mark it as null to indicate it has been called
          if (matrix[i][j] === draw) {
            matrix[i][j] = null;
          }
        }
      }
    }

    // Loop through all matrices again to check for a winner
    for (const matrix of matrices) {
      if (checkForWinner(matrix)) {
        removeMatrix(matrix, matrices);

        // When there are no more matrices left, declare the last winner
        if (matrices.length === 0) {
          // If a winner is found, get the sum of all non-null numbers on the board
          const matrixSum = calculateMatrixSum(matrix);

          return draw * matrixSum;
        }
      }
    }
  }
};
