import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <img
        className="logo"
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149446597/settings_images/6thtVskQCeH0idy0rFKw_HeatherSteeleLogo-outlines.png"
        height="60px"
        width="300px"
      />

      <h1 className="">Courses Grid 01</h1>

      <Home></Home>
    </div>
  );
}

export default App;
