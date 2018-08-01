import React, { Component , Fragment } from 'react';
import MenuElement from './MenuElement'
import events from './sample.js'
import { connect } from 'react-redux'

class Row extends Component {
   
    
      
      
      
    
      

    render() {
        
            
            const indexOfLastEvent = this.props.currentPage * this.props.eventsperpage;
            const indexOfFirstEvent = indexOfLastEvent - this.props.eventsperpage;
            const currentEvents = this.props.details.slice(indexOfFirstEvent, indexOfLastEvent);
            console.log(currentEvents)
    
        return(
            
            
            <Fragment>
                
                <div className="row mt-5 wow">
                {/*{Object.keys(this.props.details).map(key => <Cd key={key} event={this.props.details[key]}></Cd>)}*/}
              { (currentEvents).map(eve,index => <MenuElement key={index} detail={currentEvents[index]}></MenuElement>)}
                
               
                </div>
               
            </Fragment>

    );
}
}
const mapStateToProps = state => ({
    
    currentPage : state.currentPage.currentPage,
    eventsperpage: state.eventsperpage.eventsperpage})

     export default connect(mapStateToProps)(Row);;