import React, { Component } from 'react';

class ProductDescription extends Component {
    render() {
        return(
            
            <div className="col-lg-12">
            <br></br>
            <h2> Description </h2>

            {this.props.desc}
            <br></br>
            <br></br>
   

        </div>
    );
}
}

export default ProductDescription;