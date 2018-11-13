import isString from "./isString";
import isNil from "./isNil";
import isObject from "./isObject";
import isArrayLike from "./isArrayLike";

export const isEmpty = (obj: any): boolean => {
  if (isNil(obj)) {
    return true;
  }
  if (isString(obj)) {
    return obj === "";
  }

  if (isArrayLike(obj)) {
    return obj.length > 0 ? false : true;
  }

  if (isObject(obj)) {
    if (obj.size > 0) return false;
    if (obj.size === 0) return true;
    for (var key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  return false;
};

export default isEmpty;
