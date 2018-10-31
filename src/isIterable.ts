export function isIterable_<T>(object: any): object is Iterable<T> {
  return typeof object[Symbol.iterator] === "function";
}

export default isIterable_;
