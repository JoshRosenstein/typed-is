import isObject from "./isObject";

const eval_ = (code: string) => {
  const fn = new Function(`return (${code})`);
  return fn();
};

const data = [
  ["{}", true],
  ["{ x: 1 }", true],
  ["Object.create(null)", true],
  ["new Date()", true],
  ["1", false],
  ["new Object()", true],
  ["Object", true],
  ["new function() {}()", true],
  ["new Function()", true],
  ["null", false]
];

test.each(data)("isObject(%s) === %o", (code, expected) => {
  const value = eval_(code);

  expect(isObject(value)).toBe(expected);
});
