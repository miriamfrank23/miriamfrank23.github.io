import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import HomePage from './HomePage/HomePage.js';
import About from './About/About.js';
import Work from './Work/Work.js';

const App = () => {

  return (
    <Router>
    <div className='name'>Miriam Frank</div>
        <div>
          <Route exact path="/" component ={ HomePage } />
          <Route exact path="/about" component ={ About } />
          <Route exact path="/work" component ={ Work } />
        </div>
    </Router>
  )
}

export default App;
