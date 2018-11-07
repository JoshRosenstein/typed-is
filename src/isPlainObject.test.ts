import { isPlainObject } from "./isPlainObject";

const eval_ = (code: string) => {
  const fn = new Function(`return (${code})`);
  return fn();
};

const data = [
  [{}, true],
  ["Object.create({})", true],
  ["Object.create(Object.prototype)", true],
  ["{x: 1}", true],
  ["Object.create(null)", true],
  ["new Date()", false],
  ["1", false],
  ["new Object()", true],
  ["Object", false],
  ["new function(){}", false],
  ["new Function()", false]
];
const data2 = [
  // [{}, true],
  [{ x: 1 }, true],
  //[Object.create(null), true],
  [new Date(), false],
  [1, false],
  //  [new Object(), true],
  [Object, false],

  [new Function(), false]
];
// test.each(data)("isPlainObject(%s) === %o", (code, expected) => {
//   const value = eval_(code);

//   expect(isPlainObject(value)).toBe(expected);
// });

test.each(data2)("isPlainObject(%o) === %o", (code, expected) => {
  expect(isPlainObject(code)).toBe(expected);
});

test("PLain", () => {
  expect(isPlainObject({})).toBe(true);
});
test("PLain2", () => {
  expect(isPlainObject(new Object())).toBe(true);
});
