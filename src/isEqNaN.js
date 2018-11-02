// @flow
export const isEqNaN = (obj: any): boolean %checks => {
  return obj !== obj;
};

export default isEqNaN;
