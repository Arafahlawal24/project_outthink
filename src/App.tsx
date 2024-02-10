import CountdownTimer from './Challenge/CountdownTimer';


function App() {
  return (
    <>
      <CountdownTimer countdownSeconds={10} onComplete={()=> console.log("complete")} />
    </>
  );
}

export default App;
