import isUndefined from "./isUndefined";

const validData = [undefined, void 0];

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

test.each(data)("isUndefined(%o) === %o", (value, expected) => {
  expect(isUndefined(value)).toBe(expected);
});
