import isObject from "./isObject";
import each from "jest-each";

const eval_ = (code: string) => {
  const fn = new Function(`return (${code})`);
  return fn();
};

const data = [
  ["{}", true],
  ["{x: 1}", true],
  ["Object.create(null)", true],
  ["new Date()", true],
  ["Date", false],
  ["1", false],
  ["new Object()", true],
  ["Object", false],
  ["new function(){}", true],
  ["new Function()", false]
];

each(data).test("isObject(%s) === %o", (code, expected) => {
  const value = eval_(code);

  expect(isObject(value)).toBe(expected);
});
