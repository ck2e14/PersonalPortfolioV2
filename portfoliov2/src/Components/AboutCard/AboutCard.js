import React from 'react';
import './AboutCard-style.css';

export default function AboutCard(props) {
   return (
      <div className='about-card-wrapper-flex'>
         
         <div className="about-card-flex-item flex-start-elem">
             I AM A →
            <span>  fullstack web developer</span>
           
         </div>      

         <div className="about-card-flex-item about-card-flex-items1and2">
            I WORK WITH →  
               <span>  JavaScript (Async, ES6) React.js, Ruby on Rails, HTML5, CSS3 <sup className='tiny-text'>(mobile responsive).</sup></span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items1and2">
            I'M LOOKING FOR → <span className="">  Full-time work in front-end web development, particularly with React.js</span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items3"
            onClick={() => props.cta()}
         >
            THIS SITE IS → <span>built in JavaScript(ES6), React and vanilla CSS3. To find out about getting a bespoke, promptly delivered and responsive site like this one, click here</span></div>
         
      </div>
   )
}