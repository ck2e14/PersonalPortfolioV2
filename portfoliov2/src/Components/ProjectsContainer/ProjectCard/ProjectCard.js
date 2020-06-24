import React, {useState, useEffect} from 'react';
import './ProjectCard-style.css';
// import CardCarousel from './CardCarousel/CardCarousel'
// import returnIcon from '../../../Assets/return.png';
// import returnIcon2 from '../../../Assets/return2.png';
import returnIcon3 from '../../../Assets/return3.png';
import infoIcon from '../../../Assets/info.png';



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

   // const flipCardWithClick = () => {
   //    setShowFront(false)
   // }

   const iconClickHandler = () => {
      setShowFront(!showFront);
      flickBackgroundimage();
   }

   return (
      <div className='card-wrapper'
            >
         {showFront ?  
            <div className="card-front" >
               <img 
                  onClick={iconClickHandler} 
                  src={infoIcon} alt="" 
                  className="return-icon"
                  // onClick={flipCardWithClick}
                  />
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
               <img onClick={iconClickHandler} src={returnIcon3} alt="" className="return-icon"/>
               <div className="card-back-text-wrap-flex">
                  <div className="card-back-flex-item cb-1">{props.projectName}</div>
                  <div className="card-back-flex-item cb-2">{props.what}</div>
                  <div className="card-back-flex-item cb-2">{props.how}</div>
                  <div className="card-back-flex-item project-link-wrapper"><a target="_blank" rel="noopener noreferrer" href={props.url} className="project-link">Visit {props.projectName}</a> </div>
               </div>
         </div>
 }
      </div>
   )
}
