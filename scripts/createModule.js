var fs = require("fs");
var path = require("path");
var program = require("commander");

function run(name, options) {
  var typeTest = path.resolve("typeTest");
  var src = path.resolve("src");
  var ts = path.resolve(src, name + ".ts");
  var tsTypeCheck = path.resolve(typeTest, name + ".ts");

  var tsTest = path.resolve(src, name + ".test.ts");

  var tsIndex = path.resolve(src, "index.ts");

  var flow = path.resolve(src, name + ".js");
  var flowTest = path.resolve(src, name + ".spec.js");
  var flowIndex = path.resolve(src, "index.js");
  var flowTypeCheck = path.resolve(typeTest, name + ".js");

  var tsContent = `
  export const ${name} = (obj: any): obj is boolean => {
      return typeof obj === "${name}";
    };
    
    export default ${name};
  `;

  var flowContent = `
// @flow
export const ${name} = (obj:any): boolean %checks => {
    return typeof obj === "${name}";
};

export default ${name};
`;

  var flowTestContent = `
import each from "jest-each";
import ${name} from "./${name}";

const validData = [true, false];
const invalidData = [
  0,
  [1, 2, 3],
  [].slice,
  { a: 1 },
  1,
  NaN,
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("${name}(%o) === %o", (value, expected) => {
  expect(${name}(value)).toBe(expected);
});
`;

  var tsTestContent = `
import ${name} from "./${name}";

const validData = [true, false];

const invalidData = [
  0,
  [1, 2, 3],
  [].slice,
  { a: 1 },
  1,
  NaN,
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("${name}(%o) === %o", (value, expected) => {
  expect(${name}(value)).toBe(expected);
});

`;

  var tsTypeCheckContent = `
  // import ${name} from "../src/${name}";

  // const t1 = (n: number | Function): [Function, Function] => {
  //     const Pass = ${name}(n) ? n : () => 1;
  //     const Fail = n;
  //     return [Pass, Fail];
  //   };

`;

  var flowTypeCheckContent = `
  // flow
  // import ${name} from "../src/${name}.js";
  
  // const t1 = (n: number | Function): [Function, Function] => {
  //     const Pass = ${name}(n) ? n : () => 1;
  //     const Fail = n;
  //     return [Pass, Fail];
  //   };

`;

  function checkThenWrite(path, content) {
    if (!fs.existsSync(path)) {
      fs.writeSync(fs.openSync(path, "w"), content);
    } else {
      log(`File ${path} already exists, will not overide`);
    }
  }
  checkThenWrite(ts, tsContent);
  checkThenWrite(flow, flowContent);
  checkThenWrite(tsTest, tsTestContent);
  checkThenWrite(flowTest, flowTestContent);
  checkThenWrite(tsTypeCheck, tsTypeCheckContent);
  checkThenWrite(flowTypeCheck, flowTypeCheckContent);

  console.log("Finished");
}

program
  .version("0.0.1")
  //.option('-s, --styles [extension]', 'styles extension [default: css]')
  .arguments("<name>")
  .action(run)
  .parse(process.argv);
