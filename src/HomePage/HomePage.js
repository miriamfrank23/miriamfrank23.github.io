import React, { Component } from 'react';
import pic from './pic2.png';
import style from './HomePage.module.css';
import NavBar from '../NavBar/NavBar.js';

class HomePage extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
          {/* <>
          <div className={style.description}>software engineer based in Queens, NY</div>
          <div className={style.icons}>
            <a href="mailto:miriamfrank23@gmail.com" className={style.email}>
              miriamfrank23@gmail.com
            </a>
          </div>
          </> */}
        <div className={style.landingPage}>
          <img alt='' src={pic}/>
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
