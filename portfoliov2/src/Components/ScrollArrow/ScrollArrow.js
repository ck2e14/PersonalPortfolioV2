import React from 'react';
import './ScrollArrow-style.css'
import downArrow from '../../Assets/Media/downArrow.png'
import {
   isSafari, isChrome
} from "react-device-detect";
import { 
   scroller 
} from 'react-scroll'

const ScrollArrow = props => {

   const { scrollToLocation, arrowClassName, id } = props

   const scrollToSection = (elemId) => {
      if(isSafari || isChrome){
      scroller.scrollTo(elemId, {
         duration:  1000,
         delay: 0,
         smooth: 'easeInOutQuint'
      })} else {
         const elem = document.getElementById(elemId)
         const landingWrapperElem = document.getElementById('landing-wrapper')
         elem.scrollIntoView({behavior: "smooth"})
         landingWrapperElem.style.opacity = "0";
      }
   }

   return(
      <div className={arrowClassName} id={id} onClick={() => scrollToSection(scrollToLocation)}>
         <img src={downArrow} alt="" className="down-arrow"/>
      </div>
   )
}

export default ScrollArrow