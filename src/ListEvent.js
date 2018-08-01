import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Pagination from "react-js-pagination";
import { bindActionCreators } from 'redux';
import { selectEvent } from './actions/selectEvent'
import { fetchAllEvents } from './actions/allEventsAction'
require('./style.css')

var bgColors = {
    "Default": "orange",
    "Primary": "#00C851",
    "Danger": "red"
}
var tab = []
const itemPerPage = 6

class ListEvent extends Component {
    state = {
        t: {},
        paginatedArray: [],
        currentPage: 1
    }
    clickHandler = (el) => {
        const { selectEvent, history } = this.props
        const { paginatedArray } = this.state
        selectEvent(el)
        history.push('/event/' + el.id)
    }


    handlePageChange = currentPage => {
        const firstIndex = (currentPage - 1) * itemPerPage
        const lastIndex = firstIndex + itemPerPage

        this.setState({
            currentPage,
            paginatedArray: this.state.t.slice(firstIndex, lastIndex)
        })
    }

    componentWillMount() {
        this.props.fetchAllEvents()
    }

    componentWillReceiveProps = nextProps => {


        if (nextProps.allevents !== this.props.allevents) {
            {
                localStorage.getItem('user') ? this.props.user.roles == "ROLE_ORGANIZER" ? (
                    Object.keys(nextProps.allevents).map(el => nextProps.allevents[el].organizer == (nextProps.user.first_name + ' ' + nextProps.user.Last_name) ? tab.push(nextProps.allevents[el]) : null)) :
                    Object.keys(nextProps.allevents).map(el => tab.push(nextProps.allevents[el]))
                    : null
            }
            this.setState({
                t: tab,
                paginatedArray: tab.slice(0, itemPerPage)
            })
            console.log(this.state.t)
        }
    }

    render() {

        const { paginatedArray, t, currentPage } = this.state
        const { user } = this.props

        return (


            <Fragment>

                <div className="row">
                    <div className="col-lg-2"></div>

                    <div className="col-lg-8 flex-center ">

                        <br />

                        <h3></h3>
                        <div className="table-responsive">


                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th>
                                            Atelier
                            </th>
                                        <th>
                                            Categorie
                            </th>
                                        <th>
                                            Etat
                            </th>
                                        <th>
                                            Action
                            </th>
                                    </tr>

                                </thead>
                                <tbody >
                                    {(paginatedArray.map((el, key) =>
                                        <tr>
                                            <td><a onClick={() => this.clickHandler(paginatedArray[key])}>{paginatedArray[key].titre}</a></td>
                                            <td>{paginatedArray[key].category}</td>
                                            {paginatedArray[key].validation == 0 && user.roles == 'ROLE_ORGANIZER' ?
                                                <div>
                                                    <td><p style={{ color: bgColors.Default }}>En Cours</p></td>

                                                    <td> <a className="btn btn-success btn-sm" > Modifier </a></td> </div> :
                                                paginatedArray[key].validation == 0 && user.roles == 'ROLE_ADMIN' ?
                                                    <div>
                                                        <td><p style={{ color: bgColors.Default }}>En Cours</p></td>

                                                        <td> <a className="btn btn-success btn-sm" onClick={() => this.clickHandler(paginatedArray[key])}> Consulter </a></td> </div> :
                                                    paginatedArray[key].validation == 1 ?
                                                        <div>
                                                            <td> <p style={{ color: bgColors.Primary }}>Validé</p></td>
                                                            <td>                           </td>
                                                        </div>
                                                        :
                                                        <div>
                                                            <td> <p style={{ color: bgColors.Danger }}>Refusé</p></td>
                                                            <td>                           </td>
                                                        </div>
                                            }
                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>



                    </div>





                </div>
                <nav className="row flex-center wow fadeIn" data-wow-delay="0.2s">
                    <div className="navigation">
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={itemPerPage}
                            totalItemsCount={t.length}
                            onChange={this.handlePageChange}
                            innerClass="pagination"
                            activeLinkClass="page-link active"
                            linkClass="page-link"
                            itemClass="page-item "
                            activeClass="page-item active"

                        />
                    </div>
                </nav>
                <br />
                <br />
            </Fragment >

        );
    }
}

const mapStateToProps = state => ({

    user: state.authentication.user,
    allevents: state.allevents.allevents,
    e: state.e.e

});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectEvent, fetchAllEvents }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListEvent));

