import isArrayLike from "../src/isArray";

const t1 = (n: [number] | number) => {
  if (isArrayLike(n)) {
    return n.length;
  }
  //@ts-ignore
  const a = n.length; //Expect Error
};

const t2 = (n: [number] | number) => {
  if (isArrayLike(n)) {
    return n.map(x => 1);
  }
  //@ts-ignore
  const a = n.map(x => 1); //Expect Error
};
