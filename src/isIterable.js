//@flow
import isArray from "./isArray";
import isString from "./isString";
//TODO: Figure out flow check iterables
export const isIterable = (x: any): boolean %checks =>
  isArray(x) || isString(x);
export default isIterable;

// const method = (y: number | Iterable<number>) => {
//   let chars = [];
//   if (isIterable(y)) {
//     for (let char of y) {
//       chars.push(char);
//     }
//   }

//   let chars2 = [];
//   for (let char of y) {
//     //expect Error
//     chars2.push(char);
//   }
// };
