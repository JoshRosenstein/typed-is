import isDefined from "./isDefined";

const invalidData = [null, undefined];

const validData = [
  0,
  [1, 2, 3],
  { a: 1 },
  1,
  "a",
  true,
  false,
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isDefined(%o) === %o", (value, expected) => {
  expect(isDefined(value)).toBe(expected);
});
