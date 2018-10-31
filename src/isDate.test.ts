import isDate from "./isDate";

const validData = [new Date(), new Date("1995-12-17T03:24:00")];

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

test.each(data)("isDate(%o) === %o", (value, expected) => {
  expect(isDate(value)).toBe(expected);
});
