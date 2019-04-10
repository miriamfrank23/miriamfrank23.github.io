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
            <div className={style.info}>
              <h3>
                Book Ends
              </h3>
              <a href="https://github.com/miriamfrank23/Book-Ends-frontend">
                <FontAwesome.FaGithub />
              </a>
              <a href="https://vimeo.com/310059656">
                <FontAwesome.FaVimeo />
              </a>
              <div>Web application for exploring, tracking, and chatting about mystery books</div><br/>
            </div>
          </div>
          <div className={style.project}>
        
            <div className={style.info}>
              <h3>
                Fantasy Recipes
              </h3>
              <a href="https://github.com/miriamfrank23/Fantasy-Recipes-frontend">
                <FontAwesome.FaGithub />
              </a>
              <a href="https://vimeo.com/310054916">
                <FontAwesome.FaVimeo />
              </a>
              <div>Fantasy-themed recipe site for sharing Harry Potter, Lord of the Rings, or Star Wars recipes with other fans</div><br/>
            </div>
          </div>
          <div className={style.project}>
            <div className={style.info}>
              <h3>
                Single Player SET
              </h3>
              <div>TBD</div><br/>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Work;
