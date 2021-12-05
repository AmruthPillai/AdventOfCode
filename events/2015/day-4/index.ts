import { getMD5Hash } from "@helpers/crypto";

const calculateNonce = (string: string, numOfZeroes: number): number => {
  // Initialize Variables
  let nonce = 0;
  let hash = "";

  // Generate string starting with 0s of length numOfZeroes
  const zeroString = new Array(numOfZeroes).fill(0).join("");

  // Loop until hash with specified pattern is generated
  while (!hash.startsWith(zeroString)) {
    hash = getMD5Hash(string + ++nonce);
  }

  // Return the last iteration number
  return nonce;
};

export const partOne = (input: string): number => calculateNonce(input, 5);

export const partTwo = (input: string): number => calculateNonce(input, 6);
