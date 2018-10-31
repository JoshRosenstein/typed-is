import isDate from "../src/isDate";

const t1 = (n: Date | number): [Date, Date] => {
  const Pass = isDate(n) ? n : new Date();
  const Fail = n;
  //@ts-ignore
  return [Pass, Fail];
};
