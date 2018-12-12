import each from "jest-each";
import isMap from "./isMap";

const validData = [new Map([["aaa", "aaa"]])];
const invalidData = [
  new Set(["a", "b", "c"]),
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

each(data).test("isMap(%o) === %o", (value, expected) => {
  expect(isMap(value)).toBe(expected);
});
