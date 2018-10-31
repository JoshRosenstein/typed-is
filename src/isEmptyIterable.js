//@flow
export function isEmptyIterable<T>(iterable: Iterable<T>): boolean {
  for (const e of iterable) {
    return false;
  }
  return true;
}

export default isEmptyIterable;

const a = isEmptyIterable(["foo", "bar"]);
