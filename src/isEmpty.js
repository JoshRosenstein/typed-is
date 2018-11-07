// @flow
import isString from "./isString";
import isNil from "./isNil";
import isObject from "./isObject";

export const isEmpty = (obj: any): boolean => {
  if (isNil(obj)) {
    return true;
  }
  if (isString(obj)) {
    return obj === "";
  }

  if (isObject(obj)) {
    if (obj.length > 0 || obj.size > 0) return false;
    if (obj.length === 0 || obj.size === 0) return true;
    for (var key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  return false;
};

export default isEmpty;
