import React from "react";

function Messages({author, text}){
    return (
        <>
            <div className={'Messages-output-first'}>
                <span style={{width: '90px', display: 'inline-block'}}>author:</span> <span className={'Messages-output-author-name'}> {author}</span>
            </div>
            <div className={'Messages-output-first'}>
                <span style={{width: '90px', display: 'inline-block'}}>message:</span> <span className={'Messages-output-text'}>{text}</span>
            </div>
        </>
    )
}

export default Messages;