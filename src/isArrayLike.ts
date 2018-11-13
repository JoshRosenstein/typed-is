import isArray from "./isArray";
import isObjectLike from "./isObjectLike";
import isLength from "./isLength";

export const isArrayLike = (obj: any): obj is ArrayLike<any> =>
  isArray(obj) || (isObjectLike(obj) && isLength(obj.length));

export default isArrayLike;
