import React, {useEffect, useRef, useState} from 'react';
import HomePage from "../presentational/HomePage";

const HomePageContainer = () => {
    const [messageList, setMessageList] = useState([]); //{id: 12345, author: 'Vasya', text: 'text'}
    //компонент должен быть управляемым и для каждого инпута сделаем состояние с начальным значением - пустая строка.
    const [messageAuthor, setMessageAuthor] = useState('');
    const [messageText, setMessageText] = useState('');
    const [botMarker, setBotMarker] = useState(true);
    const refForFocus = useRef(null);
    const random = () => Math.round(Math.random()*1000000);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessageList(prevState => [...prevState, {id: random(), author: messageAuthor, text: messageText}]);
        setBotMarker(false);
        console.log(messageList);
    }

    useEffect(()=> {
            setMessageText('');
            console.log(messageList);

            setTimeout(()=>{
                    if(!botMarker){
                        let botMessage = `mrBot желает вам, ${messageList[messageList.length-1].author}, хорошего дня!`;
                        setBotMarker(true);
                        setMessageList(prevState => [...prevState, {id: random(), author: 'mrBot', text: botMessage}]);
                    }
                }, Math.round(random()/100)
            );

            refForFocus.current?.focus(); //если элемент есть, то установить фокус

        }, [messageList, botMarker]
    );

    return (
        <HomePage handleSubmit={handleSubmit}
                  messageAuthor={messageAuthor}
                  setMessageAuthor={setMessageAuthor}
                  messageText={messageText}
                  setMessageText={setMessageText}
                  refForFocus={refForFocus}
                  messageList={messageList}
        />
    );
};

export default HomePageContainer;