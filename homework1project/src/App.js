//import logo from './logo.svg';
import './App.css';
import Message from "./Message";

function App() {
  const name = 'Darya Sulimova';
  return (
    <div className="App">
      <header className="App-header">
        <Message userName={name}/>
        <a
          className="App-link"
          href="https://sun9-52.userapi.com/s/v1/ig2/UKmsV3FHqd-Qe7lTAlPDFgsOBd9HT1VUvCG-xs5g1ewy0L64bL3-3t-OLBlJ6Tp_p_MngiYeSD6bn5M1zm1KKaZ_.jpg?size=860x508&quality=95&type=album"
          target="_blank"
          rel="noopener noreferrer"
        >
          Look
        </a>
      </header>
    </div>
  );
}

export default App;
