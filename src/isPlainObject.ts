export const isPlainObject = <T>(
  value: any
): value is { [key: string]: any } => {
  const isObject =
    Object.prototype.toString.call(value).slice(8, -1) === "Object";
  if (!isObject) return false;
  return (
    value.constructor === Object &&
    Object.getPrototypeOf(value) === Object.prototype
  );
};

export default isPlainObject;
