// @flow
import isPrimitive from "../src/isPrimitive.js";

type Primitive = string | number | boolean | void | null;

const t1 = (n: any[] | number): [Primitive, Primitive] => {
  const Pass = isPrimitive(n) ? n : 1;
  const Fail = n;
  //$FlowExpectedError
  return [Pass, Fail];
};
