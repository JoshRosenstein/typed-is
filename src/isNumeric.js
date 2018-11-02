// @flow
import isEqNaN from "./isEqNaN";

export const isNumeric = (value: any): boolean %checks => {
  return (
    ("number" === typeof value || "string" === typeof value) &&
    !isEqNaN(value - parseFloat(value))
  );
};

export default isNumeric;
