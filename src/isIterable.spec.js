import isIterable from "./isIterable";
import each from "jest-each";

const validData = [
  ["foo", "bar"],
  "foo"

  // new Set(["foo", "bar"]),
  // {
  //   *[Symbol.iterator]() {
  //     yield 1;
  //     yield 42;
  //   }
  // }
];

const invalidData = [{ foo: "bar", baz: 42 }, 0, 1, NaN];

const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isIterable(%o) === %o", (value, expected) => {
  expect(isIterable(value)).toBe(expected);
});
