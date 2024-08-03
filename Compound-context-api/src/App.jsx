import React from 'react'
import ImagesList from './Images'
//compound pattern + context api
//components might belong to each other
//they are dependant on each other throught shared state, shared logic


//list of images
//each image has three dots icon on click displays a menu with edit and delete option



function App() {
  return (
    <div className='app'>
        <ImagesList />
    </div>
  )
}

export default App