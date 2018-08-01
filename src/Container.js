import React, { Component, Fragment } from 'react';
import MenuElement from "./MenuElement"
import Row from './Row';
import events from './sample'
import { connect } from 'react-redux'
import { fetchEvents } from './actions/eventAction'
import { bindActionCreators } from 'redux';
import { fetchFilter } from './actions/filterAction'
import Duration from './page'




import TitreAcceuil from './TitreAcceuil'
import Pagination from './Pagination';

const Loading = require('react-loading-animation');
class Container extends Component {
    
    componentWillMount() {
        this.props.fetchEvents()
    }


    render() {

        return (
            <Fragment>
                <TitreAcceuil></TitreAcceuil>
                <Row details={this.props.events}></Row>
            </Fragment>
        );
    }

}
const mapStateToProps = state => ({
    events: state.events.events,

});
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchEvents, fetchFilter }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);;