// @flow
/// NOTE:Symbols not yet support inflow
import { isNil } from "./isNil";
import { isString } from "./isString";
import { isNumber } from "./isNumber";
import { isBoolean } from "./isBoolean";
//import { isSymbol } from "./isSymbol";  FlowIssue

//type Primitive = string | number | boolean | void | null;

export const isPrimitive = (obj: any): boolean %checks =>
  isNumber(obj) || isString(obj) || isNil(obj) || isBoolean(obj);

export default isPrimitive;
