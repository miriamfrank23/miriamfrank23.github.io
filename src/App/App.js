import React, { Component } from 'react';
import pic from './pic.png';
import style from './App.module.css';
import NavBar from '../NavBar/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <NavBar />
        <div className={style.landingPage}>
          <h3>
            Miriam Frank
          </h3>
          <img alt='' src={pic}/>
          <p>full stack developer based in Queens, NY</p>
          <a href='miriamfrank23@gmail.com'>miriamfrank23@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default App;
