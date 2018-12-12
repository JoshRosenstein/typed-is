// @flow
export const isSet = (obj: any): boolean %checks => {
  return !!obj && obj instanceof Set;
};

export default isSet;
