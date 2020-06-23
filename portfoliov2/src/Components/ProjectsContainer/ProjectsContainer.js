import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard.js';
import './ProjectsContainer-style.css';
import pebble1 from '../../Assets/pebble1.png';
import pebble2 from '../../Assets/pebble2.png';
import pebble3 from '../../Assets/pebble3.png';
import exchange from '../../Assets/eXchange.png';
import mapstar from '../../Assets/mapstar.png';
import hygenik from '../../Assets/hygenik.png';
import hygenik2 from '../../Assets/hygenik2.png';
import hygenik3 from '../../Assets/hygenik3.png';


export default function ProjectsContainer() {
   return (
      <div className='projects-wrapper-flex'>

         <div className="projects-flex-item">
            <ProjectCard 
               projectName={'Pebble Solutions'} 
               media={pebble1} 
               media2={pebble2}
               
               />
         </div>  

         <div className="projects-flex-item">
            <ProjectCard projectName={'MapStar'} media={mapstar} media2={mapstar}/>
         </div>  
         
         <div className="projects-flex-item">
            <ProjectCard projectName={'eXchange'} media={exchange} media2={exchange}/>
         </div>  
         
         <div className="projects-flex-item">
            <ProjectCard projectName={'Hygenik'} media={hygenik3} media2={hygenik}/>
         </div>
   
      </div>
   )
}
