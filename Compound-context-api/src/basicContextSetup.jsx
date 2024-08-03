import React, { createContext, useContext } from "react";

//create a context
const UserContext = createContext();
console.log(UserContext);

//use the provider to make data accessible

//use consumer to pull the data

function SignIn() {
  return (
    <>
      <h2>Sign In</h2>
    </>
  );
}

function SignOut() {
  return (
    <>
      <h2>Sign out</h2>
    </>
  );
}
function Login() {
  return (
    <>
      <SignIn />
      <SignOut />
    </>
  );
}

function Home() {
  //pull the data using consumer
  //usecontext

  const name = useContext(UserContext);

  return (
    <div>
      {/* <UserContext.Consumer>
        {(value) => <h1>{value}</h1>}
      </UserContext.Consumer> */}
      {name}
    </div>
  );
}
function App() {
  return (
    <UserContext.Provider value="John" >
      <div>
        <Login />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export default App;
