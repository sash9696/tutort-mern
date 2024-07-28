import React, { useEffect, useState } from 'react'
import './App.css'
import { createTodo, initialTodos } from './todos';


function TodoList(){

  const [todos, setTodos] = useState(initialTodos);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [showActive, setShowActive] = useState(false);
  const [activeTodos, setActiveTodos] = useState([]);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    setActiveTodos(todos.filter(todo => !todo.completed))
  }, [todos])


  useEffect(() => {
    setVisibleTodos(showActive ? activeTodos : todos)
  }, [showActive, todos, activeTodos])


  useEffect(() => {

    setFooter(
      <footer>
        {activeTodos.length} todos left
      </footer>
    )

  }, [activeTodos])


  return (
    <>
      <label>
        <input type='checkbox' checked={showActive} onChange={e => setShowActive(e.target.checked)} />
        Show only active todos
      </label><br/>
      <NewTodo onAdd = {(newTodo) => setTodos([...todos, newTodo]) } />

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ?  <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      {footer}
    </>
  )
}

function NewTodo({onAdd}){
const [text, setText] = useState('');

function handleAddClick(){
  setText('');

  //createTodo

  onAdd(createTodo(text))
  
}
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)}  />
      <button onClick={handleAddClick} >Add</button>
    </>
  )
}

function App() {
  return (
    <div>
      <TodoList/>
    </div>
  )
}

export default App