import React from 'react'
import Typed from "react-typed"
import "./css/Homepage.css"
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export default function Homepage(props) {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const socialRef = useStaggerAnimation(4);

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className='home-outer-container' id="cont3">
        <div className='home-inner-container' id="cont1">
          <div className='content-main'>
            <h3
              ref={titleRef}
              className="slide-down"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              Hello, IT's
            </h3>
            <h1
              ref={contentRef}
              className="slide-in-left"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              <b>Geaser Jan Gadingan</b>
            </h1>
            <h3
              id="my-skill-list"
              className="slide-in-right"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              <b>And I'm a <span id="types" className="gradient-text"><Typed strings={[" IT Student", "Javascript Developer", "Crypto Trader","NFT hunter"]} typeSpeed={80} backSpeed={80} loop /></span></b>
            </h3>
            <p
              className="slide-up"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              This is my portfolio Developer by me using React, Javascript,
              HTML and CSS. With all infromation about myself hope you will like it.
            </p>
          </div>

          <div className='logos' ref={socialRef}>
            <a 
              className="stagger-item hover-glow"
              target="_blank" 
              href="https://www.facebook.com/geaserjangadz" 
              style={{ "--i": 6 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}
            >
              <i className='bx bxl-facebook'></i>
            </a>
            <a 
              className="stagger-item hover-glow"
              target="_blank" 
              href="https://github.com/DhynzCode" 
              style={{ "--i": 7,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}
            >
              <i className='bx bxl-github'></i>
            </a>
            <a 
              className="stagger-item hover-glow"
              target="_blank" 
              href="https://www.instagram.com/geasy/" 
              style={{ "--i": 8 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}
            >
              <i className='bx bxl-instagram-alt' ></i>
            </a>
            <a 
              className="stagger-item hover-glow"
              target="_blank" 
              href="https://www.linkedin.com/in/geaser-jan-gadingan-553b84285/" 
              style={{ "--i": 9,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}
            >
              <i className='bx bxl-linkedin'></i>
            </a>
          </div>
          <div className="home-button">
            <a 
              href='My_resume.pdf' 
              className='btn hover-lift' 
              download={"My_resume.pdf"} 
              style={{"--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}} 
              id="button1"
            >
              <b>Download CV</b>
            </a>
          </div>
        </div>

        <div className='home-image' ref={imageRef}>
          <img 
            src="all_images/geas_pogi.png" 
            width={510} 
            height={450} 
            className="scale-in float"
          />
        </div>
      </div>
    </div>
  )
}
