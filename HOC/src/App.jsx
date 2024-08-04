import React from 'react'
import './App.css'
import DogImages from './DogImages'

//simple app without loader is container/presentational pattern
//Container , presentational
// Container pass data to presentational components
//presentational components gets the data through props

//hooks pattern

function App() {
  return (
    <div className='app'>
      <h1>
        Browse Dog Images

      </h1>
      <DogImages />
    </div>
  )
}

export default App