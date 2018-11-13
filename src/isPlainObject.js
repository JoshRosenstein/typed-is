//@flow
import isObjectLike from "./isObjectLike";
export const isPlainObject = (value: any): boolean => {
  if (!isObjectLike(value)) return false;
  const p = Object.getPrototypeOf(value);
  return p === Object.prototype || p === null;
};

export default isPlainObject;
