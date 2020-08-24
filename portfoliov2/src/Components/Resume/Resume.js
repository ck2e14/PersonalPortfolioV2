import React from 'react'
import './Resume-style.css'
import background from '../../Assets/Media/code32.jpg'
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import cv from '../../Assets/Media/resume.pdf'

const Resume = () => {
   return(
      <>


         <img src={background} alt="" className="resume-background"/>
         <div className="resume-title">Resume<span>.</span></div>
         <a href="https://drive.google.com/uc?export=download&id=1qcO1gjAVS813sJUr2MFIIhraHeCdem66" className="resume-download-link">Direct Download Link</a>

         <div className="resume-wrapper" id="resume-wrapper">
            <embed src={cv} type="application/pdf" className="resume-embed" width="50%" height="70%" />  

         </div>

         <ScrollArrow scrollToLocation={'contact-wrapper'} arrowClassName={'resume-scroller'}/>

      </>
   )
}
export default Resume