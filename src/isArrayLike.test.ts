import isArrayLike from "./isArrayLike";
const eval_ = (code: string) => {
  const fn = new Function(`return (${code})`);
  return fn();
};

const data = [
  ["null", false],
  ["undefined", false],
  ["function(){}", false],
  ["{}", false],
  ["{length: -1}", false],
  ["{length: new Number()}", false],
  ['{length: ""}', false],
  ["{length: 1.5}", false],
  ["{length: -1}", false],
  ["{x: 1}", false],

  ["{length: 0}", true],
  ["[]", true],
  ["[,,]", true],
  ["new Array(3)", true],
  ["{0: 1, length: 10}", true]
];

test.each(data)("isArrayLike(%s) === %o", (code, expected) => {
  const value = eval_(code);
  expect(isArrayLike(value)).toBe(expected);
});
