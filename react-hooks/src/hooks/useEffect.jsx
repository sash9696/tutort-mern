import React, { useEffect, useState } from "react";
import "./App.css";
//useEffect
//side effects
//connect to an external system

//useEffect(callback, dependencyArray(optional))

function App() {
  // const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(false);

  // //it will whenever the component renders
  // useEffect(function(){
  //   console.log(`useEffect 1 runs`)
  // })

  //  //it will run only once after component mounts
  // useEffect(function(){
  //   console.log(`useEffect runs`)
  // }, [])

  console.log(`App rendered`);

  return (
    <div>
      {isShow && <Counter />}

      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`useeffect runs`);

    return () => {
      console.log(`component is about to unmount`);

    }
  }, [])

  console.log(`Counter rendered`);

  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}

export default App;
