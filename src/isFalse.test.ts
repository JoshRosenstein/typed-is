import isFalse from "./isFalse";

const validData = [false];

const invalidData = [
  true,
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

test.each(data)("isFalse(%o) === %o", (value, expected) => {
  expect(isFalse(value)).toBe(expected);
});
