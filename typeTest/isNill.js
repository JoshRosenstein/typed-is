// @flow

import isNil from "../src/isNil.js";

const passt1 = (n: number | void): void => {
  if (isNil(n)) {
    return n;
  }
};

const failt1 = (n: number | void): void => {
  //$FlowExpectedError
  return n; //fail
};

const passt2 = (n: number | null): null | void => {
  if (isNil(n)) {
    return n;
  }
  return null;
};

//$FlowExpectedError
const failt2 = (n: number | null): null => {
  return n; //fail
};
