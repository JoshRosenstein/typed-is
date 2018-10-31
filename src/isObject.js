//@flow

export const isObject = (value: any): boolean %checks => {
  return null !== value && "object" === typeof value;
};

export default isObject;
