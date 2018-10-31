// @flow
export const isInteger = (value: any): boolean %checks =>
  typeof value === "number" && Number.isInteger(value);

export default isInteger;

// const t1 = (a: number | [number]) => {
//   if (isInteger(a)) {
//     return 100 / a;
//   }

//   const err = 100 / a;
// };
