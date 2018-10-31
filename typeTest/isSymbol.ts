import isSymbol from "../src/isSymbol";

const t1 = (n: [number] | number) => {
  if (isSymbol(n)) {
    return n.length;
  }
  //@ts-ignore
  const a = n.length; //Expect Error
};
