import React from 'react';
import {ListItem, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";

const ChatList = ({chat, deleteChat}) => {
    return (
            <ListItem>
                <Link to={`/chats/${chat.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItemText primary={'chat: ' + chat.name}/>
                </Link>
                <button onClick={()=>deleteChat(chat.id)}>x</button>
            </ListItem>
    );
};

export default ChatList;