import CountdownTimer from './Challenge/CountdownTimer';
import { convertReturnedValuesToJSON } from './Challenge/ConvertReturnedValues';


function App() {
  // Convert Return Value Usage:

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

  const convertedFuncs = convertReturnedValuesToJSON(funcs);

  console.log(convertedFuncs)
  //convertedFuncs.repeatJSON('test', 2); 
  //convertedFuncs.wrapJSON(123);
  return (
    <>
      <CountdownTimer countdownSeconds={10} onComplete={()=> console.log("complete")} />
    </>
  );
}

export default App;
