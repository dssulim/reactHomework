import './App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "./Layout";
import HomePage from "./HomePage";
import ChatsPage from "./ChatsPage";
import ChatPage from "./ChatPage";
import ProfilePage from "./ProfilePage";
import PageNotFound from "./PageNotFound";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <div className={'App'}>
      <ThemeProvider theme={darkTheme}>

        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/chats'} element={<ChatsPage/>}/>
            <Route path={'/chats/:chatName'} element={<ChatPage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
          </Route>
        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
