import each from "jest-each";
import isLength from "./isLength";

const validData = [0, 1, 200];
const invalidData = [
  Number.MIN_VALUE,
  Infinity,
  "3",
  -1,
  [1, 2, 3],
  [].slice,
  { a: 1 },

  NaN,
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isLength(%o) === %o", (value, expected) => {
  expect(isLength(value)).toBe(expected);
});
