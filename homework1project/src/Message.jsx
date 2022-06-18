import React from "react";

function Message({userName}){
    //console.log({userName}, userName);
    return (
        <p className="Message-hello">
            Hello, I'm chat-{ userName.user1 }
        </p>
    )
}

export default Message;