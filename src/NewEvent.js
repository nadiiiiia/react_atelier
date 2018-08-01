import React, { Component } from 'react';
import Select from './select'
import { connect } from 'react-redux'

class NewEvent extends Component {

    render() {
        return (
            <div className="row text-left">

                <div className="col-md-1 mb-r">


                </div>



                <div className="col-md-10 mb-r pb-5">
                    <h2>Nouveau Événement</h2>
                    <br></br>

                    <div className="card">
                        <div className="card-body z-depth-1">

                            <form id="eventForm">
                                <br></br>


                                <div className="md-form">
                                    <Select tab={this.props.classe} />
                                </div>
                                <div className="md-form">
                                    <Select tab={this.props.category} />
                                </div>


                                <div className="md-form">
                                    <label htmlFor="titre"></label>
                                    <input type="text" name="titre" placeholder="titre"></input>
                                    <span className="error-msg"></span>
                                </div>

                                <div className="md-form">
                                    <label htmlFor="description"></label>
                                    <textarea className="form-control md-textarea" name="description" placeholder="Description"></textarea>
                                    <span className="error-msg"></span>
                                </div>

                                <div className="md-form">
                                    <label htmlFor="dateDebut" ></label>
                                    <input type="date" name="dateDebut" placeholder="Date de debut" className="form-control date-deb-fr floating-label "></input>
                                    <span className="error-msg"></span>
                                </div>
                                <div className="md-form">
                                    <label htmlFor="dateFin"></label>
                                    <input type="date" name="dateDebut" placeholder="Date de fin" className="form-control date-deb-fr floating-label "></input>
                                    <span className="error-msg"></span>
                                </div>

                                <div className="md-form">
                                    <label htmlFor="prix"></label>
                                    <input type="text" name="prix" placeholder="Prix par utilisateur"></input>
                                    <span className="error-msg"></span>
                                </div>
                                <div className="md-form">
                                    <label htmlFor="nbrMax"></label>
                                    <input type="text" name="nbrMax" placeholder="Nombre max des participants"></input>
                                    <span className="error-msg"></span>
                                </div>

                                <div className="md-form">
                                    <label htmlFor="adresse"></label>
                                    <input type="text" name="adresse" placeholder="Adresse"></input>
                                    <span className="error-msg"></span>
                                </div>

                                <div className="md-form">
                                    <label htmlFor="codeP"></label>
                                    <input type="text" name="codeP" placeholder="Code postal"></input>
                                    <span className="error-msg"></span>
                                </div>
                                <div className="md-form">
                                    <Select tab={this.props.region} />
                                </div>


                                <div className="md-form">
                                    <label htmlFor="images"></label>
                                    <br></br><br></br>
                                    <input type="file" name="images" placeholder="titre"></input>
                                    <span className="error-msg"></span>
                                </div>


                                <div className="text-right">
                                    <br></br><br></br>
                                    <input className="btn btn-primary-inverse btn-md waves-effect waves-light" id="submit_event" type="submit" value="Créer" />
                                    <br></br><br></br>
                                </div>
                                <br></br>

                            </form>
                        </div>


                    </div>


                </div>



                <div className="col-md-1 mb-r">


                </div>


            </div>

        );
    }

}
const mapStateToProps = state => ({
    classe: state.nav.nav.nav_1,
    category: state.nav.nav.nav_2,
    region: state.nav.nav.nav_3
});
export default connect(mapStateToProps)(NewEvent);