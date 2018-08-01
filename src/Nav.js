import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNav } from './actions/navAction'
import { fetchRecherche } from './actions/RechercheAction'
import DButton from './dropdown'
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import './button.css';
import './dropdown.css';
import { bindActionCreators } from 'redux';
import { userActions } from './actions';
import { alertActions } from './actions';

import Select from './select'
var bgColors = { "Default": "white" }

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.history.push('/')
        this.props.fetchRecherche(this.state.value);
    }
    handleClick(e) {



        const { dispatch, history } = this.props;

        dispatch(userActions.logout());


        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());

        });



    }


    componentWillMount() {
        this.props.fetchNav();
    }
    handleSelect = (e) => {
        this.props.history.push('/' + e)
    };

    render() {


        return (
            <header>

                <nav className="navbar navbar-expand-lg navbar-inverse navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="" onClick={() => { this.props.history.push('/') }}>L ' Atelier</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav mr-auto">
                                {Object.keys(this.props.nav).map(nav => <li key={nav} className="nav-item btn-group">
                                    <DButton key={nav} navitem={this.props.nav[nav]} />
                                </li>)}

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Comment ça marche ?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tarifs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contacts</a>
                                </li>
                                {localStorage.getItem('user') ? this.props.user.roles=="ROLE_ORGANIZER"? (<li className="nav-item btn-group">
                                <DropdownButton 
                                        btnSize="lg"
                                        title="Mes ateliers"
                                        
                                    >
                                         <MenuItem onSelect={() =>{this.handleSelect("new")}}>Nouvel atelier</MenuItem>
                                         <MenuItem onSelect={() =>{this.handleSelect("list")}}>Liste des ateliers</MenuItem>
                                         
                                        
                                    </DropdownButton>
                                        </li>) :null :null }


                            </ul>
                            <ul className="navbar-nav " >
                                <li className="nav-item btn-group">
                                    <Dropdown >
                                        <Dropdown.Toggle
                                            btnStyle="flat"

                                        >
                                            <i className="fa fa-search"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <form className="form-inline" onSubmit={this.handleSubmit}>
                                                <div className="text-center">
                                                    <input className="form-control" type="text" placeholder="Recherche" name="motcle" aria-label="Recherche" value={this.state.value} onChange={this.handleChange} />

                                                    <input type="submit" className="btn btn-sm btn-secondary" value="Rechercher" />
                                                </div>
                                            </form>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>


                                {localStorage.getItem('user') ? (<div>
                                    <li className="nav-item" style={{ paddingRight: ".5rem", paddingLeft: ".5rem", paddingTop: ".5rem" }}>
                                        <span style={{ color: bgColors.Default }}> Bienvenu  </span>
                                    </li>
                                    <li className="nav-item" style={{ paddingRight: ".5rem", paddingLeft: ".5rem", paddingTop: ".5rem" }}>
                                        <a onClick={() => { this.props.history.push('/Profil') }} title="Mon Profile" style={{ color: bgColors.Default }}>{this.props.user.first_name} |</a>
                                    </li>

                                    <li className="nav-item" style={{ paddingRight: ".5rem", paddingLeft: ".5rem", paddingTop: ".5rem" }}>
                                        <a href="" onClick={() => { this.handleClick() }} title="Déconnexion" style={{ color: bgColors.Default }}>
                                            <i className="fa fa-power-off"></i>
                                        </a>
                                    </li>
                                </div>
                                ) :

                                    (
                                        <li className="nav-item btn-group">
                                            <Dropdown >
                                                <Dropdown.Toggle
                                                    btnStyle="flat"

                                                >
                                                    <i className="fa fa-user"></i>

                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <MenuItem onSelect={() => { this.handleSelect('Connexion') }}>
                                                        Connexion
        </MenuItem>
                                                    <MenuItem onSelect={() => { this.handleSelect('Inscription') }}>
                                                        Inscription
        </MenuItem>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>)

                                }



                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        )
    }
};
const mapStateToProps = state => ({
    nav: state.nav.nav,
    user: state.authentication.user
});




export default withRouter(connect(mapStateToProps, { fetchNav, fetchRecherche })(Nav));;