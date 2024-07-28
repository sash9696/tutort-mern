import React, { useEffect, useState } from 'react'

//if u want to update components state based on props and sate changes

//common cases where we dont need effects
// transforming data for rendering
//handling user events

// function App() {

//   const [fName, setFName] = useState('John');
//   const [lName, setLName] = useState('Doe');

//   // const [fullName, setFullName] = useState('');

//   //complicated, inefficient
//   //it does an entire render with the stale value
//   // useEffect(() => {
//   //   setFullName(`${fName} ${lName}`)
//   // }, [fName, lName])

//   //remove unecessary state and effects

//   //Note
//   //when something can be calculated from existing state or props then dint put it in a state
//   //in that case calculate during rendering
//   const fullName = fName + " " + lName;

//   console.log(fullName)

//   return (
//     <div>App</div>
//   )
// }

// export default App


//2nd example
import React, { useEffect, useState } from 'react'

// function TodoList({todos, filter}){

//   const [newTodo, setNewToDo] = useState("");

//   // const [visibleTodos, setVisibleTodos] = useState([]);

//   // useEffect(() => {
//   //   setVisibleTodos(getFilteredTodos(todos, filter))
//   // }, [todos, filter])

//   const visibleTodos = getFilteredTodos(todos, filter);


// }


//reset all the state when a prop changes
function ProfilePage({userId}){
  const [comment, setComment] = useState('');

  //inefficient because children will also first render with a stale value
  // useEffect(() => {
  //   setComment('');
  // }, [userId])


  const handleSubmit = () => {
    console.log('Comment submmited: ', comment);
    setComment('');
  }

  return (
    <div>
      <h1>Profile page for user: ${userId}</h1>
      <textarea value={comment} placeholder='Write a comment' onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleSubmit} >
        Submit Comment
      </button>
    </div>
  )
}

function App() {

  const [userId, setUserId] = useState(1);
  
  const handleChangeUser = () => {
    setUserId((prevUserId) => (prevUserId === 1 ? 2 : 1));
  }
  return (
    <div>
      {/* <TodoList/> */}
      <button onClick={handleChangeUser} >
        Switch User
      </button>
  {/* <ProfilePage key={userId} userId={userId} /> */}




    </div>
  )
}

export default App



// imagine u have 10k mesages
// item1 1  item0 0 
// item2 2  item1 1
// item3 3  item2 2
//          item3  3