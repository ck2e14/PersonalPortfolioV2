import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';

const file ='https://cors-anywhere.herokuapp.com/https://filedn.com/lT4OmM0YRVMziUYigTE1Ok5/MidJune2020Resume.pdf'
const type = 'pdf'


export default class ResumeContainer extends Component {
  render() {
    return (
      <div className='resume-wrapper-flex'>
         {/* <iframe src='./Assets/Resume.pdf' title='CK-Resume' height='450' width='750' className=""></iframe> */}
         <FileViewer
            fileType={type}
            filePath={file}
        />
      </div>
    );
  }
}

