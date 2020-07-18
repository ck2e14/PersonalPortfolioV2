import React, { Component } from 'react';
import './Resume-container-style.css'

const file ='https://u.pcloud.link/publink/show?code=XZbHUNkZSxP5YRgmpQkiKhfX2kRz2pwdJmWV'

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

