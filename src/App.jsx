import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ShaperReview from "./components/ShaperReview";
import Projects from "./components/Projects";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="shaper-review">
          <ShaperReview />
        </div>
        <div id="projects">
          <Projects />
        </div>
       
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
