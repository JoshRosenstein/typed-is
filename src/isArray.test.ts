import isArray from "./isArray";

const validData = [[1, 2, 3], []];

const invalidData = [
  new Map(),
  new Set(),
  [].slice,
  0,
  undefined,
  null,
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

test.each(data)("isArray(%o) === %o", (value, expected) => {
  expect(isArray(value)).toBe(expected);
});
