import isEqNaN from "./isEqNaN";

export const isNumeric = (value: any): value is string | number => {
  const type = typeof value;

  return (
    ("number" === type || "string" === type) &&
    !isEqNaN(value - parseFloat(value))
  );
};

export default isNumeric;
