import React, { Component } from 'react';
 
export default class ResumeContainer extends Component {
  render() {
    return (
      <div className='resume-wrapper-flex'>
         <iframe src="/static/media/Resume.8878dfea.pdf" title='CK-Resume' height='510' width='800' className="resume-pdf"></iframe>
      </div>
    );
  }
}

