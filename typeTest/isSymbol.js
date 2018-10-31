// @flow
import isSymbol from "../src/isSymbol.js";

const t1 = (n: [number] | number) => {
  if (isSymbol(n)) {
    //$FlowExpectedError  SHOULDNT BE ERROR
    return n.length;
  }
  //$FlowExpectedError
  const a = n.length; //Expect Error
};
