module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
