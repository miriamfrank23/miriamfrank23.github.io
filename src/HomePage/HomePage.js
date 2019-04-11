import React, { Component } from 'react';
import pic from './pic.png';
import style from './HomePage.module.css';
import NavBar from '../NavBar/NavBar.js';
import * as FontAwesome from 'react-icons/lib/fa'

class HomePage extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className={style.landingPage}>
          <img alt='' src={pic}/>
          <span>full stack developer based in Queens, NY</span>
          <div className={style.icons}>
            <a href="mailto:miriamfrank23@gmail.com">
              miriamfrank23@gmail.com 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// <a href="https://github.com/miriamfrank23"> 
// GitHub
// </a>
// <a href="https://www.linkedin.com/in/miriam-frank/"> 
// LinkedIn
// </a>
export default HomePage;

