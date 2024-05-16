  import {  Button, IconButton, Input, Modal, TextField } from "@mui/material";
  import React, { useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  import SendIcon from "@mui/icons-material/Send";
  import CloseIcon from '@mui/icons-material/Close';

  const ChatInput = ({ sendMessage }) => {
    const [text, setText] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [file, setFile] = useState(null);


    const handleSubmit = (e,type) => {
     e.preventDefault();
      if (text.trim() !== "") {
        sendMessage(text,"text");
        setText("");
      }
      if (file !== null) {
        sendMessage(file,"file");
        setFile(null); 
      }
    };

    const handleOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        setText(selectedFile.name);
        setOpenModal(false)
      }
    };
    
  
    //Chat Text and document input field
    return (
      <>
      <form onSubmit={handleSubmit} className="chat-input">
        <IconButton color="primary" size="large" onClick={handleOpenModal}>
          <AddIcon/>
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="small"
          autoFocus
        />
        <IconButton 
          type="submit"
          variant="contained"
          size="small"
          color="primary"
        >
          <SendIcon/>
        </IconButton>
      </form>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="attachment-modal-title"
        aria-describedby="attachment-modal-description"
      >
        <div className="modal-container">
         <div className="icon-conatiner">
            <h2 id="attachment-modal-title">Add Attachments</h2>
            <IconButton variant="contained" onClick={handleCloseModal} className="close-icon" style={{textAlign:"right"}}>
            <CloseIcon/>
            </IconButton>
          </div>
          <div>
            <Input type="file" onChange={handleFileChange} />
          </div>

          
        </div>
      </Modal>
    </>
    );
  };

  export default ChatInput;
