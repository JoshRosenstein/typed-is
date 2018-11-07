import isExtendable from "./isExtendable";

const validData = [{}, [], function() {}];

const invalidData = [
  0,
  1,
  undefined,
  null,
  NaN,
  true,
  false,
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isExtendable(%o) === %o", (value, expected) => {
  expect(isExtendable(value)).toBe(expected);
});
