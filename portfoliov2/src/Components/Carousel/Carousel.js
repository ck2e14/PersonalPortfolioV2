import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import code2 from '../../Assets/code2.jpg'
import codeWall from '../../Assets/codeWall.jpg';
// import Carousel from 'react-images';
import BackgroundSlider from 'react-background-slider'
import mbcode from '../../Assets/mbcode.jpg'
import mbcode2 from '../../Assets/mbode2.jpg'
import reactPic from '../../Assets/reaact.jpg'
import code5 from '../../Assets/code5.jpg'
import code4 from '../../Assets/code4.jpg'
import code6 from '../../Assets/code6.jpg'
import code7 from '../../Assets/code7.jpg'

const Slideshow = () => {
    return (
      <div className="slide-container">
        <BackgroundSlider
            images={[ code5, 
              mbcode, reactPic, code7, code6, code4, mbcode2, codeWall 
            ]}

            duration={5} transition={3} 
            />
      </div>
    )
}
 
export default Slideshow;
