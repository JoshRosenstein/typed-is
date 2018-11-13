import { isInteger } from "./isInteger";

export const isLength = (obj: any): obj is boolean =>
  isInteger(obj) && obj > -1;

export default isLength;
