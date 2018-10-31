// @flow

import isFunction from "../src/isFunction";

const method = (y: number | Function) => {
  const a = y(); //expect Error

  if (isFunction(y)) {
    const b = y();
  }
};
