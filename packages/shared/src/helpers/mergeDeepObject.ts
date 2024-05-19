// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PropsType = Record<string, any>;

export function mergeDeepObject(...objects: PropsType[]) {
  const isObject = (obj: PropsType) => obj && obj.constructor.name === 'Object';

  return objects.reduce((prev, obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const pVal = prev[key];
        const oVal = obj[key];

        if (isObject(pVal) && isObject(oVal)) {
          prev[key] = mergeDeepObject(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });
    }

    return prev;
  }, {});
}
