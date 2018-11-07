import each from "jest-each";
import isTruthy from "./isTruthy";

const validData = [
  true,
  0,
  [1, 2, 3],
  [].slice,
  { a: 1 },
  1,
  "a",
  "true",
  "false"
];

const invalidData = [false, NaN, null, undefined];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isTruthy(%o) === %o", (value, expected) => {
  expect(isTruthy(value)).toBe(expected);
});
