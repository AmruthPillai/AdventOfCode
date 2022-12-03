export const partOne = (input: string): number => {
  // Parse the input to get the policies and passwords of each line
  const inputMatrix = input.split("\n").map((line) => line.split(": "));
  const policies = inputMatrix.map((line) => line[0]);
  const passwords = inputMatrix.map((line) => line[1]);

  // Set a counter for the number of valid passwords
  let validPasswords = 0;

  // Loop through each policy and password
  for (let i = 0; i < policies.length; i++) {
    const [range, character] = policies[i].split(" ");
    const [min, max] = range.split("-").map(Number);
    const password = passwords[i];

    // Get the number of times the character appears in the password
    const characterCount = password.split(character).length - 1;

    // Check if the character count is within the range of the password policy
    if (characterCount >= min && characterCount <= max) {
      // Increment the counter if a valid password was found
      validPasswords++;
    }
  }

  // Return the number of valid passwords
  return validPasswords;
};

export const partTwo = (input: string): number => {
  // Parse the input to get the policies and passwords of each line
  const inputMatrix = input.split("\n").map((line) => line.split(": "));
  const policies = inputMatrix.map((line) => line[0]);
  const passwords = inputMatrix.map((line) => line[1]);

  // Set a counter for the number of valid passwords
  let validPasswords = 0;

  // Loop through each policy and password
  for (let i = 0; i < policies.length; i++) {
    const [positions, character] = policies[i].split(" ");
    const [first, second] = positions.split("-").map(Number);

    // Get the character at the first and second positions
    const firstCharacter = passwords[i][first - 1];
    const secondCharacter = passwords[i][second - 1];

    // Check if the character is at one of the positions but not both
    if (
      firstCharacter !== secondCharacter &&
      (firstCharacter === character || secondCharacter === character)
    ) {
      // Increment the counter if a valid password was found
      validPasswords++;
    }
  }

  // Return the number of valid passwords
  return validPasswords;
};
