import { isNil } from "./isNil";

export const isDefined = <T>(value: T): value is NonNullable<T> =>
  !isNil(value);

export default isDefined;
