import { calculateSum } from "@helpers/arrays";

interface AreaProps {
  l: number;
  w: number;
  h: number;
}

const calculateMinArea = ({ l, w, h }: AreaProps) =>
  Math.min(l * w, w * h, h * l);

const calculateSurfaceArea = ({ l, w, h }: AreaProps) =>
  2 * l * w + 2 * w * h + 2 * h * l;

const calculateRibbonArea = ({ l, w, h }: AreaProps) =>
  2 * l + 2 * w + 2 * h - 2 * Math.max(l, w, h);

const calculateBowArea = ({ l, w, h }: AreaProps) => l * w * h;

export const partOne = (input: string): number => {
  // Processing Input
  const inputLines = input.split("\n");
  const dimensions = inputLines.map((line) => {
    const [l, w, h] = line.split("x").map(Number);
    return { l, w, h };
  });

  const results = dimensions.map(({ l, w, h }) => {
    const surfaceArea = calculateSurfaceArea({ l, w, h });
    const minArea = calculateMinArea({ l, w, h });

    return surfaceArea + minArea;
  });

  return calculateSum(results);
};

export const partTwo = (input: string): number => {
  // Processing Input
  const inputLines = input.split("\n");
  const dimensions = inputLines.map((line) => {
    const [l, w, h] = line.split("x").map(Number);
    return { l, w, h };
  });

  const results = dimensions.map(({ l, w, h }) => {
    const ribbonArea = calculateRibbonArea({ l, w, h });
    const bowArea = calculateBowArea({ l, w, h });

    return ribbonArea + bowArea;
  });

  return calculateSum(results);
};
