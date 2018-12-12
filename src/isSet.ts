export const isSet = (obj: any): obj is Set<any> => {
  return !!obj && obj.__proto__ === Set.prototype;
};

export default isSet;
