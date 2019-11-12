import React, { Component } from "react";
import pic from "../main-pic.jpg";
import style from "./HomePage.module.css";
import NavBar from "../NavBar/NavBar.js";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className={style.leftContainer}>
          <NavBar />
          <div className={style.description}>
            software engineer based in Queens, NY
          </div>
          <div className={style.icons}>
            <a href="mailto:miriamfrank23@gmail.com" className={style.email}>
              miriamfrank23@gmail.com
            </a>
          </div>
        </div>
        <img alt="" src={pic} />
      </div>
    );
  }
}

export default HomePage;
