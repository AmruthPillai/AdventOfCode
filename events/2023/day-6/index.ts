import { product } from "@helpers/arrays";

export const partOne = (input: string): number => {
  const result = [];
  const lines = input.split("\n");
  const [times, distances] = lines.map((line) => line.split(/\s+/).slice(1).map(Number));

  for (let t = 0; t < times.length; t++) {
    let counter = 0;
    for (let i = 0; i <= times[t]; i++) {
      const distance = -(i ** 2) + times[t] * i;
      if (distance > distances[t]) counter++;
    }
    result.push(counter);
  }

  return product(result);
};

export const partTwo = (input: string): number => {
  const result = [];
  const lines = input.split("\n");
  const [times, distances] = lines.map((line) => line.split(/\s+/).slice(1));

  const time = parseInt(times.join(""), 10);
  const distance = parseInt(distances.join(""), 10);

  let counter = 0;
  for (let i = 0; i <= time; i++) {
    const calcDistance = -(i ** 2) + time * i;
    if (calcDistance > distance) counter++;
  }
  result.push(counter);

  return product(result);
};
