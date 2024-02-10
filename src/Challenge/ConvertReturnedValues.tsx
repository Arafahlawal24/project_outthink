type FuncMap = Record<string, (...args: any[]) => any>;

export function convertReturnedValuesToJSON(funcs: FuncMap): Record<string, (...args: any[]) => string> {
  const converted: Record<string, (...args: any[]) => string> = {};

  Object.keys(funcs).forEach(key => {
    const newKey = `${key}JSON`;
    converted[newKey] = (...args: Parameters<FuncMap[typeof key]>) => {
      const result = funcs[key](...args);
      return JSON.stringify(result);
    };
  });

  return converted;
}
