import isNil from "../src/isNil";

const passt1 = (n: number | undefined): undefined => {
  if (isNil(n)) {
    return n;
  }
};

const failt1 = (n: number | undefined): undefined => {
  //@ts-ignore

  return n; //fail
};

const passt2 = (n: number | null): null => {
  if (isNil(n)) {
    return n;
  }
};

const failt2 = (n: number | null): null => {
  //@ts-ignore
  return n; //fail
};
