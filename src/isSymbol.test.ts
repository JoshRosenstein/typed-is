import isSymbol from "./isSymbol";

const validData = [Symbol(), Symbol(42), Symbol("foo")];

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

test.each(data)("isSymbol(%o) === %o", (value, expected) => {
  expect(isSymbol(value)).toBe(expected);
});
