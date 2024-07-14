import "./App.css";

// function Greetings(props){

//   console.log('props',props)

//   return <h1>Hi {props.name} and age is {props.age}</h1>
// }
// function Greetings(props){

//   console.log('props',props)

//   const {name, age} = props

//   return <h1>Hi {name} and age is {age}</h1>
// }
// function Greetings({name, age}){

//   return <h1>Hi {name} and age is {age}</h1>
// }


function Greetings(){

  return <h1>Greetings for day</h1>
}

function greetings (){
  return <Greetings />
}

function App() {
  return (
   <>
    {/* <Greetings name='Vipin' age={24} />
    <Greetings name='John' age={30}/>
    <Greetings name='peter' age={40}/>
    <Greetings name='a' age={58}/> */}

    {/* <Greetings/> */}
    {greetings()}
    {/* {Greetings()}  */}
    {/* not recommend */}

   </>
  );
}

export default App;
