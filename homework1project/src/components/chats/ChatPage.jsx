import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChats} from "../../redux/reducers/chatsReducer/chatsSelector";
import Messages from "../Messages";
import PageNotFound from "../PageNotFound";

const ChatPage = () => {
    const {chatId} = useParams();
    console.log(chatId);
    const chat = useSelector(getChats).filter((item)=> item.id === Number(chatId))[0];
    console.log(chat);
    if (!chat) return <PageNotFound/>;
    return (
        <div>
            <h1>chat: {chat.name}</h1>
            {chat.messages.map((message)=>{
                return (
                    <div className={'Message-output'} key={message.id}>
                        <Messages author={message.name} text={message.message}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ChatPage;