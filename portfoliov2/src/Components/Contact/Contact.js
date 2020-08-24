import React from 'react';
import './Contact-style.css'
// import background from '../../Assets/Media/code10.jpg'
import background from '../../Assets/Media/code33.jpg'
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import linkedInLogo from '../../Assets/Media/linkedInIcon.png'
import emailIcon from '../../Assets/Media/emailIcon.png'
import githubIcon from '../../Assets/Media/githubIcon.png'

const Contact = () => {
   return (
      <>
         <img src={background} alt="" className="contact-bg"/>

         <div className="contact-wrapper" id="contact-wrapper">

            <div className="contact-contents">

               <p>
                  I am looking for <span>full-time opportunities in web development</span>, frontend or fullstack. Whilst I love working primarily with <span>JavaScript</span>, I am always looking to learn new stacks and technologies. <span>I work hard, learn quickly, and I'm always available</span> to debug or refactor! I'm not afraid of irregular working hours, nor do I clock-off from high-priority work just because a working day has ended. 
               </p>

               <div className="icons-wrapper">

                  <a href="https://linkedin.com/in/christopher-w-kennedy" className="linkage" target="_blank" rel="noopener noreferrer">
                     <div className="tooltip">LinkedIn</div>
                     <img src={linkedInLogo} alt="" className="link-icon linkedin"/>
                  </a>
                  
                  <a href="https://github.com/ck2e14" className="linkage" target="_blank" rel="noopener noreferrer">
                  <div className="tooltip">GitHub</div>
                     <img src={githubIcon} alt="" className="link-icon github"/>
                  </a>
                  
                  <a href="mailto:chriswkennedy@icloud.com" className="linkage" target="_blank" rel="noopener noreferrer">
                  <div className="tooltipEmail">Email</div>
                     <img src={emailIcon} alt="" className="link-icon email"/>
                  </a>
                  
               </div>

            </div>

         </div>

         <ScrollArrow scrollToLocation={'landing-bg'} arrowClassName={'contact-scroller'}/>

      </>
   )
}

export default Contact