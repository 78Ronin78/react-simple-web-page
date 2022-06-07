import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

function App() {
  let dateTimeNow = new Date().toLocaleString();
  let helloWorldReactElement = <h1>Hello world!</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span>Current date and time is {dateTimeNow}.</span>
        {helloWorldReactElement}
        <Clock></Clock>
      </header>

    </div>

  );
  
}

export default App;
