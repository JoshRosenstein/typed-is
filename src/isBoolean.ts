export const isBoolean = (value: any): value is boolean => {
  return "boolean" === typeof value;
};

export default isBoolean;
