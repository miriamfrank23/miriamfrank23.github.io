import React from "react";
import style from "./About.module.css";
import NavBar from "../NavBar/NavBar.js";
import pic from "../main-pic.jpg";

const About = () => {
  return (
    <div className="App">
      <NavBar />
      <div className={style.about}>
        <span>
          I'm a full stack web developer with a passion for solving problems and
          creating intuitive user interfaces. I approach problems from a
          user-focused and data-driven view, producing clean and effective
          solutions.
        </span>
        <span>
          I also love running, reading mysteries, and watching The Office on an
          infinite loop.
        </span>
      </div>
      <img alt="" src={pic} />
    </div>
  );
};

export default About;
