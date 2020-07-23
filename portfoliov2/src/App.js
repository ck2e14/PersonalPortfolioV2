import React, { useEffect, useState } from 'react';
import logo2 from './Assets/logo5.png';
import './App.css';
import AboutCard from './Components/AboutCard/AboutCard.js';
import Carousel from './Components/Carousel/Carousel';
import ResumeContainer from './Components/ResumeContainer/ResumeContainer.js';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.js';
import ContactCard from '../src/Components/ContactCard/ContactCard.js';

function App() {
  const [ aboutIsActive, setAboutIsActive ] = useState(false)
  const [ resumeIsActive, setResumeIsActive ] = useState(false)
  const [ contactIsActive, setContactIsActive ] = useState(false)
  const [ projectsIsActive, setProjectsIsActive ] = useState(false)
  const [ slideShowRendered, setSlideShowRendered ] = useState(false)
  const [ renderSlideshow, setRenderSlideshow ] = useState(false)
  const [ showLogo, setShowLogo ] = useState(false)

  const handleAboutClick = () => {
    setAboutIsActive(!aboutIsActive );
    setContactIsActive(false);
    setResumeIsActive(false);
    setProjectsIsActive(false);
  }

  const handleResumeClick = () => {
    // setResumeIsActive(true);
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

  const aboutCTAContact = () => {
    setContactIsActive(true);
  }

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      setAboutIsActive(false);
      setContactIsActive(false);
      setResumeIsActive(false);
      setProjectsIsActive(false);
    }
  }

  const clickEsc = () => {
    setAboutIsActive(false);
    setContactIsActive(false);
    setResumeIsActive(false);
    setProjectsIsActive(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)
    }, 250);
    setTimeout(() => {
      setSlideShowRendered(true)
    }, 750);
    setTimeout(() => {
      setRenderSlideshow(true)
    }, 1250)
    document.addEventListener("keydown", escFunction);
    return function cleanup() {
      document.removeEventListener("keydown", escFunction);
    }
  },[])

  return (
    <>
    <div className="top-bar" onClick={() => clickEsc()}>X</div>
    <div className="bot-bar">
      Christopher Kennedy | Full-stack web development | JavaScript ES6, React | Ruby on Rails | NoSQl | SQLite/PostgreSQL | CD | Git   
    </div>
    
      <div className="center-this">
  {/* { renderSlideshow ? <Carousel/> : null } */}


        { showLogo ? <img src={logo2} alt="" className="logo-central" onClick={handleCentralLogoClick}/> : null }

        { slideShowRendered ? 
          <div className="app-grid-container">
            
            <div className="app-grid-square sq-2" >
              { !projectsIsActive ? 
                <div className="card-title-text" 
                  onClick={handleProjectsClick} >
                  WORK/PROJECTS
                </div>  
            : <ProjectsContainer /> }
            </div> 

            <div className="app-grid-square sq-3"
              onClick={handleResumeClick} >
              { !resumeIsActive ? <a href='https://drive.google.com/uc?export=download&id=1qcO1gjAVS813sJUr2MFIIhraHeCdem66' className="resume-download" download>
                <div className="card-title-text">
                  RESUMÉ  
                </div> 
              </a>
           
            : <ResumeContainer /> }
            </div>    

            <div className="app-grid-square sq-1" >
              { !aboutIsActive ? 
                <div className="card-title-text"
                  onClick={handleAboutClick} >
                    ABOUT ME
                </div> 
              : 
                <AboutCard cta={aboutCTAContact}/> 
              }
            </div>    
            
            <div className="app-grid-square sq-4">
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
