import React, { Component } from 'react';
import './Resume-container-style.css'

const file ='https://u.pcloud.link/publink/show?code=XZuybNkZ5iogAJheh6YfWiAxVHnTy0unG7VX'
// const newFile = 'https://drive.google.com/uc?export=download&id=1oAQARQrvSRi9tr_aWrOFow-IrSdzgC4t'

export default class ResumeContainer extends Component {
  render() {
    return (
      <div className="resume-wrapper-top-level">
        <iframe src={file} title='CK-Resume' height='980' width='700' className="resume-pdf"></iframe>
        {/* <a href={newFile} className="resume-download">Download ResumÉ</a> */}
      </div>
    );
  }
}

