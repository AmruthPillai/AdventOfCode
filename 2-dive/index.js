import { URL } from "url";
import { readFile } from "fs/promises";

const main = async () => {
  // Get input data from raw text file
  const inputData = await readFile(
    new URL("input.txt", import.meta.url),
    "utf-8"
  );

  // Process text file to an array, parse each line as objects of {command, value}
  const instructions = inputData.split("\n").map((line) => {
    const [command, value] = line.split(" ");
    return { [command]: parseInt(value) };
  });

  // Initialize position and depth
  let position = 0,
    depth = 0;

  // Loop through instructions and perform arithmetic operations based on the command
  for (let instruction of instructions) {
    if ("forward" in instruction) {
      position += instruction["forward"];
    } else if ("down" in instruction) {
      depth += instruction["down"];
    } else if ("up" in instruction) {
      depth -= instruction["up"];
    }
  }

  // Print Result to Console
  console.log("Result (Part One):", {
    position,
    depth,
    "Position x Depth": position * depth,
  });

  // Reinitialize variables
  let aim = 0;
  position = 0;
  depth = 0;

  // Loop through instructions, perform actions (may be multiple) based on the command
  for (let instruction of instructions) {
    if ("down" in instruction) {
      aim += instruction["down"];
    } else if ("up" in instruction) {
      aim -= instruction["up"];
    } else if ("forward" in instruction) {
      position += instruction["forward"];
      depth += aim * instruction["forward"];
    }
  }

  // Print Result to Console
  console.log("Result (Part Two):", {
    position,
    depth,
    "Position x Depth": position * depth,
  });
};

main();
