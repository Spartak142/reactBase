import logo from "./logo.svg";
import "./App.css";
import { TimeOfDay } from "./functionsToCorrect";


function App() {
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
        <TimeOfDay />
        <br />
      </header>
    </div>
  );
}

export default App;
