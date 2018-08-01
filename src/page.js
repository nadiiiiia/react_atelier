import React from 'react'
import MenuElement from './MenuElement'
import Pagination from "react-js-pagination";

const itemPerPage = 2



class Duration extends React.Component {
    constructor (props){
        super(props);
    const projects = [
        props.e
    ]
    console.log(props.e)
    
    console.log(projects)
    const t = projects.length
    


  this.state = {
    currentPage: 1,
    items: projects.slice(0, itemPerPage)
  }
}

  renderProjects = projects => projects.map((projectAttribute, key) => <MenuElement key={key} detail={projectAttribute[key]} />)

  handlePageChange = currentPage => {
    const firstIndex = (currentPage - 1) * itemPerPage
    const lastIndex = firstIndex + itemPerPage

    this.setState({
      currentPage,
      items: this.projects.slice(firstIndex, lastIndex)
    })
  }

  render() {
      
    const { items } = this.state
    return (
      <div className='duration-container'>
        <h3 className="projects-title">Latest projects</h3>
        {items && items.length ? this.renderProjects(items) : <p>No Projects</p>}
        <nav class="row flex-center wow fadeIn" data-wow-delay="0.2s">
                <div class="navigation">
        <Pagination
          activePage={this.state.currentPage}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={this.t}
          onChange={this.handlePageChange}
          hideFirstLastPages
        />
        </div>
        </nav>
      </div>
    )
  }
}

export default Duration;