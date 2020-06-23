import React, {useState, useEffect} from 'react';
import './ProjectCard-style.css';
import CardCarousel from './CardCarousel/CardCarousel'

export default function ProjectCard(props) {

   const [ showFront, setShowFront ] = useState(true);
   const [ changeBackground, setChangeBackground ] = useState(false);

   useEffect(()=> {
   },[])

   const flickBackgroundimage = () => {
      setTimeout(()=> {
         setChangeBackground(!changeBackground);
      }, 2000)
   }

   const flipCardWithClick = () => {
      setShowFront(!showFront)
   }

   return (
      <div className='card-wrapper'
            onClick={flipCardWithClick}
            >
         {showFront ?  
            <div className="card-front">
               { changeBackground ? 
               <img src={props.media} alt="" onMouseLeave={flickBackgroundimage} onMouseEnter={flickBackgroundimage} onMouseMove={flickBackgroundimage} className="backdrop-card-front"/>
               :
               <img src={props.media2} onMouseEnter={flickBackgroundimage}  onMouseLeave={flickBackgroundimage} onMouseMove={flickBackgroundimage} alt="" className="backdrop-card-front"/>
               }
               <div onClick={console.log('yes')} className="project-name">
                  {props.projectName}
               </div>
            </div> 
         :  
            <div className="card-back">
               <div className="card-back-text-wrap-flex">
                  <div className="card-back-flex-item"></div>
                  <div className="card-back-flex-item">WHAT IT DOES/IS</div>
                  <div className="card-back-flex-item">HOW YOU BUILT IT</div>
               </div>
         </div>
 }
      </div>
   )
}
