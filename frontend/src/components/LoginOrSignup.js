import React, { useState } from "react";
import '../LoginOrSignup.css'
import { redirect, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {toast} from "react-toastify"

const LoginOrSignup = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = () => {
    setIsSignUp(true);
    };

    const handleSignInClick = () => {
    setIsSignUp(false);
    };

    const handleSignup = async () => {
    try {
          const response = await fetch('http://localhost:5007/api/users/reg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email,name:username,password:password})
          });
       
          if (!response.ok) {
        
          throw new Error('Error logging in');
          }
          const data = await response.json();
          console.log(data);
          if(response){
          navigate("/")
       
          }
          // return data;
        } catch (error) {
          console.error(error);
          return error
          }
    
          };
          const navigate = useNavigate();
          const handleUserSignin = async () => {
          try {
          const response = await fetch('http://localhost:5007/api/users/user-login', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({email:email,password:password})
      });
          if (!response.ok) {
          toast.error('Error  Login user');
          throw new Error('Error logging in');
          }else{
          const data = await response.json();
          console.log(data.message)  
          if (data.role == "admin"){
            window.location.href = "http://localhost:6002/";
            toast.success(data.message);
          }else{
            console.log(data)
          localStorage.setItem('token',data.token)
          navigate("/pay")
          
          toast.success(data.message);}
      }
          } catch (error) {
          console.error(error);
          return error
          }
  };
  // const handleAdminSignin = async () => {
  //         try {
  //         const response = await fetch('http://localhost:5007/api/users/admin-login', {
  //         method: 'POST',
  //         headers: {
  //         'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({email:email,password:password})
  //     });
  //         console.log(response);
  //         if (!response.ok) {
  //         toast.error('Error  Login user');
  //         throw new Error('Error logging in');
  //         }else{
  //         const data = await response.json();
  //         console.log(data);
  //         navigate("http://localhost:6002/")
  //         toast.success(data.message);
  //     }
  //         return data;
  //         } catch (error) {
  //         console.error(error);
  //         return error
  //         }
  // };
  return (
    <div className={`containerlogin ${isSignUp ? 'active' : ''}`} id="containerlogin">
      <div className={`form-containerlogin ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        {isSignUp ? (
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="UserName" onChange={(e) => setUserName(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="button" onClick={handleSignup}>Sign Up</button>
          </form>
        ) : (
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          
            <button type="button" onClick={handleUserSignin}>Login </button>
            {/* <button type="button" onClick={handleAdminSignin}>Login As Admin</button> */}
          </form>
          
        )}
      </div>
      <div className="toggle-containerlogin">
        <div className="toggle">
          <div className={`toggle-panel ${isSignUp ? 'toggle-left' : 'toggle-right'}`}>
            {isSignUp ? (
              <>
                <h1>Welcome Back!</h1>
                
                <button onClick={handleSignInClick}>Login </button>
              </>
            ) : (
              <>
                <h1>Hello,Learners!</h1>
              
                <button onClick={handleSignUpClick}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrSignup;
