export const isMap = (obj: any): obj is Map<any, any> => {
  return !!obj && obj.__proto__ === Map.prototype;
};

export default isMap;
