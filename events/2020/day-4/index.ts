type Passport = {
  // Birth Year
  byr?: number;
  // Issue Year
  iyr?: number;
  // Expiration Year
  eyr?: number;
  // Height
  hgt?: string;
  // Hair Color
  hcl?: string;
  // Eye Color
  ecl?: "amb" | "blu" | "brn" | "gry" | "grn" | "hzl" | "oth";
  // Passport ID
  pid?: string;
  // Country ID
  cid?: string;
};

const validatePassportProperty = (key: keyof Passport, value: string): boolean => {
  if (key === "byr") {
    const byr = Number(value);
    return byr >= 1920 && byr <= 2002;
  }

  if (key === "iyr") {
    const iyr = Number(value);
    return iyr >= 2010 && iyr <= 2020;
  }

  if (key === "eyr") {
    const eyr = Number(value);
    return eyr >= 2020 && eyr <= 2030;
  }

  if (key === "hgt") {
    const hgt = value;

    if (hgt.includes("in")) {
      const hgtValue = Number(hgt.replace("in", ""));
      return hgtValue >= 59 && hgtValue <= 76;
    }

    if (hgt.includes("cm")) {
      const hgtValue = Number(hgt.replace("cm", ""));
      return hgtValue >= 150 && hgtValue <= 193;
    }
  }

  if (key === "hcl") {
    const hcl = value;
    const hclPattern = /^#(?:[0-9a-f]{6}){1,2}$/;
    return hclPattern.test(hcl);
  }

  if (key === "ecl") {
    const ecl = value;
    const eclPattern = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
    return eclPattern.test(ecl);
  }

  if (key === "pid") {
    const pid = value;
    const pidPattern = /^\d{9}$/;
    return pidPattern.test(pid);
  }

  if (key === "cid") {
    return true;
  }
};

export const partOne = (input: string): number => {
  // Parse the input into groups of passports
  const passports = input
    .split("\n\n")
    .map((line) => line.replace(/[\n]/g, " "))
    .map((line) => line.split(" ").map((prop) => prop.split(":")))
    .map((lines) => {
      const data: Passport = {};

      for (const line of lines) {
        const [key, value] = line;
        data[key] = value;
      }

      return data;
    });

  // Store an array of required fields in a passport
  const requiredFields: Array<keyof Passport> = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  // Store a counter of number of valid passports found
  let numValidPassports = 0;

  for (const passport of passports) {
    // Check if all the required fields are present in the passport
    if (requiredFields.every((field) => passport.hasOwnProperty(field))) {
      // Increment the counter for every time a valid passport was found
      numValidPassports++;
    }
  }

  // Return the number of valid passports found
  return numValidPassports;
};

export const partTwo = (input: string): number => {
  // Parse the input into groups of passports
  const passports = input
    .split("\n\n")
    .map((line) => line.replace(/[\n]/g, " "))
    .map((line) => line.split(" ").map((prop) => prop.split(":")))
    .map((lines) => {
      const data: Passport = {};

      for (const line of lines) {
        const [key, value] = line as [keyof Passport, string];

        // Perform Property Validation
        // If the property does not pass validation, do not push the prop into data object
        if (validatePassportProperty(key, value)) {
          data[key as string] = value;
        }
      }

      return data;
    });

  // Store an array of required fields in a passport
  const requiredFields: Array<keyof Passport> = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  // Store a counter of number of valid passports found
  let numValidPassports = 0;

  for (const passport of passports) {
    // Check if all the required fields are present in the passport
    if (requiredFields.every((field) => passport.hasOwnProperty(field))) {
      // Increment the counter for every time a valid passport was found
      numValidPassports++;
    }
  }

  // Return the number of valid passports found
  return numValidPassports;
};
