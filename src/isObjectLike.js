// @flow
export const isObjectLike = (value: any): boolean %checks =>
  null != value && "object" === typeof value;

export default isObjectLike;
