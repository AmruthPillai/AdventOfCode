import { generateMatrix, Matrix } from "@helpers/matrix";

interface LineSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

// Get Intermediate Points given a Line Segment
const getPointsFromLineSegment = ({ x1, y1, x2, y2 }: LineSegment): Matrix<number> => {
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

// Extract Line Segments from Input
const getLineSegments = (
  inputLines: string[],
  { includeDiagonals = false }
): [LineSegment[], number] => {
  let matrixSize: number = 0;
  let lineSegments: LineSegment[] = inputLines
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

const countLineOverlap = (lineSegments: LineSegment[], matrixSize: number): number => {
  // Generate intermediate points given a line segment
  const pointsToBeMarked = [];
  for (const line of lineSegments) {
    pointsToBeMarked.push(...getPointsFromLineSegment(line));
  }

  // Construct a matrix of SxS filled with 0s
  const matrix = generateMatrix(matrixSize, matrixSize, 0);

  // Traverse through coordinates and increment matrix by paths that have been crossed
  for (const point of pointsToBeMarked) {
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

  return overlapCount;
};

export const partOne = (input: string): number => {
  // Split Input by Lines to get Line Pairs
  const inputLines = input.split("\n");

  const [lineSegments, matrixSize] = getLineSegments(inputLines, {
    includeDiagonals: true,
  });

  return countLineOverlap(lineSegments, matrixSize);
};

export const partTwo = (input: string): number => {
  // Split Input by Lines to get Line Pairs
  const inputLines = input.split("\n");

  const [lineSegments, matrixSize] = getLineSegments(inputLines, {
    includeDiagonals: false,
  });

  return countLineOverlap(lineSegments, matrixSize);
};
