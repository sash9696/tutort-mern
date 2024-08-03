import React, { createContext, useContext } from "react";
import UserProvider, { useUserData } from "./contexts/UserProvider";
import ThemeProvider from "./contexts/ThemeProvide";
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

  const {userData,setUserData} = useUserData();
  return (
    <div>
      <h1>Home</h1>
      <h3>Name: {userData}</h3>
    </div>
  );
}

function Greetings({ children, name }) {
  return <h1>Greetings {children}</h1>;
}
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
      <div>
        <Login />
        <Home />

        <Greetings>
          <span>Peter</span>
        </Greetings>

        <Greetings>
          <span>Hi John</span>
        </Greetings>
      </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
