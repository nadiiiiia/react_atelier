import React, { Component } from 'react';
class FooterMenuElement extends Component {
    render() {
        return (
            <div className="card-data" styles={{background: "#929FBA"}}>
              <ul className="list-unstyled">
                  <li className="ml-0">{this.props.prix} €</li>
                  <li className="ml-5">
                      <i className="fa fa-clock-o ml-0 pl-0"></i>{this.props.date}</li>
              </ul>
          </div>
           
        );
    }
}

export default FooterMenuElement;