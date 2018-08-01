import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux'
class TitreAcceuil extends Component {
    render() {
        return(
                <Fragment>
                           
                                    <div className="col-md-12">
                                        <h1 className="h1-responsive">{this.props.title}
                                            
                                        </h1>
                                    </div>

                                
                          
                </Fragment>
);
}
}
const mapStateToProps = state => ({
    title: state.title.title
});
export default connect(mapStateToProps)(TitreAcceuil);;
