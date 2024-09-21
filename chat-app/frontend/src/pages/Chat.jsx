import React, { useState,useEffect } from 'react'
import styled from 'styled-components';

export default function Chat() {

    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    
    useEffect(() => {
        if(!localStorage.getItem("chat-app-user")){
            navigate('/login');

        }else{
            setCurrentUser(
                JSON.parse(
                    localStorage.getItem("chat-app-user")
                )
            )
        }
      }, [])


  return (
    <>
        <Container>
            <div className='container'>
                {/* <Contacts/>

                <ChatContainer/> */}
            </div>

        </Container>
    </>
  )
};

const Container = styled.div`
`;
