import isFunction from "../src/isFunction";

const t1 = (n: number | Function): [Function, Function] => {
  const Pass = isFunction(n) ? n : () => 1;
  const Fail = n;
  //@ts-ignore
  return [Pass, Fail];
};
