import logo from "./logo.svg";
import "./App.css";
import { MemeCompontentPersil } from "./components/MemeComponent";

function downloadMemes() {
  fetch("http://localhost:3000/memes")
    .then((response) => response.json())
    .then((memes) => {
      console.log(memes);
    });
}

function App() {
  return (
    <div className="App">
      <script>{downloadMemes()}</script>
      <MemeCompontentPersil title="TEST1"></MemeCompontentPersil>
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
