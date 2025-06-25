import React from 'react';
import './css/Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = (props) => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <div className="skills-container" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{textAlign: 'center', color: props.switch_modes === "dark" ? "white" : "#484747"}}>
        <h1 
          ref={titleRef}
          className="fade-in gradient-text"
        >
          Skills
        </h1>
        <p 
          ref={contentRef}
          className="slide-in-right"
        >
          Skills section coming soon...
        </p>
        <div className="pulse" style={{fontSize: '3rem', margin: '20px auto', color: '#0ef'}}>
          <i className="bx bx-code-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Skills;