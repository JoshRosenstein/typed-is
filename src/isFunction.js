// @flow

export const isFunction = (target: mixed): boolean %checks => {
  return "function" === typeof target;
};

export default isFunction;
