// @flow
import { isInteger } from "./isInteger";

export const isLength = (obj: any): boolean %checks => {
  return isInteger(obj) && obj > -1;
};

export default isLength;
