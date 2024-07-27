import React, { useEffect, useRef, useState } from 'react'
import './App.css'

//state1 
//state2
//run the code when both state 1 and state2 has updated values


function App() {

  const [valueA, setValueA] = useState('A');
  const [valueB, setValueB] = useState('B');

   const prevValueA =  useRef(valueA);
   const prevValueB =  useRef(valueB);

   

  useEffect(() => {

    //check the current value with the updated value

    if(prevValueA.current !== valueA && prevValueB.current !== valueB){
      console.log(`Both valueA: ${valueA} and valueB: ${valueB} are updated`)
      prevValueA.current = valueA;
      prevValueB.current = valueB;
    }

   

  }, [valueA, valueB]);

  return (
    <div>
      <h1>Multple states</h1>
      <button onClick={() => setValueA(valueA == 'A' ? 'A1' : 'A')}>Toogle A</button>
      <button onClick={() => setValueB(valueB == 'B' ? 'B1' : 'B')}>Toogle B</button>

    </div>
  )
}

export default App