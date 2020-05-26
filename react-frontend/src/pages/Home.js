import React from 'react';
import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <Masthead />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
