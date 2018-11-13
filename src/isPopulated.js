// @flow
import { isEmpty } from "./isEmpty";

export const isPopulated = (obj: mixed) => !isEmpty(obj);

export default isPopulated;
