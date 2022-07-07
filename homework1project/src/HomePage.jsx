import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import Messages from "./Messages";

const HomePage = () => {
    const [messageList, setMessageList] = useState([]); //{id: 12345, author: 'Vasya', text: 'text'}
    //компонент должен быть управляемым и для каждого инпута сделаем состояние с начальным значением - пустая строка.
    const [messageAuthor, setMessageAuthor] = useState('');
    const [messageText, setMessageText] = useState('');
    const [botMarker, setBotMarker] = useState(true);
    const refForFocus = useRef(null);
    const random = () => Math.round(Math.random()*1000000);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessageList(prevState => [...prevState, {id: random(), author: messageAuthor, text: messageText}]);
        setBotMarker(false);
        console.log(messageList);
    }

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

            refForFocus.current?.focus(); //если элемент есть, то установить фокус

        }, [messageList, botMarker]
    );

    return (
        <>
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