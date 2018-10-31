export const isInteger = (value: any): value is number =>
  Number.isInteger(value);

export default isInteger;
