import React, { Component } from 'react';
import { userActions } from './actions';
import { alertActions } from './actions';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'




class ProfileSide extends Component {
    constructor(props) {
        super(props);}
    handleClick(e) {



        const { dispatch, history } = this.props;

        dispatch(userActions.logout());


       history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());

        });



    }


    render() {

        return (
            <div className="col-lg-3">


                <div className="avatar text-center"><img src={"/images/avatar.jpg"} className="img-circle img-responsive" height="150" width="150" styles={"borderRadius: 50%"} />
                </div>

                <br />

                <p align="center"> UTILISATEUR</p>


                <div className="well">
                    <ul className="nav nav-list">
                        <li>
                            <a href="#">Mes informations</a>
                        </li>
                        <br />
                        <li>
                            <a href="#">Editer mes informations</a>
                        </li>
                        <br />
                        <li>
                            <a href="#">Changer mot de passe</a>
                        </li>
                        <br />
                        <li>
                            <a href="#">Informations de profile</a>
                        </li>
                        <br />

                        <li>
                            <a href ="" onClick={() => { this.handleClick() }}>Déconnexion</a>
                        </li>
                        <br />
                    </ul>
                </div>
            </div>


        );
    }
}

const mapStateToProps = state => ({

    user: state.authentication.user
});
export default withRouter(connect(mapStateToProps)(ProfileSide))