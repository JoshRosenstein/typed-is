type Primitive = string | number | boolean | undefined | null | symbol;

export const isPrimitive = (value: any): value is Primitive =>
  Object(value) !== value;

export default isPrimitive;
