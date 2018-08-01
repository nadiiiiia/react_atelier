import React, { Component } from 'react';

import Gallery from 'react-photo-gallery';

export default class Pic extends Component {
    render() {
      var tab=[];
      var i=0;
for(i=0;i<this.props.images.length;i++){
  tab.push({
    src: this.props.images[i], width: 4, height: 3
  })
}
    return (
        <div className="col-xs-6 col-sm-4 col-md-12">
        <Gallery photos={tab} />
        </div>
    );
    }
}


