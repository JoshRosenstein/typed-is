// @flow
/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @category Type
 * @sig * -> Boolean
 * @param {*} target The value to test.
 * @return {Boolean} `true` if `target` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      isNil(null); //=> true
 *      isNil(undefined); //=> true
 *      isNil(0); //=> false
 *      isNil([]); //=> false
 */
export const isNil = (val: mixed): boolean %checks => val == null;

export default isNil;
