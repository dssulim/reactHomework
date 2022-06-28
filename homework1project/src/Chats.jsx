import React from 'react';
import {ListItem, ListItemText} from '@mui/material';


const Chats = ({chatName}) => {
    return (
        <ListItem>
            <ListItemText primary={'chat: ' + chatName}/>
        </ListItem>
    );
};

export default Chats;