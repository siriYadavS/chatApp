import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { Avatar, Typography } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate receiving a message from the contact after component mounts
    receiveMessageFromContact("Hello! How's it going?");
  }, []); 

  const sendMessage = (message, type) => {
    if (type === "text") {
      const newMessage = {
        id: uuidv4(),
        text: message,
        sender: "user",
        timestamp: moment().format("LT"),
      };
      setMessages([...messages, newMessage]);
    } else if (type === "file") {
      const newMessage = {
        id: uuidv4(),
        file: message,
        sender: "user",
        timestamp: moment().format("LT"),
      };
      setMessages([...messages, newMessage]);
    }
  };
  
  

  // Simulate receiving a message from the contact
const receiveMessageFromContact = (text) => {
  const newMessage = {
    id: uuidv4(),
    text,
    sender: 'contact',
    timestamp: moment().format('LT'),
  };
  setMessages([...messages, newMessage]);
  
};

//Chat screen similar to whatsapp
  return (
    <div className="chat-screen">
      <div className="chat-label">
      <div className="chat-avatar">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Typography variant='h5' className="sender-name">Remy Sharp</Typography>
      </div>
      
      <div className="chat-avatar">
        <VideocamIcon fontSize="large" />
        <CallIcon fontSize="large"/>
      </div>
      </div>
      <div className="chat-container">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message}
            isSender={message.sender === 'user'} 
          />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatScreen;
