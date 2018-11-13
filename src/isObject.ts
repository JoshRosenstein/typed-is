// Include functions or Not?
export const isObject = <T>(value: T): value is T & object => {
  const t = typeof value;
  return (null != value && "object" === t) || t === "function";
};

export default isObject;
