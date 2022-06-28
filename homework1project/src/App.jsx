import './App.css';
import React, {useState, useEffect, useRef} from "react";
import {TextField, Button, List, Typography, Box, Grid} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chats from "./Chats";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  const [messageList, setMessageList] = useState([]); //{id: 12345, author: 'Vasya', text: 'text'}
  //компонент должен быть управляемым и для каждого инпута сделаем состояние с начальным значением - пустая строка.
  const [messageAuthor, setMessageAuthor] = useState('');
  const [messageText, setMessageText] = useState('');
  const [botMarker, setBotMarker] = useState(true);
  const [chatsList] = useState([{id: 1111, chatName: 'family'}, {id: 2222, chatName: 'work'}, {id: 3333, chatName: 'friends'}, {id: 4444, chatName: 'other'}]);

  const refForFocus = useRef(null);

  const random = () => Math.round(Math.random()*1000000);

  useEffect(()=> {
    setMessageText('');
    console.log(messageList);

    setTimeout(()=>{
      if(!botMarker){
          let botMessage = `mrBot желает вам, ${messageList[messageList.length-1].author}, хорошего дня!`;
          setBotMarker(true);
          setMessageList(prevState => [...prevState, {id: random(), author: 'mrBot', text: botMessage}]);
        }
      }, Math.round(random()/100)
    );

    refForFocus.current.focus();

  }, [messageList, botMarker]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessageList(prevState => [...prevState, {id: random(), author: messageAuthor, text: messageText}]);
    setBotMarker(false);
    console.log(messageList);
  }



  return (
    <header className="App-header">
      <ThemeProvider theme={darkTheme}>
      <Box sx={{flexGrow: 1, width: '90%', marginTop: '20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={16}>
            <form className={'Form'} onSubmit={handleSubmit}>
              <TextField id="standard-basic" label="Name" variant="standard" value={messageAuthor} required onChange={(e)=>setMessageAuthor(e.target.value)} />
              <TextField id="outlined-multiline-static" label="Your message" multiline rows={4} value={messageText} required onChange={(e)=>setMessageText(e.target.value)} inputRef={refForFocus}/>
              <Button variant="outlined" type={'submit'}>Отправить</Button>
            </form>
          </Grid>
          <Grid item xs={3}>
            <Typography variant={'h5'} component={'div'}>Список Чатов</Typography>
            <List component={'nav'}>
              {chatsList.map((chat)=>{
                return (
                    <Chats chatName={chat.chatName} key={chat.id} disablePadding/>
                )
              })}
            </List>
          </Grid>
          <Grid item xs={4}>
            {messageList.map((message)=> {
              return (
                  <div key={message.id} className={'Message-output'}>
                    <div className={'Message-output-first'}>
                      author: <span className={'Message-output-author-name'}> {message.author}</span>
                    </div>
                    <div className={'Message-output-first'}>
                      message: <span className={'Message-output-text'}>{message.text}</span>
                    </div>
                  </div>
              )
            })}
          </Grid>

        </Grid>

      </Box>
      </ThemeProvider>
    </header>
  );
}

export default App;
