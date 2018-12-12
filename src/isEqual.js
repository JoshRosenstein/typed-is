// @flow
import isPlainObject from "./isPlainObject";

interface iterator<T, V> {
  (value: T, index: number, array: T[]): V;
}

function checkWhileTrue<T>(functor: T[], func: iterator<T, boolean>): boolean {
  const length = functor.length;
  let b = true;
  for (let i = 0; i < length; ++i) {
    if (b === false) break;
    b = func(functor[i], i, functor);
  }
  return b;
}

export function isEqual(valueA: any, valueB: any): boolean {
  if (valueA === valueB) return true;
  if (valueA == null || valueB == null) return valueA === valueB;

  const typeA = Object.prototype.toString.call(valueA).slice(8, -1);
  const typeB = Object.prototype.toString.call(valueB).slice(8, -1);
  if (typeA !== typeB) return false;

  switch (typeA) {
    case "String":
    case "Number": {
      return valueA.valueOf() === valueB.valueOf();
    }
    case "Boolean":
    case "Date": {
      return +valueA === +valueB;
    }
    case "RegExp": {
      return valueA.toString() === valueB.toString();
    }

    case "Array": {
      const keysA = Object.keys(valueA);
      const keysB = Object.keys(valueB);
      return (
        keysA.length === keysB.length &&
        checkWhileTrue(keysA, (key: string) =>
          isEqual(valueA[key], valueB[key])
        )
      );
    }
    case "Map": {
      const keysA = [...valueA.keys()];
      const keysB = [...valueB.keys()];
      return (
        keysA.length === keysB.length &&
        checkWhileTrue(keysA, (key: string) =>
          isEqual(valueA.get(key), valueB.get(key))
        )
      );
    }
    case "Set": {
      const keysA = [...valueA.keys()];
      const keysB = [...valueB.keys()];
      return (
        keysA.length === keysB.length &&
        checkWhileTrue(keysA, (key: string) =>
          isEqual(valueA.get(key), valueB.get(key))
        )
      );
    }

    case "Set": {
      return (
        valueA.size === valueB.size &&
        isEqual([...valueA.entries()], [...valueB.entries()])
      );
    }
    default:
  }
  if (isPlainObject(valueA)) {
    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);
    return (
      keysA.length === keysB.length &&
      checkWhileTrue(keysA, (key: string) => isEqual(valueA[key], valueB[key]))
    );
  }

  return false;
}

export default isEqual;
