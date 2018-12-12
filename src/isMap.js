// @flow
export const isMap = (obj: any): boolean %checks => {
  return obj instanceof Map;
};

export default isMap;
