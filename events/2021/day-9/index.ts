import { sum } from "@helpers/arrays";
import { Matrix } from "@helpers/matrix";

const getAdjacentCells = (grid: Matrix<number>, x: number, y: number) =>
  [
    [x - 1, y],
    [x, y + 1],
    [x + 1, y],
    [x, y - 1],
  ].filter(([row, col]) => grid[row] && grid[row][col] !== undefined);

export const partOne = (input: string): number => {
  const heightMap: Matrix<number> = input.split("\n").map((row) => row.split("").map(Number));

  const lowPoints = [];

  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[i].length; j++) {
      if (getAdjacentCells(heightMap, i, j).every(([x, y]) => heightMap[x][y] > heightMap[i][j])) {
        lowPoints.push(heightMap[i][j]);
      }
    }
  }

  const riskLevels = lowPoints.map((x) => x + 1);

  return sum(riskLevels);
};

const getBasinSize = (grid: Matrix<number>, start: number[]) => {
  const visited = new Set<string>();
  const queue = [start];

  while (queue.length > 0) {
    const [x, y] = queue.shift() || [];
    const points = getAdjacentCells(grid, x, y).filter(
      ([i, j]) => !visited.has(`${[i, j]}`) && grid[i][j] >= grid[x][y] && grid[i][j] < 9
    );

    points.forEach((point) => visited.add(`${point}`));
    queue.push(...points);
  }

  return visited.size + 1;
};

export const partTwo = (input: string): number => {
  const heightMap: Matrix<number> = input.split("\n").map((row) => row.split("").map(Number));

  const lowPoints: Matrix<number> = [];

  for (let i = 0; i < heightMap.length; i++) {
    for (let j = 0; j < heightMap[i].length; j++) {
      if (getAdjacentCells(heightMap, i, j).every(([x, y]) => heightMap[x][y] > heightMap[i][j])) {
        lowPoints.push([i, j]);
      }
    }
  }

  return lowPoints
    .map((point) => getBasinSize(heightMap, point))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, val) => acc * val, 1);
};
