import './App.css';
import React from "react";
import Navigation from "./navigation";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import CS from "./pages/cs";
import Art from "./pages/art";
import Contact from "./pages/contact";
import { ScrollFade } from './navigation/initialize.js';

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
      <div className="routing">
        <Router>
          <ScrollFade text={'Mehek Mehra'} />
          <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/software" element={<CS />} />
                <Route path="/art" element={<Art />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
      </div>
    </div>
    
  );
}

export default App;
