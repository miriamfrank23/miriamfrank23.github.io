import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage.js";
import About from "./About/About.js";
import Work from "./Work/Work.js";
import Resume from "./Resume/Resume.js";

const App = (props) => {

  return (
    <Router>
    <a className="name" href="./">Miriam Frank</a>
        <div>
          <Route exact path="/" component ={ HomePage } />
          <Route exact path="/about" component ={ About } />
          <Route exact path="/work" component ={ Work } />
          <Route exact path="/resume" component ={ Resume } />
        </div>
    </Router>
  )
}

export default App;
