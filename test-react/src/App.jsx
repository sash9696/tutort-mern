import { useState } from "react";
import "./App.css";

function Counter() {
  //state => data encapsulated within a component

  let [count, setCount] =   useState(0);

  // let count= 0;

  function increment(){
    // alert('clicked')
    setCount(count + 1);
  }

  console.log(`Counter rendered `)

  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={increment} >Increment</button>
    </div>
  );
}

function App() {
  const [isRender, setisRender] = useState(false);

  console.log(`App rendered `)

  return (
    <div>
      
      <Counter />
      <button onClick={() => setisRender(!isRender)} >Toggle</button>
    </div>
  );
}

export default App;
