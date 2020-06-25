import React, { useEffect, useState } from 'react';
import logo2 from './Assets/logo5.png';
// import Carousel from './Components/Carousel/Carousel'
import './App.css';
import AboutCard from './Components/AboutCard/AboutCard.js';
import ResumeContainer from './Components/ResumeContainer/ResumeContainer.js';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer.js';
import ContactCard from '../src/Components/ContactCard/ContactCard.js';
import BackgroundSlider from 'react-background-slider';
import mbcode from './Assets/mbcode.jpg'
import mbcode2 from './Assets/mbode2.jpg'
import reactPic from './Assets/reaact.jpg'
import code5 from './Assets/code5.jpg'
import code4 from './Assets/code4.jpg'
import code6 from './Assets/code6.jpg'
import code7 from './Assets/code7.jpg'

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
    // setResumeIsActive(false);
    // setProjectsIsActive(false);
  }

  const handleResumeClick = () => {
    setResumeIsActive(true);
    setContactIsActive(false);
    setAboutIsActive(false);
    setProjectsIsActive(false);
  }

  const handleContactClick = () => {
    setContactIsActive(!contactIsActive);
    // setResumeIsActive(false);
    setAboutIsActive(false);
    // setProjectsIsActive(false);
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

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true)
    },1500);
    setTimeout(() => {
      setSlideShowRendered(true)
    }, 5000);
  },[])

  return (
    <>
     
      
       <div className="center-this">
       {/* <BackgroundSlider
        images={[ code5, mbcode, reactPic, code7, code6, code4, mbcode2 ]}
        duration={6} 
        transition={1}       
      />  */}

      { showLogo ? <img src={logo2} alt="" className="logo-central" onClick={handleCentralLogoClick}/> : null }
      
      

      { slideShowRendered ?  <div className="app-grid-container">

<div className="app-grid-square sq-2"
     
    onMouseEnter={handleProjectsHover} >
    { !projectsIsActive ? 
      <div className="card-title-text" 
        onMouseEnter={handleProjectsClick} >
        PROJECTS
      </div> 
   : <ProjectsContainer /> }
  </div> 

  <div className="app-grid-square sq-3"
    onClick={handleResumeClick}   
    onMouseEnter={handleProjectsHover}>
    { !resumeIsActive ? 
      <div className="card-title-text">
      RESUME
    </div> 
   : <ResumeContainer /> }
  </div>    
  
  <div className="app-grid-square sq-1 hvr-ripple-out">
    { !aboutIsActive ? 
      <div className="card-title-text"
        onClick={handleAboutClick}
        onMouseEnter={handleAboutClick}>
      ABOUT
    </div> 
   : <AboutCard /> }
  </div>    
  
  <div className="app-grid-square sq-4">
     { !contactIsActive ? 
      <div className="card-title-text" 
        onClick={handleContactClick}
        onMouseEnter={handleContactClick}>
        CONTACT
    </div> 
   : <ContactCard/> }
  </div> 

</div>
: null }
     
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
      </link>
    </div> 
    <div className="shader-layer"></div>

    </>
  );
}

export default App;
