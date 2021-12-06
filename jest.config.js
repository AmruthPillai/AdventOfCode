/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: ["<rootDir>/template/"],
  moduleNameMapper: {
    "^@events/(.*)$": "<rootDir>/events/$1",
    "^@helpers/(.*)$": "<rootDir>/helpers/$1",
  },
};
