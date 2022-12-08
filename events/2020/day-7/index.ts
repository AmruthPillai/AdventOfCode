type Bag = {
  name: string;
  contains: {
    name: string;
    quantity: number;
  }[];
};

const parseLuggageRules = (input: string): Bag[] => {
  const lines = input.split("\n");

  // Create a variable to store the rules
  const rules: Bag[] = [];

  for (const line of lines) {
    // Parse the primary bag color from this line
    const bagColor = line.split(" ").slice(0, 2).join(" ");

    // Parse which bags can the primary bag contain from this line
    const containsString = line.split("contain ")[1];
    const match = containsString.match(/\d \w+ \w+/g);

    const contains = match
      ? match.map((contain) => {
          const splitArr = contain.split(" ");
          const quantity = Number(splitArr[0]);
          const name = splitArr.slice(1).join(" ");

          return { name, quantity };
        })
      : [];

    // Append this parsed rule line to the rules array
    rules.push({ name: bagColor, contains });
  }

  return rules;
};

export const partOne = (input: string): number => {
  // Parse the input to get the list of rules for luggage processing
  const rules = parseLuggageRules(input);

  // Add "shiny gold" to the list of bags to search for
  const searchBag = ["shiny gold"];

  // Create a toggle switch to know when to stop looking for bags
  let bagWasAdded = true;

  // Loop until there was a complete iteration where no bag was added to the list
  while (bagWasAdded) {
    bagWasAdded = false;

    // Go through each of the rules and look for the bags inside searchBag array
    for (const rule of rules) {
      // Skip the bag's own rule as it is not required
      if (searchBag.includes(rule.name)) {
        continue;
      } else if (rule.contains.some((bag) => searchBag.includes(bag.name))) {
        searchBag.push(rule.name);
        bagWasAdded = true;
        continue;
      }
    }
  }

  return searchBag.length - 1;
};

export const partTwo = (input: string): number => {
  // Parse the input to get the list of rules for luggage processing
  const rules = parseLuggageRules(input);

  console.log(JSON.stringify(rules, null, 2));

  return input.length;
};
