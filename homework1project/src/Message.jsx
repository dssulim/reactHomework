import React from "react";
import './Message.css';

function Message({ userName }){
    console.log({userName});
    return (
        <h1 className="Message-hello">
            Hello, {userName}
        </h1>
    )
}

export default Message;