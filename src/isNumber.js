// @flow
export const isNumber = (val: mixed): boolean %checks =>
  val === val && typeof val === "number";
export default isNumber;
