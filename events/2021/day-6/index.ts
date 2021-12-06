import { sum, countBy } from "@helpers/arrays";

const getFishPopulationAfterNDays = (
  initialFishAges: Array<number>,
  numOfDays: number
): number => {
  let fishAges = countBy(initialFishAges) as Record<number, number>;

  for (let day = 0; day < numOfDays; day++) {
    const fishAgeMap: Record<number, number> = {};

    for (const [lastAge, count] of Object.entries(fishAges)) {
      const newAge = Number(lastAge) - 1;

      if (newAge < 0) {
        fishAgeMap[6] = (fishAgeMap[6] || 0) + count;
        fishAgeMap[8] = count;
      } else {
        fishAgeMap[newAge] = (fishAgeMap[newAge] || 0) + count;
      }
    }

    fishAges = fishAgeMap;
  }

  return sum(Object.values(fishAges));
};

export const partOne = (input: string): number => {
  // Processing Input
  const fishes: number[] = input.split(",").map(Number);

  return getFishPopulationAfterNDays(fishes, 80);
};

export const partTwo = (input: string): number => {
  // Processing Input
  const fishes: number[] = input.split(",").map(Number);

  return getFishPopulationAfterNDays(fishes, 256);
};
