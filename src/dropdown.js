import React, { Component } from 'react';
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
import { fetchFilter } from './actions/filterAction'

class DButton extends Component {
    render(){
        var type= ''
        
        return(
            <DropdownButton 
                                        btnSize="lg"
                                        title={this.props.navitem.titre}
                                        onSelect={() => { return type = this.props.navitem.titre}}
                                    >
                                        {Object.keys(this.props.navitem.elements).map( element => <MenuItem onSelect={() => {this.props.fetchFilter(this.props.navitem.titre, element , this.props.navitem.elements[element])}} key={element} >{this.props.navitem.elements[element]}</MenuItem>)}
                                        
                                    </DropdownButton>
        )
    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({  fetchFilter }, dispatch)}

export default connect(null, mapDispatchToProps)(DButton);;;

