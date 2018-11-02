export const isEqNaN = (value: any): value is typeof NaN => value !== value;

export default isEqNaN;
