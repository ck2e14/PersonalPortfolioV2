import React from 'react';
import './SkillsCard-style.css'

const SkillsCard = () => {
   return (
      <>
         <div className="skills-card-flex-wrapper" id="skills-flex-wrapper">

            <div className="skills-card-item design">
               <div className="title">Design Skills <span>&</span> Tools</div>
               <div className="skills-card-content">
                  I value simple content structure and clean design patterns.
                  <ul className="list">
                     <li>Balsamiq</li>
                     <li>Sketch</li>
                     <li>Adobe Lightroom</li>
                     <li>Pen & Paper!</li>
                  </ul>
               </div>
            </div>

            <div className="skills-card-item ">
               <div className="title">Frontend <span>&</span> Backend</div>
               <div className="skills-card-content">
                  I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                  <ul className="list">
                     <li>JavaScript (Promises, Async, ES6, OOP)</li>
                     <li>React.js (Hooks, Router)</li>
                     <li>Ruby on Rails (API, JWT Auth, OOP)</li>
                     <li>HTML</li>
                     <li>CSS</li>
                  </ul>
               </div>
            </div>

            <div className="skills-card-item">
               <div className="title">Supporting Skills</div>
               <div className="skills-card-content">
                  I'm diligent, I'm committed. But most importantly, I love what I do!
               <ul className="list">
                     <li>Git version control</li>
                     <li>Excellent communicator</li>
                     <li>Teamworker</li>
                     <li>Self-teacher, independent worker</li>
                     <li>100WPM Typist 
                        <a href="https://bit.ly/3aJLrux" className="link"target="_blank" rel="noopener noreferrer">110WPM screenshot</a> 
                        {/* <a href="https://bit.ly/3eITkR4" className="link"target="_blank" rel="noopener noreferrer">https://bit.ly/3eITkR4</a> <br/>  */}
                        <a href="https://10fastfingers.com/user/2183713/" className="link"target="_blank" rel="noopener noreferrer">Average speed</a>
                     </li>
                  </ul>
               </div>
            </div>

         </div>
      </>
   )
}

export default SkillsCard