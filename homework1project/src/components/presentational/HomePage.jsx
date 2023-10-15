import React from 'react';
import {Button, TextField} from "@mui/material";
import Messages from "./Messages";

const HomePage = ({handleSubmit, messageAuthor, setMessageAuthor, messageText, setMessageText, refForFocus, messageList}) => {
    return (
        <>
            <h1>Home Page</h1>
            <form className={'Form'} onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Name" variant="standard" value={messageAuthor} required onChange={(e)=>setMessageAuthor(e.target.value)} />
                <TextField id="outlined-multiline-static" label="Your message" multiline rows={4} value={messageText} required onChange={(e)=>setMessageText(e.target.value)} inputRef={refForFocus}/>
                <Button variant="outlined" type={'submit'}>Отправить</Button>
            </form>
            {messageList.map((message)=> {
                return (
                    <div className={'Message-output'} key={message.id}>
                        <Messages author={message.author} text={message.text}/>
                    </div>
                )
            })}
        </>
    );
};

export default HomePage;