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

         <div className="about-card-flex-item about-card-flex-items3 final-item-about-card"
         onClick={() => props.cta()}>
            THIS SITE IS → <span>built in JavaScript(ES6), React and vanilla CSS3. Click here to contact me about a bespoke, promptly delivered and responsive website</span>
         </div>
         
      </div>
   )
}