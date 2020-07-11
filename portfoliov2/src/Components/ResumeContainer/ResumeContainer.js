import React, { Component } from 'react';
import './Resume-container-style.css'

const file ='http://u.pc.cd/I4rrtalK'
const newFile = 'https://drive.google.com/uc?export=download&id=1oAQARQrvSRi9tr_aWrOFow-IrSdzgC4t'

export default class ResumeContainer extends Component {
  render() {
    return (
      <>
        <div className='resume-wrapper-flex'>
          <iframe src={file} title='CK-Resume' height='850' width='750' className="resume-pdf"></iframe>
        </div>
        {/* <a href={newFile} className="resume-download">Download ResumÉ</a> */}
      </>
    );
  }
}

