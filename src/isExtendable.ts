import isArray from "./isArray";
import isFunction from "./isFunction";
import isPlainObject from "./isPlainObject";

export const isExtendable = (obj: any): obj is any[] | Function | {} => {
  return isArray(obj) || isFunction(obj) || isPlainObject(obj);
};

export default isExtendable;
