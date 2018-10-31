// @flow
import isIterable from "../src/isIterable.js";

const method = <T: number>(y: T | Iterable<T>) => {
  let chars = [];
  if (isIterable(y)) {
    for (let char of y) {
      chars.push(char);
    }
  }

  let chars2 = [];
  for (let char of y) {
    //expect Error
    chars2.push(char);
  }
};
