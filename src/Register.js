import React, { Component } from 'react';

import Dropdown from 'react-dropdown'
import 'react-dropdown/ss.css'
import Terms from './Terms'
import { connect } from 'react-redux';
 
import { userActions } from './actions';
const options = [
    'Simple utilisateur', 'Organisateur'
] 
const title = "choisir votre role"

class Register extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                username:'',
                password: '',
                plainPassword:'',
                date_naissance:'',
                roles:'Organisateur'
            },
            submitted: false
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
    
 
    handleSubmit(event) {
        event.preventDefault();
 
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        console.log(user)
        if (user.first_name && user.last_name && user.username && user.password && user.plainPassword && user.date_naissance && user.photo && user.roles) {
            // dispatch(userActions.register(user));
            console.log(user)
        }
    }
    render() {
        return(
            <div className="row text-left">
   
    <div className="col-md-3 mb-r">


    </div>
   

   
    <div className="col-md-6 mb-r pb-5">



        <div className="card">
            <div className="card-body z-depth-3">

                <br></br>
                <div className="avatar text-center"><img src={"/images/avatar.jpg"} className="img-circle img-responsive"  height="100" width="100" />
                </div>
                <br></br>
               

                <h3 className="text-center">Register</h3>
                <br></br>
                <form onSubmit={this.handleSubmit}>

                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  htmlFor="username" >Prénom</label>
                    <input type="text" name="first_name" className="username" required onChange={this.handleChange}></input>
                    
                </div>
                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  htmlFor="username" >Nom</label>
                    <input type="text" name="last_name" className="last_name" required onChange={this.handleChange}></input>
                  
                </div>

                <div className="md-form">
                    <i className="fa fa-envelope prefix grey-text"></i>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" className="email" required onChange={this.handleChange}></input>
                    
                </div>


                <div className="md-form">
                    <i className="fa fa-user-circle prefix grey-text"></i>
                    <label  htmlFor="username" >Username</label>
                    <input type="text" name="username" className="email" required onChange={this.handleChange}></input>

                </div>

                <div className="md-form">
                    <i className="fa fa-lock prefix grey-text"></i>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password"  required onChange={this.handleChange}></input>

                </div>

                <div className="md-form">
                    <i className="fa fa-lock prefix grey-text"></i>
                    <label htmlFor="verification">Répéter le mot de passe</label>
                    <input type="password" name="plainPassword"  required onChange={this.handleChange}></input>
            
                    <br/><br/>
                    </div>
   
                    <div className="md-form ">
                        <i className="fa fa-calendar prefix grey-text" ></i>
                       <label htmlFor="date_naissance">Date de naissance</label>
                       <input type="date" name="date_naissance"  required onChange={this.handleChange}></input> 
                       <br/><br/>
                       </div>                    
                   

                
                <div className="md-form">
                    <i className="fa fa-key prefix grey-text"></i>
                    
                    <div className="mdb-select select-dropdown">
                <Dropdown options={options}  placeholder={title} onChange={this.handleChange1} /></div>
                    <br></br>
                </div>
               
    

                <Terms />
                
                <div className="text-center">
                    <input type="submit" id="_submit" name="_submit" value="Inscription" className="btn btn-primary-inverse btn-md waves-effect waves-light" />
                </div>
                
                </form>

                <div className="text-center">
                    <h4>Ou</h4>

                    <h5>Se connecter avec:</h5>
                    <span>
                      
                        <a href="" type="button" className="btn-floating btn-fb waves-effect waves-light">
                            <i className="fa fa-facebook"></i>
                        </a>
                      
                        <a href="" type="button" className="btn-floating btn-gplus waves-effect waves-light">
                            <i className="fa fa-google-plus"></i>
                        </a>
                       
                        <a href="" type="button" className="btn-floating btn-tw waves-effect waves-light">
                            <i className="fa fa-twitter"></i>
                        </a>


                    </span>
                </div>
                <div className="options text-right">
                    <hr />
                    <p>Vous avez déjà un compte ? <a href="">Connexion</a></p>
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

export default Register;