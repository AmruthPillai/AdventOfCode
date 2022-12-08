type OpponentMove = "A" | "B" | "C";
type PlayerMove = "X" | "Y" | "Z";
type DesiredResult = PlayerMove;
type GameResult = "opponent" | "player" | "draw";

const playerDrawMap: Record<OpponentMove, PlayerMove> = {
  A: "X",
  B: "Y",
  C: "Z",
};

const playerLoseMap: Record<OpponentMove, PlayerMove> = {
  A: "Z",
  B: "X",
  C: "Y",
};

const playerWinMap: Record<OpponentMove, PlayerMove> = {
  A: "Y",
  B: "Z",
  C: "X",
};

const playerScoreMap: Record<PlayerMove, number> = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getGameResult = (a: OpponentMove, b: PlayerMove): GameResult => {
  if (Object.entries(playerDrawMap).some(([_a, _b]) => _a === a && _b === b)) {
    return "draw";
  }

  if (Object.entries(playerWinMap).some(([_a, _b]) => _a === a && _b === b)) {
    return "player";
  }

  return "opponent";
};

export const partOne = (input: string): number => {
  // Parse the input into a game matrix of single characters
  const strategyGuideMatrix: string[][] = input.split("\n").map((row) => row.split(" "));

  // Keep track of the overall score of the player
  let score: number = 0;

  // Loop through each round and calculate the score
  for (const round of strategyGuideMatrix) {
    // Get the opponent's move and the player's move
    const opponentMove: OpponentMove = round[0] as OpponentMove;
    const playerMove: PlayerMove = round[1] as PlayerMove;

    // Get the score for each move made by the player
    const playerScore: number = playerScoreMap[playerMove];

    // Check if the player won the round
    const result = getGameResult(opponentMove, playerMove);

    if (result === "player") {
      score += 6 + playerScore;
    } else if (result === "draw") {
      score += 3 + playerScore;
    } else {
      score += playerScore;
    }
  }

  return score;
};

export const partTwo = (input: string): number => {
  // Parse the input into a game matrix of single characters
  const strategyGuideMatrix: string[][] = input.split("\n").map((row) => row.split(" "));

  // Keep track of the overall score of the player
  let score: number = 0;

  // Loop through each round and calculate the score
  for (const round of strategyGuideMatrix) {
    // Get the opponent's move and the player's move
    const opponentMove: OpponentMove = round[0] as OpponentMove;
    const desiredResult: DesiredResult = round[1] as DesiredResult;

    // Get the score for each move made by each player
    if (desiredResult === "Z") {
      // If the desired result is Z, then the player must win
      const desiredMove = playerWinMap[opponentMove];
      score += 6 + playerScoreMap[desiredMove];
    } else if (desiredResult === "Y") {
      // If the desired result is Y, then the player must draw
      const desiredMove = playerDrawMap[opponentMove];
      score += 3 + playerScoreMap[desiredMove];
    } else {
      // If the desired result is X, then the player must lose
      const desiredMove = playerLoseMap[opponentMove];
      score += playerScoreMap[desiredMove];
    }
  }

  return score;
};
