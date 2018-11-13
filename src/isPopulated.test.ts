import isPopulated from "./isPopulated";

const invalidData = [[], {}, new Set(), new Map(), null, undefined];

const validData = [
  new Map([["aaa", "aaa"]]),
  new Set(["a", "b", "c"]),
  [1, 2, 3],
  [undefined],
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

test.each(data)("isPopulated(%o) === %o", (value, expected) => {
  expect(isPopulated(value)).toBe(expected);
});
