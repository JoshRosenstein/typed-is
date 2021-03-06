import isTrue from "./isTrue";

const validData = [true];
const invalidData = [
  false,
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

test.each(data)("isTrue(%o) === %o", (value, expected) => {
  expect(isTrue(value)).toBe(expected);
});
