const fs = require("fs");
const path = require("path");
const moduleNames = require("./moduleNames").default;

const generateIndex = isFlow => {
  const propertyRequireLines = moduleNames().map(
    file => `export { default as ${file} } from './${file}'`
  );
  const first = isFlow ? ["//@flow"] : [];
  const indexLines = first.concat(propertyRequireLines.join("\n")).join("\n");

  return `${indexLines}\n`;
};

fs.writeFileSync("./src/index.ts", generateIndex());
fs.writeFileSync("./src/index.js", generateIndex(true));
