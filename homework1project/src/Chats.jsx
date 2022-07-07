import React from 'react';
import {ListItem, ListItemText} from '@mui/material';
import {Link} from "react-router-dom";

const Chats = ({chat}) => {

    return (
        <ListItem>
            <Link to={`/chats/${chat.name}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <ListItemText primary={'chat: ' + chat.name}/>
            </Link>
        </ListItem>
    );
};

export default Chats;