// @flow
import isArray from "./isArray";
import isObjectLike from "./isObjectLike";
import isLength from "./isLength";

export const isArrayLike = (obj: any): boolean %checks => {
  return isArray(obj) || (isObjectLike(obj) && isLength(obj.length));
};

export default isArrayLike;
