import { product } from "@helpers/arrays";
import { Matrix } from "@helpers/matrix";

export const partOne = (input: string): number => {
  // Parse the input into a matrix of numbers
  const forestGrid: Matrix<number> = input.split("\n").map((line) => line.split("").map((num) => parseInt(num, 10)));
  const gridSize = forestGrid.length;

  // Keep a count of the number of trees that are visible
  let count: number = 0;

  // Loop through the matrix
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // Automatically count in all the trees on the edge of the grid
      if (i === 0 || j === 0 || i === gridSize - 1 || j === gridSize - 1) {
        count++;
        continue;
      }

      const treeHeight = forestGrid[i][j];
      const surroundingTrees = [];

      // Check to the left of the tree
      const tallestLeftTree = Math.max(...forestGrid[i].slice(0, j));
      surroundingTrees.push(tallestLeftTree);

      // Check to the right of the tree
      const tallestRightTree = Math.max(...forestGrid[i].slice(j + 1));
      surroundingTrees.push(tallestRightTree);

      // Check to the top of the tree
      const tallestTopTree = Math.max(...forestGrid.map((x) => x[j]).slice(0, i));
      surroundingTrees.push(tallestTopTree);

      // Check to the bottom of the tree
      const tallestBottomTree = Math.max(...forestGrid.map((x) => x[j]).slice(i + 1));
      surroundingTrees.push(tallestBottomTree);

      if (surroundingTrees.some((tree) => tree < treeHeight)) {
        count++;
      }
    }
  }

  return count;
};

const calculateScenicScore = (grid: Matrix<number>, rowIndex: number, colIndex: number) => {
  const visibilityArr: number[] = [];
  const treeHeight = grid[rowIndex][colIndex];

  const leftTrees = grid[rowIndex].slice(0, colIndex);
  const rightTrees = grid[rowIndex].slice(colIndex + 1);
  const topTrees = grid.map((x) => x[colIndex]).slice(0, rowIndex);
  const bottomTrees = grid.map((x) => x[colIndex]).slice(rowIndex + 1);

  // Walk backward for left and top trees
  [leftTrees, topTrees].forEach((treeArr) => {
    let count: number = 0;

    for (let i = treeArr.length - 1; i >= 0; i--) {
      count++;
      if (treeArr[i] >= treeHeight) break;
    }

    visibilityArr.push(count);
  });

  // Walk forward for right and bottom trees
  [rightTrees, bottomTrees].forEach((treeArr) => {
    let count: number = 0;

    for (let i = 0; i < treeArr.length; i++) {
      count++;
      if (treeArr[i] >= treeHeight) break;
    }

    visibilityArr.push(count);
  });

  return product(visibilityArr);
};

export const partTwo = (input: string): number => {
  // Parse the input into a matrix of numbers
  const forestGrid: Matrix<number> = input.split("\n").map((line) => line.split("").map((num) => parseInt(num, 10)));
  const gridSize = forestGrid.length;

  const scenicScores: number[] = [];

  // Loop through the matrix, but skip the edges
  for (let i = 1; i < gridSize - 1; i++) {
    for (let j = 1; j < gridSize - 1; j++) {
      const score = calculateScenicScore(forestGrid, i, j);
      scenicScores.push(score);
    }
  }

  return Math.max(...scenicScores);
};
