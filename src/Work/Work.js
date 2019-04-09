import React from 'react';
import style from './Work.module.css';
import NavBar from '../NavBar/NavBar.js';


const Work = () => {

    return (
      <div className='App'>
        <NavBar />
        <div className={style.main}>
          Projects
        </div>
      </div>
    );

}

export default Work;