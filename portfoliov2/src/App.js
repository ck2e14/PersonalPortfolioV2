import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import NavBar from "./Components/NavBar/NavBar";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import { isSafari } from "react-device-detect";

function App() {
  // useEffect(() => {
  //   if (isSafari) {
  //     window.scrollTo(0, 0);
  //   }
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 750);
  // });

  useEffect(() => {
    if (isSafari) {
      document.getElementById("navbar").classList.add("activate");
    }
    if (!isSafari) {
      window.onscroll = () => {
        if (window.pageYOffset < 150) {
          document.getElementById("landing-wrapper").style.opacity = "1";
          document.getElementById("navbar").classList.remove("activate");
        }
        if (window.pageYOffset > 151) {
          document.getElementById("landing-wrapper").style.opacity = "0";
          document.getElementById("navbar").classList.add("activate");
        }
      };
    }
  });

  return (
    <div className='app-content'>
      <NavBar />

      <LandingPage />

      <AboutMe />

      <Projects />

      <Resume />

      <Contact />

      <link
        href='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&family=Tinos&family=Varela+Round&display=swap'
        rel='stylesheet'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto:wght@300;900&display=swap'
        rel='stylesheet'></link>
    </div>
  );
}

export default App;
