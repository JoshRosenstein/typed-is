import isObjectLike from "./isObjectLike";
export const isPlainObject = (value: any): value is { [key: string]: any } => {
  if (!isObjectLike(value)) return false;
  const p = Object.getPrototypeOf(value);
  return p === Object.prototype || p === null;
};

export default isPlainObject;
