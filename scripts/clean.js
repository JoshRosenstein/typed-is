const path = require("path");
const fs = require("fs");
//const del = require("del");
const rimraf = require("rimraf");
const moduleNames = require("./moduleNames").default;

const fileList = fs.readdirSync(path.join(__dirname, ".."));

const ignoredFiles = ["docs", "rollup.config", "rollup.split", "rollup.simple"];

const removeFiles = [...moduleNames()];

const results = fileList.filter(f => {
  const { ext, name } = path.parse(f);

  if (
    ignoredFiles.indexOf(name) === -1 &&
    removeFiles.indexOf(name) > -1 &&
    (ext === ".js" || ext === ".ts")
  ) {
    console.log(`Removing: ${name}`);

    return true;
  }

  return false;
});

if (!results.length) {
  console.log("Nothing to remove...");
} else {
  rimraf.del(results).then(() => {
    console.info("Finished Cleaning Up");
  });
}
