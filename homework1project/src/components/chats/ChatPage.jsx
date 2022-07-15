import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChats} from "../../redux/reducers/chatsReducer/chatsSelector";
import Messages from "../Messages";

const ChatPage = () => {
    const params = useParams();
    console.log(params);
    const chat = useSelector(getChats).filter((item)=> item.id === +(params.chatId))[0];
    console.log(chat);
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