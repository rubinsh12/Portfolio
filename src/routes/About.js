import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import VideoApp from '../components/VideoApp';

const About= () => {
    return <div>
        <Navbar />
        <HeroImg2 heading="ABOUT." text="I am a Front-end Enthusiast and Ui/Ux Designer " />
        <VideoApp />
        <AboutContent />
        <Footer />
    </div>
}

export default About;