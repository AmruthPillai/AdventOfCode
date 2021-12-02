import { URL } from "url";
import { readFile } from "fs/promises";

const main = async () => {
  // Get input data from raw text file
  const inputData = await readFile(
    new URL("input.txt", import.meta.url),
    "utf-8"
  );

  // Process text file to an array, parse each input as integers
  const input = inputData.split("\n").map((line) => parseInt(line));

  // Initialize counters
  let increaseCounter = 0,
    decreaseCounter = 0;

  // Loop through input array (sliding window)
  for (let i = 1; i < input.length; i++) {
    // Determine whether the sum increases or decreases
    if (input[i - 1] < input[i]) {
      increaseCounter++;
    } else if (input[i - 1] > input[i]) {
      decreaseCounter++;
    }
  }

  // Print Result to Console
  console.log("Result (Part One):", { increaseCounter, decreaseCounter });

  // Re-initialize counters
  increaseCounter = 0;
  decreaseCounter = 0;

  // Loop through input array (size-3 sliding window)
  for (let i = 3; i < input.length; i++) {
    // Get the first and second 3-size sliding windows
    const firstWindow = [input[i - 3], input[i - 2], input[i - 1]];
    const secondWindow = [input[i - 2], input[i - 1], input[i]];

    // Calculate the sum of the inputs in each each window
    const firstWindowSum = firstWindow.reduce((a, b) => a + b, 0);
    const secondWindowSum = secondWindow.reduce((a, b) => a + b, 0);

    // Determine whether the sum increases or decreases
    if (firstWindowSum < secondWindowSum) {
      increaseCounter++;
    } else if (firstWindowSum > secondWindowSum) {
      decreaseCounter++;
    }
  }

  // Print Result to Console
  console.log("Result (Part Two):", { increaseCounter, decreaseCounter });
};

main();
