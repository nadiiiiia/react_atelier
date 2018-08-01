import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchLogin } from './actions/loginAction'
import { bindActionCreators } from 'redux';
import { userActions } from './actions';
import {withRouter} from 'react-router-dom'

import { history } from './helpers';
import { alertActions } from './actions';

class Login extends Component {
    constructor(props) {
        super(props);
 
        // reset login status
        this.props.dispatch(userActions.logout());
 
        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
 
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
       
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    
    }
    
    

    render() {
        const { loggingIn , alert } = this.props;
        
        const { username, password, submitted } = this.state;
        return(
            <div className="row text-left">
           
            <div className="col-md-3 mb-r">
    
    
            </div>
           
    
           
            <div className="col-md-6 mb-r pb-5">
    
                <div className="card">
                    <div className="card-body z-depth-3">
                    {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        
                            {/*<div className="error-msg alert alert-danger" role="alert">{{ error.messageKey|trans(error.messageData, 'security') }}    </div> */}
                        
    
    
                        <br></br>
                        <div className="avatar text-center"><img src="/images/avatar.jpg" className="img-circle img-responsive"  height="100" width="100"></img>
                        </div>
                        <br></br>
                        
                        <h3 className="text-center">Connexion</h3>
                        <br></br>
                        
                        <form onSubmit={this.handleSubmit} >
                    
                           
                       
                            <input type="hidden" name="_csrf_token" value="" />
                            <div className="md-form">
                                <i className="fa fa-user-circle prefix grey-text"></i>
                                <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} required="required" />
                                <label htmlFor="username">Nom d'utilisateur</label>
                                {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                            </div>
    
                            <div className="md-form">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <input type="password" id="password" name="password"  value={this.state.password} onChange={this.handleChange}required="required" />
                                <label htmlFor="password">Mot de passe</label> {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                            </div>
    
    
                            <div className="text-center">
                                <input type="submit" id="_submit" name="_submit" value="Connexion" className="btn btn-primary-inverse btn-md waves-effect waves-light" />
    
                                <br></br>
                                <input type="checkbox" id="remember_me" name="_remember_me" value="on" />
                                <label htmlFor="remember_me">Se souvenir de moi</label>
    
                            </div>
                        </form>
                        <br></br>
                        <div className="text-center">
                            <h4>Ou</h4>
    
                            <h5>Se connecter avec:</h5>
                            <span>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'facebook' }) }}" type="button" className="btn-floating btn-fb waves-effect waves-light">
                                    <i className="fa fa-facebook"></i>
                                </a>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'google' }) }}" type="button" className="btn-floating btn-gplus waves-effect waves-light">
                                    <i className="fa fa-google-plus"></i>
                                </a>
                               
                                <a href="{{ path('hwi_oauth_service_redirect', {'service': 'twitter' }) }}" type="button" className="btn-floating btn-tw waves-effect waves-light">
                                    <i className="fa fa-twitter"></i>
                                </a>
                     
    
                            </span>
                        </div>
                        <div className="options text-right">
                            <hr></hr>
                            <p>Vous n'avez pas de compte ? <a href="{{path ('fos_user_registration_register')}}">Inscription</a></p>
                            <p><a href="">Mot de passe oublié?</a></p>
                        </div>
    
                    </div>
    
    
                </div>
    
            </div>
           
    
           
            <div className="col-md-3 mb-r">
    
    
            </div>
           
    
        </div>
    

    );
}
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { alert } = state;
    return {
        loggingIn, alert
    };
}
export default  withRouter(connect(mapStateToProps)(Login));;