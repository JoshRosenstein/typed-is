//@flow

export function isIterable(obj: any): boolean {
  return typeof obj[Symbol.iterator] === "function";
}

export default isIterable;
