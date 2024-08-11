import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>React Router</h1>

      <nav> 
        <Link to='/home'>Home</Link>&nbsp;&nbsp;
        <Link to='/about'>About</Link>

      </nav>

      <Routes>

        <Route index element = {<h1>Home</h1>} />
        <Route path='home' element = {<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='*' element = {<NoMatch/>} />



      </Routes>
    </>
  )
}

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  )
}

const NoMatch = () => {
  return (
    <>
      <p>There's nothing to show here</p>
    </>
  )
}

export default App