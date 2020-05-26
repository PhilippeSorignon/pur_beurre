import React from 'react';
import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Contact from '../components/Contact';


function Home() {
  return (
    <>
      <Navbar />
      <Masthead />
      <About />
      <Contact />
    </>
  );
}

export default Home;
