import isArray from "./isArray";
import isInteger from "./isInteger";
import isNil from "./isNil";

export const isArrayLike_ = (obj: any): obj is ArrayLike<any> => {
  return (
    isArray(obj) ||
    (typeof obj == "object" &&
      !isNil(obj) &&
      typeof obj.length == "number" &&
      isInteger(obj.length) &&
      obj.length >= 0)
  );
};

export default isArrayLike_;
