import React, { useEffect, useRef } from 'react';
import './App.css'; // Optional: Import your CSS file for styling
import {Home,About,Services,WorkProcess,Portfolio,OurTeam,Contact, Navbar} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PopUp, PostCard, User } from './component';


const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const workProcessRef = useRef(null);
  const portfolioRef = useRef(null);
  const ourTeamRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = (e) => {
    // Optional: Implement logic to highlight active section in navbar based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollToRef]);

  return (
    <BrowserRouter>
    <Navbar/>
    <Home innerRef={homeRef}/>
      <About innerRef={aboutRef}/>
      <Services innerRef={servicesRef}/>
      <WorkProcess innerRef={workProcessRef} />
      <Portfolio innerRef={portfolioRef}/>
      <OurTeam innerRef={ourTeamRef}/>
      <Contact innerRef={contactRef}/>
      <Routes>
      <Route path='/login' element={<User/>}/>
      <Route path='/card/:id' element={<PopUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
