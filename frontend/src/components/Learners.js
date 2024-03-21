import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../Learners.css' 
import { Link, useLocation, useNavigate } from "react-router-dom";
import myImage from '../../src/Assets/exam.png';
import myImage2 from '../../src/Assets/exam-removebg-preview (2).png';
import StripeCheckout from "react-stripe-checkout";



const Learners = () => {
  const navigate = useNavigate();
  const [product , setProduct] = useState({
    name :'Post Your Add',
    price : 500000,
    productBy : 'DirectHire'
  })
  const jwttoken = localStorage.getItem("token")
  const [ispaid , setIsPaid] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5007/api/users/get-one-user', {
          method: 'GET',
          headers: {
            'Authorization': `${jwttoken}`
          }
        });

        if (!response.ok) {
          // Handle non-successful response (e.g., log error, show a message)
          console.error(`HTTP error! Status: ${response.status}`);
          return;
        }

        const user = await response.json();
        setIsPaid(user.ispaid || false); 
      } catch (error) {
        // Handle fetch errors
        console.error('Fetch error:', error);
      }
    };

    fetchUserData();
  }, [jwttoken]); 
  
  return (
      <div>
      <Navbar/>
      <div className="search-container">
       
    
      </div>
      
       
        <div className="image-wrapper">

        <Link to="/learners/notes">
          <div className="media">
            <div className="overlay"></div>
            <img
        src={myImage}
        alt="Description of the image"
        style={{ width: '100%', height: '100%' }}
      />

            <div className="image-details">
              <p> Notes</p>
            </div>
          </div>
       </Link>
          
          <Link to ='/learners/QuizQuestionList'>
          <div className="media">
            <div className="overlay"></div>
            <img
        src={myImage2}
        alt="Description of the image"
        style={{ width: '100%', height: 'auto' }}
      />
            <div className="image-details">
              <p>Exam </p>
            </div>
          </div>
          </Link>
         
          
        </div>
      <Footer/>
    </div>
    
  );
};

export default Learners;
