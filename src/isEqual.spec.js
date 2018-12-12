import isEqual from "./isEqual";

describe("isEqual", () => {
  const a = [];
  const b = a;

  it("tests for deep equality of its operands", () => {
    expect(isEqual(100, 100)).toBeTruthy();
    expect(isEqual([1], [1])).toBeTruthy();
    expect(isEqual(100, "100")).toBeFalsy();
  });

  it("considers equal Boolean primitives equal", () => {
    expect(isEqual(true, true)).toBeTruthy();
    expect(isEqual(false, false)).toBeTruthy();
    expect(isEqual(true, false)).toBeFalsy();
    expect(isEqual(false, true)).toBeFalsy();
  });

  it("considers equivalent Boolean objects equal", () => {
    expect(isEqual(new Boolean(true), new Boolean(true))).toBeTruthy();
    expect(isEqual(new Boolean(false), new Boolean(false))).toBeTruthy();
    expect(isEqual(new Boolean(true), new Boolean(false))).toBeFalsy();
    expect(isEqual(new Boolean(false), new Boolean(true))).toBeFalsy();
  });

  it("considers equal number primitives equal", () => {
    expect(isEqual(0, 0)).toBeTruthy();
    expect(isEqual(0, 1)).toBeFalsy();
  });

  it("considers equivalent Number objects equal", () => {
    expect(isEqual(new Number(0), new Number(0))).toBeTruthy();
    expect(isEqual(new Number(1), new Number(0))).toBeFalsy();
  });

  it("considers equal string primitives equal", () => {
    expect(isEqual("", "")).toBeTruthy();
    expect(isEqual("", "foo")).toBeFalsy();
  });

  it("considers equivalent String objects equal", () => {
    expect(isEqual(new String(""), new String(""))).toBeTruthy();
    expect(isEqual(new String(""), new String("x"))).toBeFalsy();
  });

  it("handles objects", () => {
    expect(isEqual({}, {})).toBeTruthy();
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy();
    expect(isEqual({ a: 2, b: 3 }, { b: 3, a: 2 })).toBeTruthy();
    expect(isEqual({ a: 2, b: 3 }, { a: 3, b: 3 })).toBeFalsy();
    expect(isEqual({ a: 2, b: 3, c: 1 }, { a: 2, b: 3 })).toBeFalsy();
  });

  it("handles regex", () => {
    expect(isEqual(/\s/, /\s/)).toBeTruthy();
    expect(isEqual(/\s/, /\d/)).toBeFalsy();
  });

  it("handles lists", () => {
    const listA = [1, 2, 3];
    const listB = [1, 3, 2];

    expect(isEqual([], {})).toBeFalsy();
    expect(isEqual(listA, listB)).toBeFalsy();
  });

  it("handles dates", () => {
    expect(isEqual(new Date(0), new Date(0))).toBeTruthy();
    expect(isEqual(new Date(1), new Date(1))).toBeTruthy();
    expect(isEqual(new Date(0), new Date(1))).toBeFalsy();
  });

  it.skip("compares Map objects by value", () => {
    expect(isEqual(new Map([]), new Map([]))).toBeTruthy();
    expect(isEqual(new Map([]), new Map([[1, "a"]]))).toBeFalsy();
    expect(isEqual(new Map([[1, "a"]]), new Map([[1, "b"]]))).toBeFalsy();
    expect(isEqual(new Map([[1, "a"]]), new Map([[1, "a"]]))).toBeTruthy();
  });
});
