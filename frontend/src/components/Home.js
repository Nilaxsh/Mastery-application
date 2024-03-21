import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/police-officer-regulating-road-with-cars-man-sitting-car-policeman-standing-allowing-drive-further-hand-gesture_575670-323-removebg-preview.png";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contactform"
import CardImage from './Card'

const Home = () => {
  const navigate = useNavigate();
  const [isshow,setIsshow]=useState(false)
  const [product , setProduct] = useState({
    name :'Post Your Add',
    price : '500000*100',
    productBy : 'DirectHire'
  })
  const makePayment = (token) => {
    const body = {
      token,
      product
    }
    const headers ={
      'Content-Type':"application/json"
    }
    return fetch('http://localhost:5007/api/users/payment',{
      method:'POST',
      headers,
      body :JSON.stringify(body)
    }).then(() => {
      navigate("/learners", { state: { isshow: true } });
      console.log(isshow)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          gear up for success in your driving written exam with Mastery
          </h1>
          <p className="primary-text">
          We guide you to your driver's license with confidence. Our passionate team empowers learners for success on the road.
          </p>
        
          <button className="secondary-button"  onClick={()=>navigate("/login", { state: { isshow } })}>
           Get Started <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <div id="about">
      <About/>
      </div>
      <CardImage/>
      <div id="contact">
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
