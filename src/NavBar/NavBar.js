import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom'


const NavBar = () => {

    return (
      <div className={style.bar}>
        <NavLink to="/" className={style.navLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={style.navLink}>
          About
        </NavLink>
        <NavLink to="/work" className={style.navLink}>
          Projects
        </NavLink>
        <NavLink to="/resume" className={style.navLink}>
          Resume
        </NavLink>
      </div>
    );

}

export default NavBar;
