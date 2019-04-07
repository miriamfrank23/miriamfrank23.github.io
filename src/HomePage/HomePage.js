import React, { Component } from 'react';
import pic from './pic.png';
import style from './HomePage.module.css';
import NavBar from '../NavBar/NavBar.js';

class HomePage extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className={style.landingPage}>
          <span>
            Miriam Frank
          </span>
          <img alt='' src={pic}/>
          <span>full stack developer based in Queens, NY</span>
          <a href="mailto:miriamfrank23@gmail.com">miriamfrank23@gmail.com</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
