type Map = { source: number; destination: number; length: number };

type Input = {
  seeds: number[];
  maps: {
    "seed-to-soil": Map[];
    "soil-to-fertilizer": Map[];
    "fertilizer-to-water": Map[];
    "water-to-light": Map[];
    "light-to-temperature": Map[];
    "temperature-to-humidity": Map[];
    "humidity-to-location": Map[];
  };
};

const findIndices = (arr: string[], value: string): [start: number, end: number] => {
  const start = arr.findIndex((x) => x.startsWith(value)) + 1;
  let end = arr.findIndex((x, index) => index > start && x === "") - 1;
  if (value === "humidity-to-location") end = arr.length - 1;

  return [start, end];
};

const parseInput = (input: string): Input => {
  const lines = input.split("\n");

  // Seeds
  const seeds = lines[0]
    .split("seeds: ")[1]
    .split(" ")
    .map((x) => parseInt(x, 10));

  // Maps
  const maps: Input["maps"] = {
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "fertilizer-to-water": [],
    "water-to-light": [],
    "light-to-temperature": [],
    "temperature-to-humidity": [],
    "humidity-to-location": [],
  };

  Object.keys(maps).forEach((key) => {
    const [start, end] = findIndices(lines, key);
    for (let i = start; i <= end; i++) {
      const [destination, source, length] = lines[i].split(" ").map((x) => parseInt(x, 10));
      maps[key].push({ source, destination, length });
    }
  });

  return { seeds, maps };
};

const findPath = (key: keyof Input["maps"], maps: Input["maps"], seed: number) => {
  for (let i = 0; i < maps[key].length; i++) {
    const map = maps[key][i];

    if (map.source <= seed && map.source + map.length >= seed) {
      const difference = seed - map.source;
      const newSeed = map.destination + difference;
      return newSeed;
    }
  }

  return seed;
};

const findLocation = (maps: Input["maps"], seed: number) => {
  const soil = findPath("seed-to-soil", maps, seed);
  const fertilizer = findPath("soil-to-fertilizer", maps, soil);
  const water = findPath("fertilizer-to-water", maps, fertilizer);
  const light = findPath("water-to-light", maps, water);
  const temperature = findPath("light-to-temperature", maps, light);
  const humidity = findPath("temperature-to-humidity", maps, temperature);
  const location = findPath("humidity-to-location", maps, humidity);

  return location;
};

export const partOne = (input: string): number => {
  const { seeds, maps } = parseInput(input);

  return Math.min(...seeds.map((seed) => findLocation(maps, seed)));
};

export const partTwo = (input: string): number => {
  const { seeds, maps } = parseInput(input);
  const locations: number[] = [];

  for (let i = 0; i < seeds.length; i += 2) {
    const [startSeed, length] = [seeds[i], seeds[i + 1]];
    const endSeed = startSeed + length;

    for (let seed = startSeed; seed <= endSeed; seed++) {
      const location = findLocation(maps, seed);
      locations.push(location);
    }
  }

  return Math.min(...locations);
};
