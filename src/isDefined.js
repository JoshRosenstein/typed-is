// @flow
import { isNil } from "./isNil";

export const isDefined = (obj: mixed) => !isNil(obj);

export default isDefined;
