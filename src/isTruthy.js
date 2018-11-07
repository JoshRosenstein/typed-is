// @flow
export const isTruthy = (obj: any): boolean %checks => {
  return Boolean(obj) || obj === 0;
};

export default isTruthy;
