import React from 'react';
import ChatScreen from './components/ChatScreen';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

const App=()=> {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
      <h1>Chat Screen Assignemnt</h1>
        <ChatScreen />
      </div>
  </ThemeProvider>
  );
}

export default App;
