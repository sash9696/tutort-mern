import React from "react";

//render props pattern

//another way of making a component reusable
//render prop is prop on a component which value is a function
//that returns a jsx element

// const Title = (props) => props.render();

const Title = (props) => (
  <>
    {props.renderFirstComponent()}
    {props.renderSecondComponent()}
    {props.renderThirdComponent()}
  </>
)

function App() {
  return (
    <div>
      {/* <Title render={() => <h1>I am a render prop</h1>} />
      <Title render={() => <h1>Title 2</h1>} />
      <Title render={() => <h1>Title 3</h1>} /> */}
      <Title
        renderFirstComponent={() => <h1>Title 1</h1>}
        renderSecondComponent={() => <h2>Title 2</h2>}
        renderThirdComponent={() => <h3>Title 3</h3>}
      />
    </div>
  );
}

export default App;
