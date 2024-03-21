import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginOrSignup from './components/LoginOrSignup';
import Learners from './components/Learners';
import '../src/App.css'
import Payment from './components/Payment';
import AllNotes from './Notes/Noteget';
import { FaAllergies } from 'react-icons/fa';
import Contact from './components/Contactform';
import QuizQuestions from './Questions/Questionget';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card'
import About from './components/About';
import ContactForm from './components/Contactform';


function App() {
  return (
   
    <BrowserRouter>

 
     
     <ToastContainer/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Footer' element= {<Footer/>}/>
        <Route path="/login" element={<LoginOrSignup />} />
        <Route path="/learners" element={<Learners/>} />
        <Route path="/learners/notes" element={<AllNotes/>} />
        <Route path="/learners/QuizQuestionList" element={ <QuizQuestions/>} />
        <Route path="/pay" element={<Payment/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/steps" element={<Card/>} />
        <Route path="/contact" element={<ContactForm/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
