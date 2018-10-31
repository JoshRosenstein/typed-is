import isPrimitive from "./isPrimitive";

const validData = [true, false, 0, 1, undefined, null, Symbol("a"), "k"];
const invalidData = [{}, [], new Set(), new Map()];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isPrimitive(%o) === %o", (value, expected) => {
  expect(isPrimitive(value)).toBe(expected);
});
