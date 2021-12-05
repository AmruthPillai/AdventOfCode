/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@events/(.*)$": "<rootDir>/events/$1",
    "^@helpers/(.*)$": "<rootDir>/helpers/$1",
  },
};
