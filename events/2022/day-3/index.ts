import { sum } from "@helpers/arrays";
import { getCommonCharacter, isUpperCase } from "@helpers/strings";

// Maps the character a -> 1, b -> 2, ... z -> 26
// and A -> 27, B -> 28, ... Z -> 52
const getItemPriority = (item: string): number =>
  item.charCodeAt(0) - (isUpperCase(item) ? 38 : 96);

export const partOne = (input: string): number => {
  // Parse the input into an array of rucksack lists
  const rucksacks = input.split("\n");
  const itemPriorities: number[] = [];

  // Loop through each rucksack
  for (const rucksack of rucksacks) {
    // Get the items in each compartment of the rucksack, by splitting them in half
    const firstCompartment = rucksack.substring(0, rucksack.length / 2);
    const secondCompartment = rucksack.substring(rucksack.length / 2);

    // Get the common item between both compartments, there can only be one
    const commonCharacter = getCommonCharacter(
      firstCompartment,
      secondCompartment
    );

    // Get the priority (weight) of the common character, and push it to an array
    itemPriorities.push(getItemPriority(commonCharacter));
  }

  // Return the sum of all priorities
  return sum(itemPriorities);
};

export const partTwo = (input: string): number => {
  // Parse the input into an array of rucksack lists
  const rucksacks = input.split("\n");
  const itemPriorities: number[] = [];

  // Loop through every 3 sets of rucksacks
  for (let i = 0; i < rucksacks.length; i += 3) {
    const firstRucksack = rucksacks[i];
    const secondRucksack = rucksacks[i + 1];
    const thirdRucksack = rucksacks[i + 2];

    // Get the common item between all rucksacks, there can only be one
    const commonCharacter = getCommonCharacter(
      firstRucksack,
      secondRucksack,
      thirdRucksack
    );

    // Get the priority (weight) of the common character, and push it to an array
    itemPriorities.push(getItemPriority(commonCharacter));
  }

  // Return the sum of all priorities
  return sum(itemPriorities);
};
