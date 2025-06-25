import React from 'react';
import './css/Certificate.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certificate = (props) => {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <div className="certificate-container" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{textAlign: 'center', color: props.switch_modes === "dark" ? "white" : "#484747"}}>
        <h1 
          ref={titleRef}
          className="fade-in gradient-text"
        >
          Certificates
        </h1>
        <p 
          ref={contentRef}
          className="slide-in-left"
        >
          Certificates section coming soon...
        </p>
        <div className="float" style={{fontSize: '3rem', margin: '20px auto', color: '#0ef'}}>
          <i className="bx bx-certification"></i>
        </div>
      </div>
    </div>
  );
};

export default Certificate;