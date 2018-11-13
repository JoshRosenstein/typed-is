// @flow
import isEqNaN from "./isEqNaN";
import isNumber from "./isNumber";
import isString from "./isString";

export const isNumeric = (value: any): boolean %checks =>
  isNumber(value)
    ? true
    : isString(value)
    ? isNumber(parseFloat(value))
      ? true
      : false
    : false;

export default isNumeric;
