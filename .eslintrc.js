module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "no-bitwise": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "no-useless-return": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "no-unused-expressions": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        json: "never",
      },
    ],
  },
};
