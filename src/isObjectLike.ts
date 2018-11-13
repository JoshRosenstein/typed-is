type TypeNameMap = {
  function: Function;
  object: object;
  string: string;
  number: number;
  boolean: boolean;
  symbol: symbol;
  undefined: undefined;
};

type TypeName<T = any> = T extends Function
  ? "function"
  : {
      [P in keyof TypeNameMap]: T extends TypeNameMap[P] ? P : never
    }[keyof TypeNameMap];

type ExtractByTypeName<T, Type extends TypeName> = T extends Function
  ? ("function" extends Type ? T : never)
  : T extends TypeNameMap[Type]
  ? T
  : never;

/**
 * @name isObjectLike
 * @description Checks if the value is object like, which is not null and an object.
 * @param {val} any
 * @returns boolean
 * @since 1.0.0
 * @example
 * isObjectLike(null);
 * // => false
 * isObjectLike([]);
 * // => true
 * isObjectLike({});
 * // => true
 */
export const isObjectLike = <T>(
  value: T
): value is ExtractByTypeName<T, "object"> => {
  return null != value && "object" === typeof value;
};

export default isObjectLike;
