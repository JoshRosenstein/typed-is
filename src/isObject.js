//@flow

export const isObject = (value: any): boolean %checks => {
  const t = typeof value;
  return (null != value && "object" === t) || t === "function";
};

export default isObject;
