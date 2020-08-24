import React from 'react';
import './Projects-style.css'
import code4 from '../../Assets/Media/code27.jpg'
import pebble2 from '../../Assets/Media/pebble5.png'
import ProjectCard from './ProjectCard/ProjectCard'
import pebblePic from '../../Assets/Media/pebble3.png'
import ScrollArrow from '../ScrollArrow/ScrollArrow'
import hygenik1 from '../../Assets/Media/hygenik2.png'
import hygenik2 from '../../Assets/Media/hygenik3.png'
import exchange1 from '../../Assets/Media/exchange1.png'
import exchange2 from '../../Assets/Media/exchange2.png'
import mapstar from '../../Assets/Media/mapstar.png'
import mapstar2 from '../../Assets/Media/mapstar2.png'
import spaceX from '../../Assets/Media/spaceX.png'
import rps1 from '../../Assets/Media/rps2.png'

const Projects = () => {

   return (
      <>
         <div className="projects-wrapper" 
            id="projects-wrapper" 
            onMouseEnter={() => console.log('entered')} 
            onMouseLeave={() => console.log('left')} 
            >

            <img src={code4} alt="" className="projects-bg"/>

            <div className="projects-content">

               <div className="projects-intro">
                  Personal <span>&</span> Professional Projects<span>. </span>
               </div>

               <div className="projects-grid">

                  <div className="grid-item">
                     <ProjectCard 
                        projName={'Pebble Solutions'} 
                        bg1={pebblePic} 
                        content={'Designed and created a mobile-responsive "brochure" style frontend for Pebble Solutions Ltd. Site maintained and updated via FTP. JavaScript React (hooks, router), vanilla CSS3.'}
                        link={'https://pebblesolutions.com'}
                        codeLink={'https://github.com/ck2e14/PebbleSolutions'}
                     />
                  </div>

                  <div className="grid-item">
                     <ProjectCard 
                        projName={'Hygenik'} 
                        bg1={hygenik1} 
                        content={'Plots FSA hygiene ratings data for food-serving premises on a map and side-panel. Uses current location or search term. Users can blacklist sites. React.js (hooks, router), JavaScript (ES6, Async), CSS3, JWT-Authentication, Rails API.'}
                        link={'https://mod5-frontend.herokuapp.com/'}
                        codeLink={'https://github.com/ck2e14/frontend5'}
                        codeLink2={'https://github.com/ck2e14/Mod5ProjectBackend'}
                     />
                  </div>

                  <div className="grid-item">
                     <ProjectCard 
                        projName={'eXchange'} 
                        bg1={exchange1} 
                        content={'Currency exchange rate calculator. Rates pulled live from exchangeratesapi.io. React.js (hooks), JavaScript (ES6, fetch), vanilla CSS3'}
                        link={'https://practical-goldstine-fa44e5.netlify.app'}
                        codeLink={'https://github.com/ck2e14/eXchange'}
                     />
                  </div>
                  
                  <div className="grid-item">
                     <ProjectCard 
                        projName={'MapStar'} 
                        bg1={mapstar} 
                        content={'Google API-led route manager and directions service. JavaScript (ES6) React.js (hooks, router), JWT-Authentication, CSS3, Rails API'}
                        codeLink={'https://github.com/ck2e14/Mod4Project'}
                     />
                  </div>
                  
                  <div className="grid-item">
                     <ProjectCard 
                        projName={'Rock Paper Scissors'} 
                        bg1={rps1} 
                        content={"My take on the classic Rock Paper Scissors game. User plays vs. computer, and must select option before round timer elapses. Computer player randomly selects choice. Scoreboard tracks session's score. JavaScript (ES6) React (using hooks), vanilla CSS."}
                        link={'https://rock-paper-scissors-cwk.netlify.app'}
                        codeLink={'https://github.com/ck2e14/rock-paper-scissors'}
                     />
                  </div>
                  
                  <div className="grid-item">
                     <ProjectCard 
                        projName={'SpaceX Vehicles'} 
                        bg1={spaceX} 
                        content={"Uses Fetch API to display SpaceX's various rockets and dragon vehicles, and their technical data. JavaScript (ES6, Async) React (hooks), animated vanilla CSS."}
                        link={'https://spacex-cwk.netlify.app'}
                        codeLink={'https://github.com/ck2e14/spaceX-vehicles'}
                     />
                  </div>

               </div>
               
            </div>

         </div>

         <ScrollArrow scrollToLocation={'resume-wrapper'} arrowClassName={'projects-scroller'}/>

      </>
   )
}

export default Projects


