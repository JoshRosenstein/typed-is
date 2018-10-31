import isBoolean from "./isBoolean";

const validData = [true, false];

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

test.each(data)("isBoolean(%o) === %o", (value, expected) => {
  expect(isBoolean(value)).toBe(expected);
});
