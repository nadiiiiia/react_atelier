import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

/*const images = [
  '/images/2.jpeg',
  '/images/1.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/1.jpeg',
  '/images/3.jpeg'
];*/
class Img extends Component {
    render(){
        return(
            <Slide images={this.props.images}
            duration={5000}
            transitionDuration={1000} />
        )
    }
}

export default Img;