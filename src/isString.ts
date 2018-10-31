export const isString = (value: any): value is string =>
  "string" === typeof value;

export default isString;
