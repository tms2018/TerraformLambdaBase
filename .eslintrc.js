// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["node_modules/", "*.json", "*.css", "*.md", "*.svg", "*.wav"],
  rules: {
    "no-unused-vars": ["error", { "vars": "local", "args": "none", "ignoreRestSiblings": false }],
    "@typescript-eslint/typedef": [
      "error",
      {
        arrowParameter: false,
        variableDeclaration: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
        ignoreRestSiblings: false,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
};
