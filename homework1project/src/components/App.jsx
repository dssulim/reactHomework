import '../App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "./Layout";
import HomePage from "./home/HomePage";
import ChatsPage from "./chats/ChatsPage";
import ChatPage from "./chats/ChatPage";
import ProfilePage from "./profile/ProfilePage";
import PageNotFound from "./PageNotFound";
import CountPage from "./count/CountPage";


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
            <Route path={'/chats/:chatId'} element={<ChatPage/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/count'} element={<CountPage/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
          </Route>
        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
