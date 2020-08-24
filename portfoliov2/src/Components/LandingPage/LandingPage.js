import React from 'react'
import './LandingPage-style.css'
// import code1 from '../../Assets/Media/code12.jpg'
import code1 from '../../Assets/Media/code29.jpg'   
// import code1 from '../../Assets/Media/code9.jpg'   
// import code1 from '../../Assets/Media/code13.jpeg'   
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import logo from '../../Assets/Media/cwklogo.png'

const LandingPage = () => {

   return(
      <>

         <img src={code1} alt="" className="landing-bg" id="landing-bg"/>

         {/* <img src={logo} alt="" className="logo"/> */}

         <div className="landing-wrapper" id='landing-wrapper'>
         
            <div className="my-name-is">
               Hi<span className="chris-span">, </span> 
               I<span className="chris-span">'</span>m Chris<span className="chris-span">.</span> <br/> 
               <span>I design <span className="chris-span2">&</span> develop web apps that help make people<span className="chris-span2">'</span>s lives easier<span className="chris-span2">.</span></span>
            </div>

         </div>

         <ScrollArrow 
            scrollToLocation={'about-me-wrapper'} 
            arrowClassName={'landing-scroller'} 
            id={'landing-scroller'}
         />
         
      </>
   )
}

export default LandingPage