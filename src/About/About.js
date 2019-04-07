import React from 'react';
import style from './About.module.css';
import NavBar from '../NavBar/NavBar.js';


const About = () => {

    return (
      <div className='App'>
        <NavBar />
        <div className={style.about}>
          I'm a full stack web developer with a passion for solving problems and creating intuitive user interfaces. Combining my technical skills and background in research, I approach problems from a user-focused and data-driven view, producing clean and effective solutions.
        </div>
      </div>
    );

}

export default About;