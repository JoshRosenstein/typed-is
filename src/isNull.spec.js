import isNull from "./isNull";
import each from "jest-each";

const validData = [null];

const invalidData = [
  0,
  undefined,
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

each(data).test("isNull(%o) === %o", (value, expected) => {
  expect(isNull(value)).toBe(expected);
});
