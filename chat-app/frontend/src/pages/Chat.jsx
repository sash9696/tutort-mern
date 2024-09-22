import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Contacts from "../components/Contacts";
import { allUsersRoute } from "../utils/APIRoutes";
import axios from 'axios';
export default function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    } else {
      setCurrentUser(JSON.parse(localStorage.getItem("chat-app-user")));
    }
  }, []);
  const getContacts = async () => {
    const response = await axios.get(`${allUsersRoute}/${currentUser._id}`);
    setContacts(response.data);
  };
  useEffect(() => {
    if (currentUser) {
      if (currentUser?.isAvatarImageSet) {
        getContacts();
      } else {
        navigate("/setAvatar");
      }
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} onChangeChat={handleChatChange} />

          {/* <ChatContainer/> */}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div``;
