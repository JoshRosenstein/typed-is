// @flow
import isDate from "../src/isDate.js";

const t1 = (n: Date | number): [Date, Date] => {
  const Pass = isDate(n) ? n : new Date();
  const Fail = n;
  //$FlowExpectedError
  return [Pass, Fail];
};
