import { URL } from "url";
import { readFile } from "fs/promises";

// Helper Function to Generate a Matrix
const generateMatrix = (rows, columns, fill = 0) => {
  const matrix = [];

  for (let i = 0; i <= rows; i++) {
    matrix[i] = [];
    for (let j = 0; j <= columns; j++) {
      matrix[i][j] = fill;
    }
  }

  return matrix;
};

// Helper Function to Get Intermediate Points given a Line Segment
const getPointsFromLineSegment = ({ x1, y1, x2, y2 }) => {
  let result = [
    [x1, y1],
    [x2, y2],
  ];

  if (x1 === x2) {
    if (y1 < y2) {
      for (let i = y1 + 1; i < y2; i++) {
        result = [...result, [x1, i]];
      }
    } else {
      for (let i = y2 + 1; i < y1; i++) {
        result = [...result, [x1, i]];
      }
    }
  } else if (y1 === y2) {
    if (x1 < x2) {
      for (let i = x1 + 1; i < x2; i++) {
        result = [...result, [i, y1]];
      }
    } else {
      for (let i = x2 + 1; i < x1; i++) {
        result = [...result, [i, y1]];
      }
    }
  } else {
    const xV = [];
    const yV = [];

    if (x1 < x2) {
      for (let i = x1 + 1; i < x2; i++) {
        xV.push(i);
      }
    } else if (x1 > x2) {
      for (let i = x1 - 1; i > x2; i--) {
        xV.push(i);
      }
    }

    if (y1 < y2) {
      for (let i = y1 + 1; i < y2; i++) {
        yV.push(i);
      }
    } else if (y1 > y2) {
      for (let i = y1 - 1; i > y2; i--) {
        yV.push(i);
      }
    }

    const x = xV.map((num, index) => [num, yV[index]]);
    result = [...result, ...x];
  }

  return result;
};

// Helper Function to get Line Segments from Input
const getLineSegmentsFromInput = (inputLines, includeDiagonals = false) => {
  let matrixSize = 0;
  let lineSegments = inputLines
    // Return coordinates of the line segments
    .map((line) => {
      const [from, to] = line.split(" -> ");
      const [x1, y1] = from.split(",").map(Number);
      const [x2, y2] = to.split(",").map(Number);

      matrixSize = Math.max(matrixSize, x1, y1, x2, y2);

      return { x1, y1, x2, y2 };
    });

  if (includeDiagonals) {
    // Filter out line segments that are diagonals
    lineSegments = lineSegments.filter(({ x1, y1, x2, y2 }) => {
      if (x1 === x2 || y1 === y2) return true;
      return false;
    });
  }

  return [lineSegments, matrixSize];
};

const main = async () => {
  // Get input data from raw text file
  const inputData = await readFile(
    new URL("input.txt", import.meta.url),
    "utf-8"
  );

  // Split Input by Lines to get Line Pairs
  const inputLines = inputData.split("\n");

  let [lineSegments, matrixSize] = getLineSegmentsFromInput(inputLines, true);

  // Generate intermediate points given a line segment
  let pointsToBeMarked = [];
  for (let line of lineSegments) {
    pointsToBeMarked.push(...getPointsFromLineSegment(line));
  }

  // Construct a matrix of SxS filled with 0s
  let matrix = generateMatrix(matrixSize, matrixSize, 0);

  // Traverse through coordinates and increment matrix by paths that have been crossed
  for (let point of pointsToBeMarked) {
    const [i, j] = point;
    matrix[j][i] += 1;
  }

  // Traverse through the matrix and count the number of points that have
  // an overlap of greater than 2
  let overlapCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 1) {
        overlapCount++;
      }
    }
  }

  // Print Result to Console
  console.log("Result (Part One):", { overlapCount });

  // Reinitialize Variables
  overlapCount = 0;
  pointsToBeMarked = [];
  matrix = generateMatrix(matrixSize, matrixSize, 0);
  [lineSegments, matrixSize] = getLineSegmentsFromInput(inputLines, false);

  // Generate intermediate points given a line segment
  for (let line of lineSegments) {
    pointsToBeMarked.push(...getPointsFromLineSegment(line));
  }

  // Traverse through coordinates and increment matrix by paths that have been crossed
  for (let point of pointsToBeMarked) {
    const [i, j] = point;
    matrix[j][i] += 1;
  }

  // Traverse through the matrix and count the number of points that have
  // an overlap of greater than 2
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 1) {
        overlapCount++;
      }
    }
  }

  // Print Result to Console
  console.log("Result (Part Two):", { overlapCount });
};

main();
