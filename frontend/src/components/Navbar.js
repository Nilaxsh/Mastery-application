
import React, { useEffect, useState } from "react";
import Logo from "../Assets/Logo.png" ;
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [islogedIn,setIsLogedIn]=useState(false)
  const navigate = useNavigate();
  const handleloginclick = () => {
    navigate('/login')
  }
  const jwttoken = localStorage.getItem("token")
  const [ispaid , setIsPaid] = useState(false);
  useEffect(() => {
    if(jwttoken){
      setIsLogedIn(true)
    }
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
  const handleLogout = async () => {
    try {
    const response = await fetch('http://localhost:5007/api/users/logout', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
   
})
    if (!response.ok) {
  toast.error('Error  Loging out');
  throw new Error('Error logging out');
  }else{
  const data = await response.json();
  console.log(data.message)
    localStorage.removeItem("token")
    navigate("/")
    window.location.reload();

    toast.success(data.message);
 }
  } catch (error) {
  console.error(error);
  return error
  }
};
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" width="150px"/>
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
       { ispaid && <a href="/learners/notes">Tutorials</a>}
        {ispaid && <a href="/learners/QuizQuestionList">Exam</a>}
      
        { !islogedIn && <button className="primary-button" onClick = {handleloginclick}>Login Now</button>}
        { islogedIn && <button className="primary-button" onClick = {handleLogout}>Log Out</button>}

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
