import React from 'react'; 
import './AboutCard-style.css';

export default function AboutCard(props) {
   return (
      <div className='about-card-wrapper-flex'>
         
         <div className="about-card-flex-item flex-start-elem">
            I AM →
            <span> A junior full-stack web developer. A graduate of FlatIron's intensive software engineering course (January 2020). Passionate about creating</span> <span className="highlight-this"> powerful</span> <span>and</span> <span className="highlight-this">attractive</span> <span> web apps.</span>
         </div>      

         <div className="about-card-flex-item about-card-flex-items1and2 about-card-flex-items1">
            I WORK WITH →  
            <span>  JavaScript</span> <span className="highlight-this">(Async/AJAX, ES6, JWT-authentication) </span><span>React.js</span> <span className="highlight-this">(Hooks, Router, Redux),</span><span> Ruby on Rails </span><span className="highlight-this">(RESTful API backends, protected routes),</span> <span>HTML5, CSS3 </span><span className="highlight-this">(mobile responsive).</span> <span>Learning React Native and Node.js.</span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items1and2 about-card-flex-items2">
            I'M LOOKING FOR → <span className="">  Full-time work in web development, particularly front-end with React.js.</span> <span className="highlight-this">I am always keen to take on new challenges with any stack!  </span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items3 final-item-about-card">
            THIS SITE IS → <span>Built in </span><span className="highlight-this">JavaScript(ES6, React.js) </span> <span>and</span> <span className="highlight-this">vanilla CSS3</span><span>. To get in touch about a bespoke, responsive and promptly delivered website to your specifications, click </span>
            <span className="contactCTA"  
               onClick={() => props.cta()}>
                  here.
            </span>
         </div>
         
      </div>
   )
   }