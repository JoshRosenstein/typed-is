//type Func<Return = any, A extends any[] = any[]> = (...args: A) => Return;

export const isFunction = (value: any): value is Function => {
  return "function" === typeof value;
};

export default isFunction;
