import logo from './logo.svg';
import './App.css';
import Pta from './components/Pta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Pta name='Phan Trường Anh' phone="1234556788" />
        <Pta name='Nguyễn Văn A' phone="2210900087" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
