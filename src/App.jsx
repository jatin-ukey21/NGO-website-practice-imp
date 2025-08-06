import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { useInView } from 'react-intersection-observer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [volunteerRef, volunteerInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInView) setActiveSection('hero');
    else if (aboutInView) setActiveSection('about');
    else if (volunteerInView) setActiveSection('volunteer');
  }, [heroInView, aboutInView, volunteerInView]);



  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scroll-smooth">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <div ref={heroRef}  id="hero">
          <Hero onNavigate={scrollToSection} />
        </div>

        <div ref={aboutRef} id="about">
          <About />
        </div>

        <div ref={volunteerRef} id="volunteer">
          <Volunteer />
        </div>
        <Footer />
      </main>
    </div>
  );
}
