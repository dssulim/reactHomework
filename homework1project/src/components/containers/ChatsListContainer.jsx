import React, {useState} from 'react';
import {List, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../../redux/reducers/chatsReducer/chatsSelector";
import {CHAT_ADD, CHAT_DELETE} from "../../redux/actionTypes";
import ChatList from "../presentational/ChatList";

const ChatsListContainer = () => {
    const chatList = useSelector(getChats);
    //console.log(chatList);
    //TODO: нужно мемизировать что? если нужно, то что и как именно? пересмотреть лекцию 5.
    // Сейчас при каждом вводимом символе в инпуте появляется этот сонсоль-лог с массивом чатов. Значит компонент рендерится?
    const dispatch = useDispatch();

    const deleteChat = (id) => {
        dispatch({type: CHAT_DELETE, payload: id, meta: {delay: 3000}});
    };

    const rand = () => Math.floor(Math.random()*1000000);

    const [newChatName, setNewChatName] = useState('');

    const handleChange = (e) => {
        setNewChatName(e.target.value);
    };

    const addNewChat = () => {
        const obj = {
            id: rand(),
            name: newChatName,
            messages: []
        };
        dispatch({type: CHAT_ADD, payload: obj, meta: {delay: 1000}});
    }

    return (
        <>
            <Typography variant={'h5'} component={'div'}>Список Чатов</Typography>
            <input type="text" placeholder={'имя нового чата'} onChange={handleChange}/> <button onClick={addNewChat}>Добавить новый чат</button>
            <List component={'nav'}>
                {chatList.map((chat)=>{
                    return (
                        <ChatList key={chat.id} chat={chat} deleteChat={deleteChat}/>
                    )
                })}
            </List>
        </>
    );
};

export default ChatsListContainer;