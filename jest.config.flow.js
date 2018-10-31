module.exports = {
  transform: {
    //  '\\.css$': '<rootDir>/test/styleTransform.js',
    "^.+\\.js?$": "babel-jest"
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec).js?(x)"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__utils__/",
    "/es/",
    "/lib/"
  ],
  coveragePathIgnorePatterns: ["/node_modules/"]
};
