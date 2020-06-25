import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard.js';
import './ProjectsContainer-style.css';
import pebble1 from '../../Assets/pebble1.png';
import pebble2 from '../../Assets/pebble2.png';
// import pebble3 from '../../Assets/pebble3.png';
import exchange from '../../Assets/eXchange.png';
import mapstar from '../../Assets/mapstar.png';
import hygenik from '../../Assets/hygenik.png';
// import hygenik2 from '../../Assets/hygenik2.png';
import hygenik3 from '../../Assets/hygenik3.png';

export default function ProjectsContainer() {
   return (
      <div className='projects-wrapper-flex'>

         <div className="projects-flex-item">
            <ProjectCard 
               projectName={'PebbleSolutions.com'} 
               media={pebble1} 
               media2={pebble2}
               what={'Designed and created a "brochure" style frontend for Pebble.  Server interaction via FTP.'}
               how={'React.js, vanilla CSS3, mobile responsive.' }
               url={'https://www.pebblesolutions.com'}
               />
         </div>  

         <div className="projects-flex-item">
            <ProjectCard 
               projectName={'MapStar'} 
               media={mapstar} 
               media2={mapstar}
               what={'Google API-led route manager and directions service.'}
               how={'Async Ajax, React.js, JWT-Authentication, CSS3, Rails API'}
               url={'https://github.com/ck2e14/Mod4Project'}
               />
         </div>  
         
         <div className="projects-flex-item">
            <ProjectCard 
            projectName={'eXchange'} 
            media={exchange} 
            media2={exchange}
            what={'Currency exchange rate calculator. Rates pulled live from exchangeratesapi.io upon page load.'}
            how={'React.js, Ajax JavaScript, vanilla CSS3'}
            url={'https://practical-goldstine-fa44e5.netlify.app/'}
            />

         </div>  

         <div className="projects-flex-item">
            <ProjectCard 
            projectName={'Hygenik'} 
            media={hygenik3} 
            media2={hygenik}
            what={'Locations services-led app that reveals FSA hygiene ratings and information for nearby food-serving premises. Can blacklist sites.'}
            how={'React.js, Async Ajax JavaScript, CSS3, JWT-Authentication, Rails API backend'}
            url={'https://github.com/ck2e14/frontend5'}
            />
         </div>
   
      </div>
   )
}
