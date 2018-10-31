import isArray from "./isArray";
import each from "jest-each";

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

each(data).test("isArray(%o) === %o", (value, expected) => {
  expect(isArray(value)).toBe(expected);
});
