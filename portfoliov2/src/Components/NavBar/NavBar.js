import React from 'react'
import './NavBar-style.css'
import {
   // BrowserView,
   // MobileView,
   // isMobile,
   isSafari,
   isChrome
} from "react-device-detect";
import { 
   // Link, 
   // DirectLink, 
   // Element, 
   // Events, 
   // animateScroll as scroll, 
   // scrollSpy, 
   scroller 
} from 'react-scroll'

const NavBar = () => {

   const scrollToSection = (elemId) => {
      if(isSafari || isChrome){
      scroller.scrollTo(elemId, {
         duration: 1000,
         delay: 0,
         smooth: 'true'
      })} else {
         const elem = document.getElementById(elemId)
         const landingWrapperElem = document.getElementById('landing-wrapper')
         elem.scrollIntoView({behavior: "smooth"})
         landingWrapperElem.style.opacity = "0";
      }
   }

   return(
      <div className="navbar-wrapper" id="navbar">

         <div className="navbar-flex-wrapper">

            <div className="nav-item" onClick={() => scrollToSection('about-me-wrapper')} >About</div>
            
            <div className="nav-item" onClick={() => scrollToSection('projects-wrapper')} >Projects</div>

            <div className="nav-item" onClick={() => scrollToSection('resume-wrapper')}  >Resume</div>

            <div className="nav-item" onClick={() => scrollToSection('contact-wrapper')}  >Contact</div>

         </div>

      </div>
   )
}

export default NavBar