

import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/zebra-crossing-road-composition_1284-17917-removebg-preview.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About Section Image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          What is Mastery
        </h1>
        <p className="primary-text">
Welcome to Mastery, your top online spot for mastering the details of driving. Enjoy free access to the driver handbook and sample papers. Start your learning adventure with Mastery, where excellence and convenience meet, all from the comfort of your home.
        </p>
       
      </div>
    </div>
  );
};

export default About;

