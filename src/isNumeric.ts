import isNumber from "./isNumber";
import isString from "./isString";

export const isNumeric = (value: any): value is string | number =>
  isNumber(value)
    ? true
    : isString(value)
    ? isNumber(parseFloat(value))
      ? true
      : false
    : false;

export default isNumeric;
