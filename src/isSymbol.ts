export const isSymbol = (obj: any): obj is symbol => {
  return typeof obj === "symbol";
};

export default isSymbol;
