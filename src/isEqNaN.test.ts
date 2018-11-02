import isEqNaN from "./isEqNaN";

//@ts-ignore
const validData = ["18l" - parseFloat("18"), NaN];

const invalidData = [
  //@ts-ignore
  "18" - parseFloat("18"),
  0,
  [1, 2, 3],
  [].slice,
  { a: 1 },
  1,
  "a",
  "true",
  "false"
];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isEqNaN(%o) === %o", (value, expected) => {
  expect(isEqNaN(value)).toBe(expected);
});
