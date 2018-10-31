//@flow

export const isFinite = (value: any): boolean %checks =>
  typeof value === "number" && Number.isFinite(value);

export default isFinite;
// const t1 = (a: number | [number]) => {
//   if (isFinite(a)) {
//     return 100 / a;
//   }

//   const err = 100 / a;
// };
