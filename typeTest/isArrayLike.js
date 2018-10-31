// @flow
import isArrayLike from "../src/isArray.js";

const t1 = (n: [number] | number) => {
  if (isArrayLike(n)) {
    return n.length;
  }
  const a = n.length; //Expect Error
};

const t2 = (n: [number] | number) => {
  if (isArrayLike(n)) {
    return n.map(x => 1);
  }
  //$FlowExpectedError
  const a = n.map(x => 1); //Expect Error
};
