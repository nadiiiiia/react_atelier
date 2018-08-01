import React, { Component, Fragment } from 'react';
import Product from './Product'
import Slides from './Slides'
import Pic from './pic'
import Map from './Map'
import ProductDescription from './ProductDescription'
import { connect } from 'react-redux'
import InvalidEvent from './InvalidEvent'
import ValidEvent from './ValidEvent'
import AdminDec from './AdminDec';
class ProductWrapper extends Component {


    render() {

        return (
            <Fragment>

                <div className="row mt-lg-5">


                    <Slides history={this.props.history} detail={this.props.e} />

                    <ProductDescription desc={this.props.e.desc} />
                    <div className="col-lg-12">
                        <br /><br />
                        <h2>Galerie de photos </h2>
                        <div id="mdb-lightbox-ui" className="list-unstyled row">

                            <Pic images={this.props.e.images} />


                        </div>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        {localStorage.getItem('user') && this.props.user.roles == "ROLE_ADMIN" ?
                            <h2>Décision de l'administrateur </h2> : null

                        }
                        {localStorage.getItem('user') && this.props.user.roles == "ROLE_ADMIN" && this.props.e.validation === 0 ?
                            <AdminDec />
                            : localStorage.getItem('user') && this.props.user.roles == "ROLE_ADMIN"  && this.props.e.validation === 1 ? <ValidEvent /> :localStorage.getItem('user') && this.props.user.roles == "ROLE_ADMIN"  &&  this.props.e.validation === 2 ? <InvalidEvent /> : null

                        }

                    </div>
                </div>
                <br />
                <hr />

                <Map lat={this.props.e.lat} lng={this.props.e.lng} />

            </Fragment>



        );
    }
}

const mapStateToProps = state => ({
    e: state.e.e,
    user: state.authentication.user
});
export default connect(mapStateToProps)(ProductWrapper);