import React from 'react';
import './AboutCard-style.css';

export default function AboutCard() {
   return (
      <div className='about-card-wrapper-flex'>
         
         <div className="about-card-flex-item">
             I AM 
            <span> A junior fullstack web developer.</span>
           
         </div>      

         <div className="about-card-flex-item">
            I DO 
               <span> JavaScript (Async, ES6) React.js, Ruby on Rails, HTML5, CSS3.</span>
         </div>          

         <div className="about-card-flex-item">
            <div className="about-card-item-title">I'M LOOKING FOR </div>
         </div>          

      </div>
   )
}