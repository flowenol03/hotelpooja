import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X, ChevronDown, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MenuSection from './components/Menu';
import Bar from './components/Bar';
import About from './components/About';
import Gallery from './components/Gallery'; // Import Gallery Component
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} scrollPosition={scrollPosition} />
      
      <main>
        <Hero />
        <MenuSection />
        <Bar />
        <About />
        <Gallery /> {/* Added Gallery Section Here */}
        <Reservation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
