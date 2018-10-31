import isEmptyIterable from "./isEmptyIterable.js";
import each from "jest-each";

const validData = [[], "", new Set()];

const invalidData = [
  ["foo", "bar"],
  "foo",
  new Set(["foo", "bar"]),
  {
    *[Symbol.iterator]() {
      yield 1;
      yield 42;
    }
  }
];

const data = [
  ...validData.map(v => [v, true]),
  ...invalidData.map(v => [v, false])
];

each(data).test("isEmptyIterable(%o) === %o", (value, expected) => {
  expect(isEmptyIterable(value)).toBe(expected);
});
