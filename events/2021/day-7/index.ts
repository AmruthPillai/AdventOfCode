import { sum } from "@helpers/arrays";
import { rangeSum } from "@helpers/numbers";

const calculateFuelCost = (positions: number[], to: number) =>
  sum(positions.map((position) => Math.abs(position - to)));

export const partOne = (input: string): number => {
  // Processing Input
  const positions = input.split(",").map(Number);

  // Initialize Variables
  let step = -1;
  let minFuelCost = Number.MAX_VALUE;

  // Keep increasing steps until lowest fuel cost is found
  while (calculateFuelCost(positions, ++step) < minFuelCost) {
    minFuelCost = calculateFuelCost(positions, step);
  }

  return minFuelCost;
};

const calculateFuelCostExpo = (positions: number[], to: number) =>
  sum(positions.map((position) => rangeSum(Math.abs(position - to))));

export const partTwo = (input: string): number => {
  // Processing Input
  const positions = input.split(",").map(Number);

  // Initialize Variables
  let step = -1;
  let minFuelCost = Number.MAX_VALUE;

  // Keep increasing steps until lowest fuel cost is found
  while (calculateFuelCostExpo(positions, ++step) < minFuelCost) {
    minFuelCost = calculateFuelCostExpo(positions, step);
  }

  return minFuelCost;
};
