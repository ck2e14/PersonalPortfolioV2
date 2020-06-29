import React from "react";
import coronavirus from "../../Assets/banner.jpg";
import ProjectCard from "./ProjectCard/ProjectCard.js";
import "./ProjectsContainer-style.css";
// import pebble1 from "../../Assets/pebble1.png";
import pebble2 from "../../Assets/pebble2.png";
import arrow3 from "../../Assets/arrow3.png";
import exchange from "../../Assets/eXchange.png";
import mapstar from "../../Assets/mapstar.png";
// import hygenik from "../../Assets/hygenik.png";
import hygenik3 from "../../Assets/hygenik3.png";

export default function ProjectsContainer() {
  return (
    <div className='projects-wrapper-flex'>
      <div className='projects-flex-item'>
        <ProjectCard
          projectName={"Pebble Solutions"}
          media={pebble2}
          isHosted={true}
          what={
            'Designed and created a "brochure" style frontend for Pebble. Ongoing site maintenance and updates via FTP.'
          }
          how={"React.js (w/ hooks), vanilla CSS3, mobile responsive."}
          url={"https://www.pebblesolutions.com"}
        />
      </div>

      <div className='projects-flex-item'>
        <ProjectCard
          projectName={"MapStar"}
          isHosted={false}
          media={mapstar}
          what={"Google API-led route manager and directions service."}
          how={
            "Async Ajax, React.js (w/ hooks), JWT-Authentication, CSS3, Rails API"
          }
          url={"https://github.com/ck2e14/Mod4Project"}
        />
      </div>

      <div className='projects-flex-item'>
        <ProjectCard
          projectName={"eXchange"}
          isHosted={true}
          media={exchange}
          what={
            "Currency exchange rate calculator. Rates pulled live from exchangeratesapi.io upon page load."
          }
          how={"React.js (w/ hooks), Ajax JavaScript, vanilla CSS3"}
          url={"https://practical-goldstine-fa44e5.netlify.app/"}
        />
      </div>

      <div className='projects-flex-item'>
        <ProjectCard
          projectName={"Hygenik"}
          isHosted={false}
          media={hygenik3}
          what={
            "Locations services-led app that reveals FSA hygiene ratings and information for nearby food-serving premises. Can blacklist sites."
          }
          how={
            "React.js (w/ hooks), Async Ajax JavaScript, CSS3, JWT-Authentication, Rails API backend"
          }
          url={"https://github.com/ck2e14/frontend5"}
        />
      </div>

      <div className='projects-flex-item'>
        <ProjectCard
          projectName={"Coro-nah-virus!"}
          isHosted={false}
          media={coronavirus}
          what={
            "Google Chrome extension. Recursively searches through a website's HTML elements and black-box censors 'coronavirus' and 'COVID-19'. Because why not!"
          }
          how={"JavaScript, Regex, CSS"}
          url={"https://github.com/ck2e14/Coro-nah-virus"}
        />
      </div>

      <div className='not-a-flex'>
        SCROLL
        <img src={arrow3} alt='' className='nav-arrow' />
      </div>
    </div>
  );
}
