import React from 'react';
import style from './Work.module.css';
import NavBar from '../NavBar/NavBar.js';


const Work = () => {

    return (
      <div className='App'>
        <NavBar />
        <div className={style.main}>
          Projects
          <div>
            <iframe src="https://player.vimeo.com/video/310054916" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <div>
            <iframe src="https://player.vimeo.com/video/310059656" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );

}

export default Work;