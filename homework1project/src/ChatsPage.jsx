import React, {useState} from 'react';
import {List, Typography} from "@mui/material";
import Chats from "./Chats";

const ChatsPage = () => {
    const [chatsList] = useState([
        {id: 1, name: 'family', messages: [{id: 1, name: 'mather', message: 'Hello everybody'}, {id: 2, name: 'father', message: 'Hello'}]},
        {id: 2, name: 'work', messages: [{id: 1, name: 'Anna_work', message: 'Hello everybody'}, {id: 2, name: 'Petter_work', message: 'Hello'}]},
        {id: 3, name: 'friends', messages: [{id: 1, name: 'friend1', message: 'Hello my friends'}, {id: 2, name: 'friend2', message: 'Hello everybody'}]},
        {id: 4, name: 'other', messages: [{id: 1, name: 'someOther1', message: 'Hello people'}, {id: 2, name: 'someOther2', message: 'Hi :)'}]}
    ]);

    return (
        <>
            <Typography variant={'h5'} component={'div'}>Список Чатов</Typography>
            <List component={'nav'}>
                {chatsList.map((chat)=>{
                    return (
                        <Chats chat={chat} key={chat.id} disablePadding/>
                    )
                })}
            </List>
        </>
    );
};

export default ChatsPage;