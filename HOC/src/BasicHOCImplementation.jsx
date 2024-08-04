import React from "react";

//HOC Pattern

//HOC is a component that recieves anither component



function withStyles(Component){
  return props => {
    const style= {padding:'10rem', margin:'1rem'};
    console.log('props',{props,style})
    return <Component style={style} {...props} />
  }
};
const Button = (props) => <button {...props} > Click me </button>;
const Text = (props) => <p {...props}> This is a text </p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);


function App() {
  return <div>
    <h1>App</h1>
    <StyledButton/>
    <StyledText/>
  </div>;
}

export default App;
