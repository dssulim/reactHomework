import '../App.css';
import {Routes, Route} from "react-router-dom";
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "./Layout";
import HomePageContainer from "./containers/HomePageContainer";
import ChatsListContainer from "./containers/ChatsListContainer";
import ChatContainer from "./containers/ChatContainer";
import ProfilePage from "./presentational/ProfilePage";
import PageNotFound from "./PageNotFound";
import CountPageContainer from "./containers/CountPageContainer";


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
            <Route index element={<HomePageContainer/>}/>
            <Route path={'/chats'} element={<ChatsListContainer/>}/>
            <Route path={'/chats/:chatId'} element={<ChatContainer/>}/>
            <Route path={'/profile'} element={<ProfilePage/>}/>
            <Route path={'/count'} element={<CountPageContainer/>}/>
            <Route path={'*'} element={<PageNotFound/>}/>
          </Route>
        </Routes>

      </ThemeProvider>
    </div>
  );
}

export default App;
