// @flow

export function isDate(value: any): boolean %checks {
  return (
    typeof value === "object" &&
    (value instanceof Date ||
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

export default isDate;
