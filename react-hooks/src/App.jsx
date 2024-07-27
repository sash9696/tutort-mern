import React, { useRef, useState } from 'react'

function App() {

  const counterRef = useRef(0);
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);

function handleClick(){
  counterRef.current  = counterRef.current + 1;

  alert(`You clicked ${counterRef.current} times`)
}


console.log(inputRef)
  return (
    <div>
      {/* <h1>Counter: {counterRef.current}</h1> */}
      <input ref={inputRef} />
      <button onClick={handleClick} >
        Increment
      </button>
      <button onClick={() => setShow(!show)} >Toggle</button>
    </div>
  )
}

export default App