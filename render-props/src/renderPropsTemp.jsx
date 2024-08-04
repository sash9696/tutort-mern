import React, { useState } from "react";
import "./App.css";

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in C"
      />
      {props.render(value)}
    </>
  );
}
function App() {
  return (
    <div className="app">
      <h1>Temperature Converter</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ value = 0 }) {
  return <div className="temp">{Number(value) + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(Number(value) * 9) / 5 + 32}F</div>;
}
export default App;
