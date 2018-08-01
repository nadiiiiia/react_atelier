import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import FooterMenuElement from './FooterMenuElement';
import ProgressBar from './ProgressBar';
import { selectEvent } from './actions/selectEvent'
import { bindActionCreators } from 'redux';


class MenuElement extends Component {


  clickHandler = () => {
    const { selectEvent, detail, history } = this.props
    selectEvent(detail)
    history.push('/event/' + detail.id)
  }



  render() {
    return (

      <Fragment>
        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.2s">
          <div className="card" >



            <div className="view overlay hm-white-slight z-depth-1">


              <a><img src={this.props.detail.images[0]} className="img-fluid" style={{ width: "339.99px", height: "226px" }} onClick={() => this.clickHandler()} /></a>


            </div>




            <div className="card-body text-center">

              <h5>{this.props.detail.category}</h5>
              <h4 className="card-title" onClick={() => this.clickHandler()}><strong><a href={"#"} className="">{this.props.detail.titre}</a></strong></h4>


              <p className="card-text">{this.props.detail.desc}

              </p>

              <ProgressBar id={this.props.detail.id} nbrmax={this.props.detail.nbrMax} nbrParticipants={this.props.detail.nbrParticipants} ></ProgressBar>



            </div>



            <FooterMenuElement date={this.props.detail.dateDeb} prix={this.props.detail.prix}></FooterMenuElement>

          </div>
        </div>


      </Fragment>
    );
  }
}

//function matchDispatchToProps(dispatch){
//return bindActionCreators({selectEvent: selectEvent}, dispatch)}
const mapStateToProps = state => ({
  e: state.e.e
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectEvent }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuElement));


