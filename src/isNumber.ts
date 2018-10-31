export const isNumber = (value: any): value is number =>
  value === value && typeof value === "number";

export default isNumber;
