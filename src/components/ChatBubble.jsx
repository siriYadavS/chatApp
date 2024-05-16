import { Typography } from '@mui/material';
import React from 'react';

const ChatBubble = ({ message, isSender }) => {
  const bubbleClass = isSender ? 'sent' : 'received';
  const { text, file ,timestamp} = message;

  const renderMessageContent = () => {
    if (file) {
      return (
        <a href={URL.createObjectURL(file)} download={file.name}>
          {file.name}
        </a>
      );
    } else {
      return <Typography>{text}</Typography>;
    }
  };

//Each Chat Bubble
  return (
    <div className={`chat-bubble ${bubbleClass}`}>
      {renderMessageContent()}
      <div className="timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatBubble;
