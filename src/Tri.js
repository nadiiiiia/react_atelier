import React, { Component } from 'react'
import Dropdown, {
    DropdownToggle,
    DropdownMenu,
    DropdownMenuWrapper,
    MenuItem,
    DropdownButton
} from '@trendmicro/react-dropdown';
import './button.css';
import './dropdown.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TriMoinsCher } from './actions/TriMoinsCher'
import { TriPlusCher } from './actions/TriPlusCher'
import { TriPlusProche } from './actions/TriPlusProche'
import { TriPlusAvancé } from './actions/TriPlusAvancé'

class Tri extends Component {
    handleClick() {
        this.props.history.push("/list")
    }

    render() {
        return (
            <div className="dropdown show" >
            {localStorage.getItem('user') && this.props.user.roles=="ROLE_ADMIN"?  
            // <a onClick={()=>{this.handleClick()}}>Liste des atelier</a>
            <div className="list_event">
                <button className=" btn btn-primary-atelier btn-md pull-right waves-effect waves-light" type="button" onClick={()=>{this.handleClick()}} id="list_events">Liste des Ateliers </button>
            </div>
            :(
                <DropdownButton className =" btn btn-primary-atelier btn-md pull-right waves-effect waves-light" id="tri_btn"
                    btnSize="lg"
                    title='Trier par'
                    
                >
                    <MenuItem onSelect={() => {this.props.TriMoinsCher('Prix (moins cher)')}}> Prix (moins cher)</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusCher('Prix ( Plus cher)')}}> Prix ( Plus cher)</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusProche('Plus proche')}}>Plus proche</MenuItem>
                    <MenuItem onSelect={() => {this.props.TriPlusAvancé('Plus Avancé')}}>Plus avancé</MenuItem>
                </DropdownButton>)



        }
            </div>
        )
    }
}
const mapStateToProps = state => ({

    user: state.authentication.user,

});
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  TriMoinsCher, TriPlusCher , TriPlusAvancé, TriPlusProche}, dispatch)}

export default connect(mapStateToProps, mapDispatchToProps)(Tri);;;