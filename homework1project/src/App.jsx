//import logo from './logo.svg';
import './App.css';
//import Message from "./Message";
import React, {useState, useEffect} from "react";

function App() {
  //const props = {user1: 'bot'}
  const [messageList, setMessageList] = useState([]); //{id: 12345, author: 'Vasya', text: 'text'}
  //компонент должен быть управляемым и для каждого инпута сделаем состояние с начальным значением - пустая строка.
  const [messageAuthor, setMessageAuthor] = useState('');
  const [messageText, setMessageText] = useState('');
  const [botMarker, setBotMarker] = useState(true);


  const random = () => Math.round(Math.random()*1000000);

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

  )

  }, [messageList, botMarker]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessageList(prevState => [...prevState, {id: random(), author: messageAuthor, text: messageText}]);
    setBotMarker(false);
    console.log(messageList);
  }



  return (
    <div className="App">
      <header className="App-header">
        {/*<Message userName={props}/>*/}

        <form className={'Form'} onSubmit={handleSubmit}>
          <input value={messageAuthor} onChange={(e)=>setMessageAuthor(e.target.value)} placeholder={'username'} className={'Message-input'}/>
          <textarea value={messageText} onChange={(e)=>setMessageText(e.target.value)} placeholder={'your message'} className={'Message-input'}/>
          <button className={'Button'} type={'submit'}>отправить</button>
        </form>

        <div>
          {messageList.map((message)=> {
            return (
                <div key={message.id} className={'Message-output'}>
                  <div className={'Message-output-first'}>
                    author: <span className={'Message-output-author-name'}> {message.author}</span>
                  </div>
                  <div className={'Message-output-first'}>
                    message: <span className={'Message-output-text'}>{message.text}</span>
                  </div>
                </div>
            )
          })}
        </div>

        {/*<a className="App-link" href="https://ru.reactjs.org/" target="_blank" rel="noopener noreferrer"> ru.ReactJS.org </a>*/}
      </header>
    </div>
  );
}

export default App;
