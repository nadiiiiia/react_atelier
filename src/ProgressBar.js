import React, { Component , Fragment } from 'react';

class ProgressBar extends Component {
    
   
                
    progressBar = (id, actual, max) => {
        var progressBar = document.getElementById(id);
        var percent = ((100 * parseFloat(actual)) / parseFloat(max));
        var percentVal = percent.toFixed();
        progressBar.style.width = percentVal + '%';

        var eventClients = document.getElementById('eventClient_{{this.props.id}}');


        if (actual < max) {
            progressBar.classList.remove('bg-success');
            progressBar.classList.remove('bg-danger');
            progressBar.classList.add('bg-warning');
        } else if (actual == max) {
            progressBar.classList.remove('bg-warning');
            progressBar.classList.remove('bg-danger');
            progressBar.classList.add('bg-success');
            eventClients.innerHTML = '<b>COMPLET</b>';
        }

        var percent_val = document.getElementById("percent_" + this.props.id);
        percent_val.textContent = percentVal + '%';

    }
    componentDidMount() {
        this.progressBar(this.props.id,this.props.nbrParticipants,this.props.nbrmax);
      }
    compnentWillUpdate(){
        this.progressBar(this.props.id,this.props.nbrParticipants,this.props.nbrmax);
    }
    

    render() {
        return (
            <Fragment>
            <div className=" progress "  styles={"marginBottom: 0rem"}  >
                                    <div id={this.props.id} className="progress-bar bg-success progress-bar-striped" role="progressbar" styles={'width: 25%'} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    
                                </div>
                                
                                <div  align="center" className="percent_val" ><p><font size="2" id={"percent_" + this.props.id} >a</font></p></div>

                                <div  align="center" className="nbr_eventClient" ><p><font size="2" id="eventClient_{{this.props.id}}" > ({this.props.nbrParticipants}/{this.props.nbrmax}) Participants</font></p></div>


                 </Fragment>         


        );
    }
}

export default ProgressBar;