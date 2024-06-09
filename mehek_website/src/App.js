import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home.js";
import Software from "./pages/Software";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import { Helmet } from "react-helmet";


function App() {
  document.documentElement.style.height = "100%";
  document.body.style.backgroundColor = "#E1E0D8";
  document.body.style.height = "100%";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

  return (
    <div className="App">
      <Helmet>
        <title>Mehek Mehra </title>
      </Helmet>
      <div className="routing">
        <Router basename="/">

            <Routes>
                <Route exact path="/mehek" element={<Home />} />
                <Route path="/software" element={<Software />} />
                <Route path="/art" element={<Art />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
      </div>
    </div>
    
  );
}

export default App;
