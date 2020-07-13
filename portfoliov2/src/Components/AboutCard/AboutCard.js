import React from 'react';
import './AboutCard-style.css';

export default function AboutCard(props) {
   return (
      <div className='about-card-wrapper-flex'>
         
         <div className="about-card-flex-item flex-start-elem">
            I AM →
            <span> a fullstack web developer</span>
         </div>      

         <div className="about-card-flex-item about-card-flex-items1and2">
            I WORK WITH →  
            <span>  JavaScript (Async, ES6) React.js (Hooks, Router, Redux), Ruby on Rails, HTML5, CSS3 <sup className='tiny-text'>(mobile responsive).</sup></span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items1and2">
            I'M LOOKING FOR → <span className="">  Full-time work in front-end web development, particularly with React.js</span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items3 final-item-about-card"
         onClick={() => props.cta()}>
            THIS SITE IS → <span>built in JavaScript(ES6), React and vanilla CSS3. For a bespoke, promptly delivered and responsive website by clicking </span><span className="contactCTA"> HERE</span>
         </div>
         
      </div>
   )
}