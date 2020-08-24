import React, { useState } from "react";
import "./ProjectCard-style.css";
// import BackgroundSlider from 'react-background-slider'

const ProjectCard = (props) => {
  const [showFront, setShowFront] = useState(true);

  const { projName, bg1, content, link, codeLink, codeLink2 } = props;

  const handleHover = () => {
    setShowFront(!showFront);
  };

  return (
    <div
      className='card-wrapper' id={projName}
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >

      {showFront ? (
        <div className='card-front'  style={{ backgroundImage: `url(${bg1})` }}>

          <div className='name'>{projName}</div>

        </div>
      ) : (
        <div className='card-back'>

          <div className="back-name">
            {projName}
          </div>

          <div className="back-contents">

            <div className="contents-blurb">
              {content}
            </div>

            <div className="links">
          
            {link &&    <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link"> Visit {projName} |</a>} 
          
              <a href={codeLink} target="_blank" rel="noopener noreferrer" className="proj-link"> See {projName} Code </a>

              {codeLink2 && <a href={codeLink2} target="_blank" rel="noopener noreferrer" className="proj-link"> | See {projName} Backend </a> }

            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default ProjectCard;
