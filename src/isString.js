// @flow
export const isString = (obj: any): boolean %checks => typeof obj === "string";

export default isString;

// const method = (y: number | string) => {
//   let chars = [];
//   if (isString(y)) {
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
