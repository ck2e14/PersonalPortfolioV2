import React, { Component } from 'react';
import './Resume-container-style.css'

const file ='https://drive.google.com/uc?export=download&id=1qcO1gjAVS813sJUr2MFIIhraHeCdem66' 
const resumePDF = '/portfoliov2/src/Assets/ReFormatted July CV PDF.pdf'

export default class ResumeContainer extends Component {
  render() {
    return (
      <div className="resume-wrapper-top-level">
        {/* <iframe src={file} title='CK-Resume' height='980' width='700' className="resume-pdf"></iframe>  */}
        <a href='https://drive.google.com/uc?export=download&id=1qcO1gjAVS813sJUr2MFIIhraHeCdem66' className="resume-download" download>Download CV</a>
      </div>
    );
  }
}

