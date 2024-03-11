import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () =>{
    return (
<div className="footer">
    <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
            <div>
                <p style={{marginBottom: "1rem"}}>Sundhara, Lalitpur, Nepal </p>
                
            </div>
        </div>
        <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
            +977-9869638561, 9803436194
            </h4>
        </div>
        <div className="email">
            <h4>
                
            <FaMailBulk size={20} style={{color: "white", marginRight: "2rem" }}/>
            rubinshrestha323@gmail.com
            </h4>
            
            
        </div>
        </div>
        <div className="right"> 
        <h4> About Myself</h4>
        <p> This is Rubin Shrestha. I am a Front-end Developer Enthusiast and a student of Computing, I enjoy discussing new projects, facing new challenges, developing web application.</p>
        <div className="social">
        <a href="https://www.facebook.com/rubin.shrestha.313/">
            <FaFacebook size={30} style={{color: "white", marginRight: "1rem" }} />
        </a>
        <a href="https://www.instagram.com/rubinshrestha_/">
        <FaInstagram size={30} style={{color: "white", marginRight: "1rem" }}/>
        </a>
        <a href="https://www.linkedin.com/in/rubin-shrestha-7b980126b/">
        <FaLinkedin size={30} style={{color: "white", marginRight: "1rem" }}/>
        </a>
        <a href="https://github.com/rubinsh12">
        <FaGithub size={30} style={{color: "white", marginRight: "1rem" }}/>
        </a>
        </div>
        
        
        
        
        
        
        </div>

    </div>

</div>
    )
}

export default Footer;