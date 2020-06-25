import React, { Component } from 'react';

const file ='https://filedn.com/lT4OmM0YRVMziUYigTE1Ok5/ResumeNew.pdf'

export default class ResumeContainer extends Component {
  render() {
    return (
      <div className='resume-wrapper-flex'>
         <iframe src={file} title='CK-Resume' height='450' width='750' className=""></iframe>
      </div>
    );
  }
}

