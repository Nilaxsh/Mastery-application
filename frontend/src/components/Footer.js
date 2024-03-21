import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="footer-wrapper">
       
      
      <div className="footer-section-two">

      <div className="footer-section-columns">
          <span><img src={Logo} alt="" width="100px"/></span>
          <span>Sustainability</span>
          <span>Financial Efficiency</span>
          <span>user-friendly</span>
        </div>
     

        <div className="footer-section-columns">
          <span>Contact info</span>
          <span>mastery@gmail.com</span>
          <span>0211234567</span>
          <span>Srilanka.</span>
         
        </div>
      
        <div className="footer-section-columns">
          <span>Quik Links</span>
          <span>Home</span>
          {/* <span>About</span> */}
          <span>About</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
