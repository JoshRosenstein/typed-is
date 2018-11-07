export const isTruthy = (obj: any): boolean => {
  return Boolean(obj) || obj === 0;
};

export default isTruthy;
