import { product } from "@helpers/arrays";

const getNumberOfTreesInPath = (map: string[][], slopeX: number, slopeY: number): number => {
  // Set a counter for the number of trees you've encountered
  let numTrees = 0;

  // Create a marker for the character's initial position
  let [posX, posY] = [0, 0];

  // Loop through each row until the character reaches the last row
  while (posY < map.length - 1) {
    // Move the character to the right by 3 steps, and down by 1 step
    posX += slopeX;
    posY += slopeY;

    // Check the map to see if the current position contains a tree
    if (map[posY][posX % map[0].length] === "#") {
      // Increment the counter if a tree was encountered in the path
      numTrees++;
    }
  }

  // Return the number of trees as the answer
  return numTrees;
};

export const partOne = (input: string): number => {
  // Parse the input map into a matrix
  const matrixMap = input.split("\n").map((line) => line.split(""));

  // Return the number of trees as the answer
  return getNumberOfTreesInPath(matrixMap, 3, 1);
};

export const partTwo = (input: string): number => {
  // Parse the input map into a matrix
  const matrixMap = input.split("\n").map((line) => line.split(""));

  // Slopes to traverse through the map
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  // Store an array of the number of trees
  const numTreesArr = [];

  // Loop through each slop and get the number of trees found in the path
  for (const slope of slopes) {
    numTreesArr.push(getNumberOfTreesInPath(matrixMap, slope[0], slope[1]));
  }

  // Return the product of all the number of trees as the answer
  return product(numTreesArr);
};
