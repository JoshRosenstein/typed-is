import each from "jest-each";
import isNumeric from "./isNumeric";

const validData = [1, "2"];
const invalidData = [[1, 2, 3], [].slice, { a: 1 }, NaN, "a", "true", "false"];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isNumeric(%o) === %o", (value, expected) => {
  expect(isNumeric(value)).toBe(expected);
});
