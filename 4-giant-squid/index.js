import { URL } from "url";
import { readFile } from "fs/promises";

const checkForWinner = (matrix) => {
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

const checkMatrixEquality = (matrix1, matrix2) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const removeMatrix = (matrixToRemove, matrices) => {
  for (let i = 0; i < matrices.length; i++) {
    if (checkMatrixEquality(matrices[i], matrixToRemove)) {
      matrices.splice(i, 1);
    }
  }
};

// Flatten the matrix, filter non-null numbers and get the sum of numbers in the array
const calcMatrixSum = (matrix) => {
  return matrix
    .flat()
    .filter((x) => x != null)
    .reduce((item, acc) => (acc += item), 0);
};

const main = async () => {
  // Get input data from raw text file
  const inputData = await readFile(
    new URL("input.txt", import.meta.url),
    "utf-8"
  );

  // Initialize Variables
  const inputLines = inputData.split("\n").filter(Boolean);
  const drawNumbers = inputLines[0].split(",").map(Number);
  let matrices = [];

  // Process Input to Extract Matrices
  for (let i = 1; i < inputLines.length; i += 5) {
    const outerMatrix = inputLines.slice(i, i + 5);
    const matrix = outerMatrix.map((x) =>
      x.split(" ").filter(Boolean).map(Number)
    );
    matrices.push(matrix);
  }

  const partOne = (matrices) => {
    // Game Loop, to run through drawn numbers and matrices
    for (let draw of drawNumbers) {
      for (let matrix of matrices) {
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
          const matrixSum = calcMatrixSum(matrix);

          // Print Result to Console
          console.log("Result (Part One):", {
            draw,
            matrixSum,
            "Draw x Matrix Sum": draw * matrixSum,
          });

          // Exit the game loop
          return;
        }
      }
    }
  };

  partOne(JSON.parse(JSON.stringify(matrices)));

  const partTwo = (matrices) => {
    // Game Loop, to run through drawn numbers and matrices
    for (let draw of drawNumbers) {
      for (let matrix of matrices) {
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
      for (let matrix of matrices) {
        if (checkForWinner(matrix)) {
          removeMatrix(matrix, matrices);

          // When there are no more matrices left, declare the last winner
          if (matrices.length === 0) {
            // If a winner is found, get the sum of all non-null numbers on the board
            const matrixSum = calcMatrixSum(matrix);

            // Print Result to Console
            console.log("Result (Part Two):", {
              draw,
              matrixSum,
              "Draw x Matrix Sum": draw * matrixSum,
            });

            // Exit the game loop
            return;
          }
        }
      }
    }
  };

  partTwo(JSON.parse(JSON.stringify(matrices)));
};

main();
