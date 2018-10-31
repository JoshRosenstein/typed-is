type TypeNameMap = {
  function: Function;
  object: null | object;
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
  : T extends TypeNameMap[Type] ? T : never;

export const isObject = <T>(
  value: T
): value is Exclude<ExtractByTypeName<T, "object">, null> => {
  return null !== value && "object" === typeof value;
};

export default isObject;
