import React from 'react'
import "./css/Navebar.css"

import { useState, useEffect } from 'react'

export default function Navebar(props) {
  
  useEffect(() => {
    
    document.querySelector('.fitem1').style.color = props.switch_modes === 'dark' ? '' : '#484747';
    
    
  }, [props.switch_modes]);

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const handleNavClick = (linkNumber) => {
    props.change_link(linkNumber)
    const backgroundColor = linkNumber === "1" ? "" :
      props.switch_modes === "dark" ? "rgba(21, 24, 32, 0.9)" : "rgba(187, 187, 187, 0.9)"
    props.set_backgound_nav(backgroundColor)
    setOpen(false) // Close mobile menu when clicking nav item
  }
  
  const toggleTheme = () => {
    props.set_modes(props.switch_modes === "dark" ? "light" : "dark")
    const backgroundColor = ["2", "3", "4", "5", "6"].includes(props.curr_link)
      ? (props.switch_modes === "dark" ? "rgba(187, 187, 187, 0.9)" : "rgba(21, 24, 32, 0.9)")
      : "";
    props.set_backgound_nav(backgroundColor);
  }
  return (
    <>
    
    
    <div className='fcontainer' style={{backgroundColor:props.backgound_nav}}>

    <div className='fitem1 hover-glow'>
      <b>Portfolio<span className="pulse">&#9679;</span></b>
    </div>

    <div className='nav-items'>
      <a onClick={() => handleNavClick("1")} className="fitem hover-lift" style={{"--i":1, color:(props.curr_link==="1"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        Home
      </a>
      <a onClick={() => handleNavClick("2")} className='fitem hover-lift' style={{"--i":2, color:(props.curr_link==="2"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        About
      </a>
      <a onClick={() => handleNavClick("3")} className='fitem hover-lift' style={{"--i":3, color:(props.curr_link==="3"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        Projects
      </a>
      <a onClick={() => handleNavClick("4")} className='fitem hover-lift' style={{"--i":4, color:(props.curr_link==="4"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        Contact
      </a>
      <a onClick={() => handleNavClick("5")} className='fitem hover-lift' style={{"--i":5, color:(props.curr_link==="5"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        Skills
      </a>
      <a onClick={() => handleNavClick("6")} className='fitem hover-lift' style={{"--i":6, color:(props.curr_link==="6"?"#0ef":props.switch_modes==="dark"?"white":"#484747")}}>
        Certificates
      </a>

      <div className="light_dark hover-lift" onClick={toggleTheme} style={{boxShadow:props.switch_modes==="dark"?"":"6px 6px 12px #a1a0a0, -6px -6px 12px #d4d2d2"}}>
        <i className="bx bxs-moon" style={{color:props.switch_modes==="dark"?"":"#484747"}}></i>
        <i className="bx bxs-sun" style={{color:props.switch_modes==="dark"?"":"#0ef"}}></i>
        <span className="ball" style={{transform:props.switch_modes==="dark"?"":"translateX(33px)",backgroundColor:props.switch_modes==="dark"?"":"#484747"}}></span>
      </div>
    </div>

    <div onClick={toggleMenu} className="toggle-button hover-glow">
      {open ? (
        <i className="fa-solid fa-xmark" style={{ color: props.switch_modes === "dark" ? "white" : "#484747" }}></i>
      ) : (
        <i className="fa fa-solid fa-bars" style={{ color: props.switch_modes === "dark" ? "white" : "#484747" }}></i>
      )}
    </div>




      <div className={`drop-menu ${open ? "open" : ""}`} style={{backgroundColor: props.switch_modes === "dark" ? "rgba(247, 243, 243, 0.95)" : "rgba(72, 71, 71, 0.95)"}}>
        <a onClick={() => handleNavClick("1")} className="fitem hover-lift" style={{"--i":1, color:(props.curr_link==="1"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          Home
        </a>
        <a onClick={() => handleNavClick("2")} className='fitem hover-lift' style={{"--i":2, color:(props.curr_link==="2"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          About
        </a>
        <a onClick={() => handleNavClick("3")} className='fitem hover-lift' style={{"--i":3, color:(props.curr_link==="3"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          Projects
        </a>
        <a onClick={() => handleNavClick("4")} className='fitem hover-lift' style={{"--i":4, color:(props.curr_link==="4"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          Contact
        </a>
        <a onClick={() => handleNavClick("5")} className='fitem hover-lift' style={{"--i":5, color:(props.curr_link==="5"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          Skills
        </a>
        <a onClick={() => handleNavClick("6")} className='fitem hover-lift' style={{"--i":6, color:(props.curr_link==="6"?"#0ef":props.switch_modes==="dark"?"#151820":"white")}}>
          Certificates
        </a>
      </div>
    </div>
    
    
    
    </>
  )
}
