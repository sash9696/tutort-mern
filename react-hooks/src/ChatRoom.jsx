import React, { useEffect, useState } from 'react'
import './App.css'
import { createNewConnection } from './chat';


function ChatRoom({roomId}){

  const [serverUrl, setServerUrl] = useState('https://localhost:6686/');

  const [state,setState]  = useState({
    roomId,
    serverUrl
  })

  //interact to the external system

  useEffect(() => {
    //create a new connection 

    const connection  = createNewConnection(serverUrl, roomId);
    connection.connect();

    //when the effect is cleaned up
    //if component unmounts, or before the effect is re-run with the changes in dependecies
    return () => {
      connection.disconnect();
    }
  }, [serverUrl, roomId])



  return (
    <>
      <label>
        Server URL: {" "}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  )

}

function App() {
  const [roomId, setRoomId] = useState('javascript');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room: {" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="javascript">javascript</option>
          <option value="react">react</option>
          <option value="css">css</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)} >
        {show  ? 'Close chat' : 'Open chat' }
      </button>

      {show && <hr/>}

      {show && <ChatRoom roomId={roomId} /> }
    </>
  )
}

export default App