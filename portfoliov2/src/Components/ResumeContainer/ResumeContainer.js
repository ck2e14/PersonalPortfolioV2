import React, { Component } from 'react';
import pdf from "../../Assets/Resume.pdf"
 
export default class ResumeContainer extends Component {
  state = {
     file: pdf,
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
 
    return (
      <div className='resume-wrapper-flex'>
         <iframe src="/static/media/Resume.8878dfea.pdf" title='CK-Resume' height='510' width='800' className="resume-pdf"></iframe>
      </div>
    );
  }
}

