// @flow
import isArray from "./isArray";
import isObject from "./isObject";
import isInteger from "./isInteger";
import isNil from "./isNil";

export const isArrayLike = (obj: any): boolean %checks => {
  return (
    isArray(obj) ||
    (isObject(obj) &&
      !isNil(obj) &&
      typeof obj.length == "number" &&
      isInteger(obj.length) &&
      obj.length >= 0)
  );
};

export default isArrayLike;
