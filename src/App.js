import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './component/Homepage';
import Navebar from './component/Navebar';
import Skills from './component/Skills';
import Certificate from './component/Certificate';
import About from './component/About';
import Particle from './component/Particle';
import Contacts from './component/Contacts';
import Projects from './component/Projects';
import './component/css/ScrollComponent.css';

function App() {
  const [switch_modes, set_modes] = useState('dark');
  const [curr_link, change_link] = useState('1');
  const [backgound_nav, set_backgound_nav] = useState('');

  const backgroundColor1 = ['2', '3', '4', '5', '6'].includes(curr_link)
    ? '#1f242f'
    : '#151820';
  document.body.style.backgroundColor = switch_modes === 'dark' ? backgroundColor1 : '#EAEAEA';

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      let activeSection = '1';

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop - windowHeight / 2 && 
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
          activeSection = (index + 1).toString();
        }
      });

      change_link(activeSection);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call handleScroll once to set initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(`section${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Particle switch_modes={switch_modes} set_modes={set_modes} />
      <Navebar
        change_link={(link) => {
          change_link(link);
          scrollToSection(link);
        }}
        switch_modes={switch_modes}
        set_modes={set_modes}
        curr_link={curr_link}
        backgound_nav={backgound_nav}
        set_backgound_nav={set_backgound_nav}
      />

      <section id="section1">
        <Homepage switch_modes={switch_modes} set_modes={set_modes} />
      </section>

      <section id="section2">
        <About switch_modes={switch_modes} set_modes={set_modes} />
      </section>

      <section id="section3">
        <Projects switch_modes={switch_modes} set_modes={set_modes} />
      </section>

      <section id="section4">
        <Contacts switch_modes={switch_modes} set_modes={set_modes}/>
      </section>

      <section id="section5">
        <Skills switch_modes={switch_modes} set_modes={set_modes} />
      </section>

      <section id="section6">
        <Certificate switch_modes={switch_modes} set_modes={set_modes} />
      </section>
    </>
  );
}

export default App;
