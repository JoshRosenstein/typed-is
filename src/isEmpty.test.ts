import isEmpty from "./isEmpty";

const validData = [[], {}, "", null, new Map(), new Set()];

const invalidData = [
  new Map([["aaa", "aaa"]]),
  new Set(["a", "b", "c"]),
  0,
  [1, 2, 3],
  { a: 1 },
  1,
  NaN,
  true,
  false,
  " ",
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isEmpty(%o) === %o", (value, expected) => {
  expect(isEmpty(value)).toBe(expected);
});
