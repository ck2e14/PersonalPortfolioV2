import React, { useEffect, useState } from 'react';
import logo from './Assets/logoIcon3.png';
import logo2 from './Assets/logo5.png';
import Carousel from './Components/Carousel/Carousel'
import './App.css';
import AboutContainer from './Components/AboutContainer/AboutContainer.js';
import ResumeContainer from './Components/ResumeContainer/ResumeContainer.js';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.js';

function App() {

  const [ aboutIsActive, setAboutIsActive ] = useState(false)
  const [ resumeIsActive, setResumeIsActive ] = useState(false)
  const [ contactIsActive, setContactIsActive ] = useState(false)
  const [ projectsIsActive, setProjectsIsActive ] = useState(false)

  const handleAboutClick = () => {
    setAboutIsActive(!aboutIsActive );
    setContactIsActive(false);
    setResumeIsActive(false);
    setProjectsIsActive(false);
  }

  const handleResumeClick = () => {
    setResumeIsActive(true);
    setContactIsActive(false);
    setAboutIsActive(false);
    setProjectsIsActive(false);
  }

  const handleContactClick = () => {
    setContactIsActive(!contactIsActive);
    setResumeIsActive(false);
    setAboutIsActive(false);
    setProjectsIsActive(false);
  }

   const handleProjectsClick = () => {
    setProjectsIsActive(true);
    setContactIsActive(false);
    setAboutIsActive(false);
    // fadeWholePageBackdrop()
    setResumeIsActive(false);
  }

  const handleCentralLogoClick = () => {
    setProjectsIsActive(false);
    setContactIsActive(false);
    setAboutIsActive(false);
    setResumeIsActive(false);
  }

  const fadeWholePageBackdrop = () => {
    const backdrop = document.getElementsByClassName('logo-central')[0]
    backdrop.classList.add('active')
  }

  return (
    <>
    <div className="shader-layer"></div>
    <div className="center-this">
       <Carousel/>  
      <img src={logo2} alt="" className="logo-central" onClick={handleCentralLogoClick}/>
      <div className="app-grid-container">

        <div className="app-grid-square sq-3"
        onClick={handleResumeClick}   
        >

          { !resumeIsActive ? 
            <div className="card-title-text">
            RESUME
          </div> 
         : <ResumeContainer /> }
        </div>    
        
        <div className="app-grid-square sq-1 hvr-ripple-out"
          onClick={handleAboutClick} >
          { !aboutIsActive ? 
            <div className="card-title-text">
            ABOUT
          </div> 
         : <AboutContainer /> }
         
        </div>    
        
        <div className="app-grid-square sq-2"
          onClick={handleProjectsClick} >
          { !projectsIsActive ? 
            <div className="card-title-text">
              WORKS
            </div> 
         : <ProjectsContainer /> }
        </div>    
        
        <div className="app-grid-square sq-4"
        onClick={handleContactClick} >
           { !contactIsActive ? 
            <div className="card-title-text">
              CONTACT
          </div> 
         : null }
        </div> 

      </div>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

      </link>
    </div>
    </>

  );
}

export default App;
