import isPrimitive from "../src/isPrimitive";

type Primitive = string | number | boolean | undefined | null | symbol;

const t1 = (n: any[] | number): [Primitive, Primitive] => {
  const Pass = isPrimitive(n) ? n : 1;
  const Fail = n;
  //@ts-ignore
  return [Pass, Fail];
};
