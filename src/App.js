import React from 'react'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Price from './Components/Price';
import Services from './Components/Services';
import Team from './Components/Team';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
