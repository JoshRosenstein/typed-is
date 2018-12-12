import isObjectLike from "./isObjectLike";
export const isPlainObject = <T extends any>(
  value: any
): value is { [key: string]: T } => {
  if (!isObjectLike(value)) return false;
  const p = Object.getPrototypeOf(value);
  return p === Object.prototype || p === null;
};

export default isPlainObject;
