module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  // setupFiles: ["<rootDir>/.jest/setEnvVars.js"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  //An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts"],
  // The test environment that will be used for testing
  testEnvironment: "node",

  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
