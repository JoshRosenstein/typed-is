import each from "jest-each";
import isError from "./isError";

const validData = [new Error("e")];
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

each(data).test("isError(%o) === %o", (value, expected) => {
  expect(isError(value)).toBe(expected);
});
