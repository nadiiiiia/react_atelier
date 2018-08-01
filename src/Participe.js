import React, { Component, Fragment } from 'react';
import ConfirmTable from './ConfirmTable';
import Terms from './Terms';
import Map from './Map'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from './Modal';


class Participe extends Component {


    render() {

        return (
            <Fragment>
                <div className="row">

                    <div className="col-md-2">


                    </div>
                    <div className="col-md-8 pb-5">
                        <ConfirmTable detail={this.props.e} />

                        <Map lat={this.props.e.lat} lng={this.props.e.lng} />
                        <br />
                        <Terms />
                        
                    </div>
                    <div className="col-md-2">



                    </div>
                </div>

            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    e: state.e.e
});

export default withRouter(connect(mapStateToProps)(Participe));