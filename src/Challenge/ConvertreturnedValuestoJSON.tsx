type FuncMap = Record<string, (...args: any[]) => any>;

export function ConvertReturnedValuesToJSON(funcs: FuncMap) {

  const converted: Record<string, any> = {};

  Object.keys(funcs).forEach(key => {
    const newKey = `${key}JSON`;
    converted[newKey] = (...args: Parameters<FuncMap[typeof key]>) => {
      const result = funcs[key](...args);
      return JSON.stringify(result);
    }
  });

  return converted;

}

// Usage:

const funcs = {
  repeat(val: string, times: number) {
    const arr: string[] = [];
    for (let i = 0; i < times; ++i) {
    arr.push(val);
    }
    return arr;
  },
  
  wrap(value: number) {
    return { value }
  }
}

const convertedFuncs = ConvertReturnedValuesToJSON(funcs);

console.log(convertedFuncs)
//convertedFuncs.repeatJSON('test', 2); 
//convertedFuncs.wrapJSON(123);