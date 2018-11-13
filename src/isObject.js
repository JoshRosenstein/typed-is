//@flow

export const isObject = (value: any): boolean %checks =>
  (null != value && "object" === typeof value) || typeof value === "function";

export default isObject;
