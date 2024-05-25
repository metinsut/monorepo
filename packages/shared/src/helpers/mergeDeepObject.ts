// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type PropsType = Record<string, any>;

export function mergeDeepObject(...objects: PropsType[]) {
  const isObject = (obj: PropsType) => obj && obj.constructor.name === "Object";

  return objects.reduce((prev, obj) => {
    if (obj) {
      for (const key of Object.keys(obj)) {
        const pVal = prev[key];
        const oVal = obj[key];

        if (isObject(pVal) && isObject(oVal)) {
          prev[key] = mergeDeepObject(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      }
    }

    return prev;
  }, {});
}
