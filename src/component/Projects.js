import React from 'react';
import './css/Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = (props) => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <div className="projects-container" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{textAlign: 'center', color: props.switch_modes === "dark" ? "white" : "#484747"}}>
        <h1 
          ref={titleRef}
          className="fade-in gradient-text"
        >
          Projects
        </h1>
        <p 
          ref={contentRef}
          className="slide-in-left"
        >
          Projects section coming soon...
        </p>
        <div className="loading-spinner" style={{margin: '20px auto'}}></div>
      </div>
    </div>
  );
};

export default Projects;