import React from 'react';
import {useParams} from "react-router-dom";

const ChatPage = () => {
    const params = useParams();
    // console.log(params);
    return (
        <div>
            <h1>chat: {params.chatName}</h1>
        </div>
    );
};

export default ChatPage;