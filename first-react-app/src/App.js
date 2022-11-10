import logo from './logo.svg';
import './App.css';

const h1Style = {
  "fontSize":"30px",
  "color": "#cc0000",
  "backgroundColor": "red",
  "textTransform": "uppercase"


};

function App() {
  return (
    <div className="App">
      <h1 style={h1Style}>Gillian's React Page</h1>
      <h2 className="bio">This is my first React page I created it on 3rd November 2022</h2>
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
      </header>
    </div>
  );
}

export default App;
