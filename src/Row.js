import React, { Component, Fragment } from 'react';
import MenuElement from './MenuElement'
import events from './sample.js'
import Pagination from "react-js-pagination";
require('./style.css')
const itemPerPage = 6


class Row extends Component {

    state = {
        currentPage: 1,
        elementArray: [],
        paginatedArray: []

    }

    handlePageChange = currentPage => {
        const firstIndex = (currentPage - 1) * itemPerPage
        const lastIndex = firstIndex + itemPerPage

        this.setState({
            currentPage,
            paginatedArray: this.state.elementArray.slice(firstIndex, lastIndex)
        })
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.details !== this.props.details) {
            const elementArray = Object.keys(nextProps.details).map(el => nextProps.details[el])

            this.setState({
                elementArray,
                paginatedArray: elementArray.slice(0, itemPerPage)
            })
        }
    }

    render() {
        const { paginatedArray, elementArray, currentPage } = this.state
        return (


            <Fragment>
                <div className="row mt-5 wow">
                    {paginatedArray.map((el, key) => <MenuElement key={key} detail={el} />)}
                </div>
                <hr />
                <nav className="row flex-center wow fadeIn" data-wow-delay="0.2s">
                <div className="navigation">
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={itemPerPage}
                    totalItemsCount={elementArray.length}
                    onChange={this.handlePageChange}
                    innerClass="pagination"
                    activeLinkClass="page-link active"
                    linkClass="page-link"
                    itemClass="page-item "
                    activeClass="page-item active"
                    
                />
                </div>
                </nav>
            </Fragment>

        );
    }
}

export default Row;