import React, { useEffect, useState } from 'react';
import logo2 from './Assets/logo5.png';
import './App.css';
import AboutCard from './Components/AboutCard/AboutCard.js';
import ResumeContainer from './Components/ResumeContainer/ResumeContainer.js';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.js';
import ContactCard from '../src/Components/ContactCard/ContactCard.js';

function App() {

  const [ aboutIsActive, setAboutIsActive ] = useState(false)
  const [ resumeIsActive, setResumeIsActive ] = useState(false)
  const [ contactIsActive, setContactIsActive ] = useState(false)
  const [ projectsIsActive, setProjectsIsActive ] = useState(false)
  const [ slideShowRendered, setSlideShowRendered ] = useState(false)
  const [ showLogo, setShowLogo ] = useState(false)

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

  const handleProjectsHover = () => {
    setContactIsActive(false);
    setAboutIsActive(false);
  }

  const aboutCTAContact = () => {
    setContactIsActive(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)
    },250);
    setTimeout(() => {
      setSlideShowRendered(true)
    }, 1500);
  },[])

  return (
    <>
      <div className="center-this">

        { showLogo ? <img src={logo2} alt="" className="logo-central" onClick={handleCentralLogoClick}/> : null }

        { slideShowRendered ? 
          <div className="app-grid-container">
            
            <div className="app-grid-square sq-2" 
              onMouseEnter={handleProjectsHover} 
              onClick={handleProjectsClick}>
              { !projectsIsActive ? 
                <div className="card-title-text" 
                  onClick={handleProjectsClick} >
                  PROJECTS 
                </div> 
            : <ProjectsContainer /> }
            </div> 

            <div className="app-grid-square sq-3"
              onClick={handleResumeClick}   
              onMouseEnter={handleProjectsHover} >
              { !resumeIsActive ? 
                <div className="card-title-text">
                RESUMÉ
              </div> 
            : <ResumeContainer /> }
            </div>    
            
            FIXME: CHANGE CLICK HANDLING TO SQUARE NOT LINE OF TEXT
            <div className="app-grid-square sq-1 hvr-ripple-out">
              { !aboutIsActive ? 
                <div className="card-title-text"
                  onClick={handleAboutClick} >
                    ABOUT 
                </div> 
              : 
                <AboutCard cta={aboutCTAContact}/> 
              }
            </div>    
            
            <div className="app-grid-square sq-4"
              onClick={handleContactClick}>
              { !contactIsActive ? 
                <div className="card-title-text" 
                  onClick={handleContactClick} >
                    CONTACT 
                </div> 
            : 
              <ContactCard/> }
            </div> 

          </div>
        : 
          null } 
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
        </link>

      </div> 
      <div className="shader-layer"></div>
    </>
  );
}

export default App;
