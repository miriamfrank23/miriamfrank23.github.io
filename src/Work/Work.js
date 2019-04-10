import React from 'react';
import style from './Work.module.css';
import NavBar from '../NavBar/NavBar.js';
import * as FontAwesome from 'react-icons/lib/fa'


const Work = () => {

    return (
      <div className='App'>
        <NavBar />
        <div className={style.main}>
          <div className={style.project}>
            <h3>
              Book Ends
            </h3>
            <div>Web application for exploring, tracking, and chatting about mystery books</div><br/>
            <a href="https://github.com/miriamfrank23/Book-Ends-frontend">
              <FontAwesome.FaGithub />
            </a>
            <iframe src="https://player.vimeo.com/video/310054916" width="640" height="400" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen={true}></iframe>
          </div>
          <div className={style.project}>
            <h3>
              Fantasy Recipes
            </h3>
            <div>Fantasy-themed recipe site for sharing Harry Potter, Lord of the Rings, or Star Wars recipes with other fans</div><br/>
            <a href="https://github.com/miriamfrank23/Fantasy-Recipes-frontend">
              <FontAwesome.FaGithub />
            </a>
            <iframe src="https://player.vimeo.com/video/310059656" width="640" height="400" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen={true}></iframe>
          </div>
          <div className={style.project}>
            <h3>
              Single Player SET
            </h3>
            <div>TBD</div><br/>
            <a href="https://github.com/miriamfrank23/Set-Clone-frontend">GitHub</a>
          </div>
        </div>
      </div>
    );

}

export default Work;
