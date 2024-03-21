import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import "../payment.css"
const Payment = () => {
  const navigate = useNavigate();
  const [product , setProduct] = useState({
    name :'Post Your Add',
    price : 300000,
    productBy : 'DirectHire'
  })
  const jwttoken = localStorage.getItem("token")
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
        console.log(user)
        if(user.ispaid){
          navigate("/learners")
        }
      } catch (error) {
        // Handle fetch errors
        console.error('Fetch error:', error);
      }
    };

    fetchUserData();
  }, [jwttoken]); 
  const makePayment = async (token) => {
    const body = {
      token,
      product
    };
  
    try {
      const response = await fetch('http://localhost:5007/api/users/payment', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Authorization': `${jwttoken}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Payment request failed');
      }
      navigate("/learners");
      // const mailResponse = await fetch('http://localhost:5007/api/users/sentmail', {
      //   method: 'POST',
      //   body: JSON.stringify(body),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
  
      // if (!mailResponse.ok) {
      //   throw new Error('Sending mail failed');
      // }
  
      
    } catch (err) {
      console.error(err);
    }
  };
  
  return(
    <div className="start">
      <div class="masterywrapper">

  
<div class="overviewInfo">
  <div class="actions">
    <div class="backbutton ">
 
    </div>
    <div class="cartbutton neurobutton"> 

    </div>
  </div>
  
  <div class="info">
   
    
    <div class="grouptext">
       <h3>Detail of payment</h3>
       
    </div>
    
    
    <div class="productImage">
      <img src={require("../Assets/pay1.png")} alt="product: ps5 controller image"/>
    </div>

</div>
</div> 


<div class="productSpecifications">
 
  <p> For a nominal fee of just 3000 rupees, you gain access to our extensive collection of study notes and a series of model exams.  </p>
  
 
  
  <div class="checkoutButton">
    <div class="priceTag">
      <span>Rs</span>3000
    </div>
    <div>
     <StripeCheckout
       name="Payment"
       amount={product.price}
       currency="LKR"
       token={makePayment}
       stripeKey="pk_test_51OmC71JJhMGJrvn8vY9KJu3YPBqUBmTpfU9er3ECydcK4lysdODm1PoEechm6dHKF9XZRIDITRHf0CvuHc70xNLW00xEMZSAoj"
     >
      
     </StripeCheckout>
    </div>
  </div>
</div>


      </div>
    
    </div>
  )
}
export default Payment


