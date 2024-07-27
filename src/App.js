import React, { useEffect, useRef } from 'react';
import './App.css'; // Optional: Import your CSS file for styling
import {Home,About,Services,WorkProcess,Portfolio,OurTeam,Contact, Navbar} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PopUp, PostCard, User } from './component';


const App = () => {

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <BrowserRouter>
    <Navbar scrollv={scrollToRef}/>
      <Routes>
      <Route path='/' element={<FullPage />}/>
      <Route path='/login' element={<User/>}/>
      <Route path='/card/:id' element={<PopUp/>} />
      </Routes>
    </BrowserRouter>
  );
};


// make a single page with all this components

const FullPage =()=>{
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const portfolioRef = useRef(null);
  const ourTeamRef = useRef(null);
  const contactRef = useRef(null);



  const handleScroll = (e) => {
    // logic to highlight current section
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(
    <>
 <Home innerRef={homeRef}/>
      <About innerRef={aboutRef}/>
      <Services innerRef={servicesRef}/>
      <WorkProcess innerRef={workRef} />
      <Portfolio innerRef={portfolioRef}/>
      <OurTeam innerRef={ourTeamRef}/>
      <Contact innerRef={contactRef}/>

    </>
  )
}

export default App;
