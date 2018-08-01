import React, { Component } from 'react';
import MenuElement from './MenuElement';


class Cd extends Component {
  

  render() {
    
    return (
     
      
      <div className="col-lg-4 wow fadeIn">
        <MenuElement key={this.key} eventt={this.props.event}></MenuElement>
        
      </div>

    );
}
}

export default Cd;