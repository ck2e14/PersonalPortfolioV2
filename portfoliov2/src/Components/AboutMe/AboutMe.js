import React from 'react'
import './AboutMe-style.css'
import code3 from '../../Assets/Media/code28.jpg'
import SkillsCard from './SkillsCard/SkillsCard'
import ScrollArrow from '../ScrollArrow/ScrollArrow'

const AboutMe = () => {
   return(
      <>
         <div className="about-me-wrapper" id="about-me-wrapper">

            <div className="title-bar">About Me <span>&</span><br/> Technical Skills<span>.</span></div>
            
            <img src={code3} alt="" className="about-bg"/>
            
            <div className="about-blurb" id='about-blurb'>
               I am a junior <span> full-stack web developer.</span> I love creating and delivering <span>performant,</span> <span>powerful</span> & <span>attractive</span> user experiences, particularly in React.js, supported by Rails backends.<br/><br/>
               Since graduating from FlatIron's immersive software engineering course in January, I've levelled-up my full-stack skillset through personal & commercial projects. <br/><br/>
               I am quietly <span>confident,</span> naturally <span>curious,</span> and <span>always learning</span> new skills and new technologies.
            </div>

         </div>
  
         <SkillsCard />

         <ScrollArrow scrollToLocation={'projects-wrapper'} arrowClassName={'about-scroller'}/>
      </>
   )
}

export default AboutMe