import { isEmpty } from "./isEmpty";

export const isPopulated = (obj: any) => !isEmpty(obj);

export default isPopulated;
