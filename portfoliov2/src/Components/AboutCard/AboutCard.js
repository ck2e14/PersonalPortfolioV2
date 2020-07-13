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
            <span>  JavaScript (Async, ES6) React.js (Hooks, Router, authentication ), Ruby on Rails, HTML5, CSS3 <sup className='tiny-text'>(mobile responsive).</sup></span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items1and2">
            I'M LOOKING FOR → <span className="">  Full-time work in front-end web development, particularly with React.js</span>
         </div>          

         <div className="about-card-flex-item about-card-flex-items3 final-item-about-card">
            THIS SITE IS → <span>built in JavaScript(ES6), React and vanilla CSS3. For a bespoke, responsive and promptly delivered website click</span>
            <span className="contactCTA"  
               onClick={() => props.cta()}>
                  HERE
            </span>
         </div>
         
      </div>
   )
}