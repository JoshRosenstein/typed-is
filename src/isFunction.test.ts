import isFunction from "./isFunction";

const validData = [
  () => 1,
  function() {
    return 1;
  }
];
const invalidData = [0, 1, true, false, null, undefined, {}, [], ""];
const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

test.each(data)("isFunction(%o) === %o", (value, expected) => {
  expect(isFunction(value)).toBe(expected);
});
