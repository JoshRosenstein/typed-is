const fs = require("fs");
const path = require("path");

const ignoredFiles = ["internal", "index.js", "index.ts"];

const moduleNames = () => {
  const files = fs.readdirSync(path.join(process.cwd(), "src"));
  const ret = files
    .filter(
      file =>
        /^[^._]/.test(file) &&
        !ignoredFiles.includes(file) &&
        !RegExp("_").test(file) &&
        !RegExp("spec*").test(file) &&
        !RegExp("test*").test(file)
    )
    .map(file => file.replace(".js", "").replace(".ts", ""))
    .filter((v, i, a) => a.indexOf(v) === i);

  return ret;
};

exports.default = moduleNames;
