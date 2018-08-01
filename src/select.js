import React, { Component } from 'react';


import Dropdown from 'react-dropdown'
import 'react-dropdown/ss.css'
var t = []
var title


class Select extends Component {

    componentWillReceiveProps = p => {
        t = Object.keys(p.tab.elements).map(el => p.tab.elements[el])
        title = p.tab.titre
    }

    render() {
        const options = [
            'Simple utilisateur', 'Organisateur'
        ]

        if (t == null) {
            t = options;
            title = "choisir votre role"
        }
        const defaultOption = t[0]
        return (
            <div className="mdb-select select-dropdown">
                <Dropdown options={t} onChange={this._onSelect}  placeholder={title} /></div>
        )
    }
}
export default Select;
