type Game = {
  red: number;
  green: number;
  blue: number;
};

export const partOne = (input: string): number => {
  let result = 0;
  const lines = input.split("\n");

  // Configuration
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;

  for (const line of lines) {
    const match = line.match(/Game (\d+): (.*)/);
    const id = parseInt(match[1], 10);
    const subsets = match[2].split("; ").map((subset) => subset.split(", "));

    const isValid = subsets.every((subset) => {
      const game: Game = { red: 0, green: 0, blue: 0 };

      subset.forEach((item) => {
        const [number, color] = item.split(" ");
        game[color] = parseInt(number, 10);
      });

      return game.red <= maxRed && game.green <= maxGreen && game.blue <= maxBlue;
    });

    if (isValid) result += id;
  }

  return result;
};

export const partTwo = (input: string): number => {
  let result = 0;
  const lines = input.split("\n");

  for (const line of lines) {
    const match = line.match(/Game (\d+): (.*)/);
    const subsets = match[2].split("; ").map((subset) => subset.split(", "));

    const game: Game = {
      red: 0,
      green: 0,
      blue: 0,
    };

    subsets.forEach((subset) => {
      subset.forEach((item) => {
        const [number, color] = item.split(" ");
        const current = game[color];
        const future = parseInt(number, 10);

        if (current < future) game[color] = future;
      });
    });

    const power = game.red * game.green * game.blue;
    result += power;
  }

  return result;
};
