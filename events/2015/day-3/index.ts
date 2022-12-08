type Direction = "^" | "v" | ">" | "<";

interface Position {
  x: number;
  y: number;
}

const getNewHouseFromDirection = (currentPosition: Position, direction: Direction): Position => {
  const { x, y } = currentPosition;
  let newPosition: Position;

  switch (direction) {
    case "^":
      newPosition = { x, y: y + 1 };
      break;
    case "v":
      newPosition = { x, y: y - 1 };
      break;
    case ">":
      newPosition = { x: x + 1, y };
      break;
    case "<":
      newPosition = { x: x - 1, y };
      break;
    default:
  }

  return newPosition;
};

const isVisited = (house: Position, houses: Position[]) =>
  houses.findIndex(({ x, y }) => x === house.x && y === house.y) !== -1;

export const partOne = (input: string): number => {
  // Processing Input
  const directions = input.split("") as Direction[];

  // Initialize Variables
  let santaPosition: Position = { x: 0, y: 0 };
  const visitedHouses = [santaPosition];

  // Loop through each direction,
  // add the new house location if not already visited
  directions.forEach((direction) => {
    santaPosition = getNewHouseFromDirection(santaPosition, direction);
    if (!isVisited(santaPosition, visitedHouses)) {
      visitedHouses.push(santaPosition);
    }
  });

  return visitedHouses.length;
};

export const partTwo = (input: string): number => {
  // Processing Input
  const directions = input.split("") as Direction[];

  // Initialize Variables
  let santaPosition: Position = { x: 0, y: 0 };
  let roboSantaPosition: Position = { x: 0, y: 0 };
  const visitedHouses = [santaPosition];

  directions.forEach((direction, index) => {
    // Take Turns by Toggling Direction
    if (index % 2 === 0) {
      // Santa's Turn
      santaPosition = getNewHouseFromDirection(santaPosition, direction);

      if (!isVisited(santaPosition, visitedHouses)) {
        visitedHouses.push(santaPosition);
      }
    } else {
      // Robo Santa's Turn
      roboSantaPosition = getNewHouseFromDirection(roboSantaPosition, direction);

      if (!isVisited(roboSantaPosition, visitedHouses)) {
        visitedHouses.push(roboSantaPosition);
      }
    }
  });

  return visitedHouses.length;
};
