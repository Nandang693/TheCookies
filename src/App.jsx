import { useState } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Product from '../src/components/Product';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-backup scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
