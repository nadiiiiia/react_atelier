import React, { Component , Fragment } from 'react';
import {connect} from 'react-redux'


class ProfilInfo extends Component {
  

  render() {
    
    return (
        <Fragment>
      
        <div className="col-lg-9">
        <h4>Mes informations</h4>


            <hr/>  

        <div className="row">


            <div className="col-lg-1"></div>
            <div className="col-lg-8">
            <div className="fos_user_user_show">
                <p>Nom d'utilisateur : {this.props.user.username} </p>
                <p>Email : {this.props.user.email}</p>
            </div>


            </div>
        </div>
        </div>
        </Fragment>
    );
}
}

const mapStateToProps = state => ({
 
    user: state.authentication.user
});
export default connect(mapStateToProps)(ProfilInfo)