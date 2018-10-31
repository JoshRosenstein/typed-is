// @flow
export const isSymbol = (obj: any): boolean %checks => {
  //$FlowIssue
  return typeof obj === "symbol";
};

export default isSymbol;
