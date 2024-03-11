import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/introduction.jpg"
import { Link } from "react-router-dom";

const HeroImg =() =>{
    return(

    <div className="hero">
<div className="mask">
  <img className="into-img" 
  src={IntroImg} alt="IntroImg"/>
</div>
<div className="content">
    <p>Hello, Welcome to My Profile.</p>
    <h1>Front-End Enthusiast.</h1>
    <div>
        <Link to="/project" className="btn">
        Projects</Link>
        <Link to="/contact" className="btn btn-light">
        Contacts</Link>
    </div>

</div>
    </div>
    );

};

export default HeroImg;