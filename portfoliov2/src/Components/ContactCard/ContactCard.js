import React from 'react';
import './ContactCard-style.css';

export default function ContactCard() {
   return (
      <div className='contact-card-wrapper'>

         <a href="mailto:chriswkennedy@icloud.com" target="_blank" rel="noopener noreferrer" className="email-link contact-link"> 
            Email →  <span>chriswkennedy@icloud.com</span>
         </a>

         <a href="https://www.github.com/ck2e14" target="_blank" rel="noopener noreferrer" className="github-link contact-link"> 
            GitHub →  <span>github.com/ck2e14</span>
         </a>
         
         <a href="https://www.linkedin.com/in/christopher-w-kennedy" rel="noopener noreferrer" target="_blank" className="linked-in-link contact-link"> 
            LinkedIn  →  <span>linkedin.com/in/christopher-w-kennedy</span>
         </a>
         
      </div>
   )
}
