import React from 'react'
import "./css/About.css"
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About(props) {
  const [about_popup,set_about_popup]=useState(false)
  const [scroll, set_scroll] = useState(false)

  const titleRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();

  useEffect(() => {
    document.querySelector(".About-container").style.filter =about_popup? "blur(15px)" : "";

}, [about_popup]);

 
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="about-outer-container">
        <div className='About-container' id="about-back" >

          <div className="about-image-container" ref={imageRef}>
            <img
              id="about-image"
              src={`${process.env.PUBLIC_URL}/all_images/geas_pogi.png`}
              className="scale-in hover-lift"
              alt="Geaser Jan Gadingan"
              onLoad={() => console.log('Image loaded successfully')}
              onError={(e) => console.error('Image failed to load:', e.target.src)}
            />
          </div>
          
          <div className="About-content">
            <h4
              ref={titleRef}
              className="slide-down"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              About<span className="gradient-text"> Me</span>
            </h4>
            <h3
              className="slide-in-left"
              style={{color:props.switch_modes==="dark"?"":"#484747"}}
            >
              An aspiring software engineer.
            </h3>
            <div className='about-para'>
              <p
                ref={contentRef}
                className="para slide-up"
                style={{color:props.switch_modes==="dark"?"":"#484747"}}
              >
                As a web developer, I've been actively exploring the world of web development by learning JavaScript, CSS, HTML, and React. I've built several projects using these technologies. Recently, I've also started exploring Web3 and blockchain development using Python, with a focus on AI and machine learning.
              </p>
            </div>

            <button
              ref={buttonRef}
              onClick={()=>set_about_popup(about_popup? false : true)}
              className='btn hover-glow zoom-in'
              style={{display:"flex","--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}}
            >
              <b> Read more</b>
            </button>
            
          </div>

          
        </div>

        <div className={`popup_about ${about_popup?"popup_about_active":""}`}  style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
          <i onClick={()=>set_about_popup(about_popup? false : true)} className="fa-solid fa-circle-xmark hover-glow"></i>
          <h3>About <span className="gradient-text">Me!</span></h3>
          <div className='popup_about_content'>
            <p className="para">As a web developer, I’ve been actively exploring various technologies, focusing on tech stacks like MERN, Laravel, and Django. I’ve built several projects using these frameworks. Recently, I’ve also started diving into Web3 and blockchain development using Python, with a particular interest in AI and machine learning—where I see exciting opportunities to apply my skills and create innovative solutions.<br/><br/>

            I'm especially passionate about combining AI and machine learning with web development to build intelligent, responsive web applications. Leveraging Python libraries such as TensorFlow and Keras, I’m able to create predictive models that enhance user experience and improve overall performance when integrated into real-world applications.<br/><br/>

            Outside of my academic pursuits, I actively engage in tech communities, collaborating with like-minded individuals to exchange ideas, grow professionally, and stay inspired. I'm a fast learner, a strong team player, and possess solid analytical and problem-solving skills. I constantly seek to stay updated with the latest advancements in Blockchain, AI, and evolving tech trends.<br/><br/>

            If you'd like to connect or have an opportunity to share, feel free to reach out. Thank you for visiting my portfolio!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
