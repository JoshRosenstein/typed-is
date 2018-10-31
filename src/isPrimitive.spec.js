import each from "jest-each";
import isPrimitive from "./isPrimitive";
//type Primitive = string | number | boolean | undefined | null | symbol;

const validData = [true, false, 0, 1, undefined, null, "k"]; //Symbol("a")
const invalidData = [{}, [], new Set(), new Map()];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isPrimitive(%o) === %o", (value, expected) => {
  expect(isPrimitive(value)).toBe(expected);
});
