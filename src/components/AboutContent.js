import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react.jpg"
import React2 from "../assets/reactdev.jpg"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                
                <p>
                Hello there! I'm a Rubin Shrestha, a passionate Front-end Enthusiast with a love for crafting seamless and engaging digital experiences, armed with a keen eye for design and a knack for coding, I thrive on turning creative ideas into functional, user-friendly websites.
                </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            </div> 
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="value"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="value"/>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default AboutContent;