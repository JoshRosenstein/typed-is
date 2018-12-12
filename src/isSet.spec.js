import each from "jest-each";
import isSet from "./isSet";

const validData = [new Set(["a", "b", "c"])];

const invalidData = [
  new Map([["aaa", "aaa"]]),
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

each(data).test("isSet(%o) === %o", (value, expected) => {
  expect(isSet(value)).toBe(expected);
});
