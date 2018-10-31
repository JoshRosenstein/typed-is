export function isDate(value: any): value is Date {
  return (
    typeof value === "object" &&
    (value instanceof Date ||
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

export default isDate;
