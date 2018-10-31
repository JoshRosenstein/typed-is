module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(test).ts?(x)"],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
