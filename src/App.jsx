import React from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#050505] text-white min-h-screen selection:bg-purple-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Ambient Background Effect */}
      <BackgroundEffect />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Journey />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}