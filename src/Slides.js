import React, { Component , Fragment } from 'react';
import Img from './img'
var bgColors = { "Default": "#B579D2"}

class Slides extends Component {
    participe = () => {
        
        this.props.history.push('/participe/' + this.props.detail.id)
      }
    
    render() {
        const complet = this.props.detail.dispo === 0;
        return(
            <Fragment>
                <div className="col-lg-7 wow fadeIn" data-wow-delay="0.2s">
            <div id="carousel-example-1z" className="carousel slide carousel-fade " data-ride="carousel">
            
               
                <Img images={this.props.detail.images} />
               
               
            </div>
            </div>
            <div className="col-lg-5">
        
               
            <div className="row wow fadeIn" data-wow-delay="0.4s">
                  <div className="col-md-12">
                
            </div>
                <div className="col-md-12">
              
                    
                    <div className="product-wrapper">
                        
                        
                        <h2 className="h2-responsive mt-4 font-bold">{this.props.detail.titre}</h2>

                        <hr />

                        <h2>
                            <span className="badge" style={{backgroundColor: bgColors.Default}}>{this.props.detail.prix} €</span>
                        </h2>
                     
                        <dl className="row mt-4">
                            <dt className="col-sm-4">Date de début</dt>
                            <dd className="col-sm-8">{this.props.detail.dateDeb}</dd>

                            <dt className="col-sm-4">Date de fin</dt>
                            <dd className="col-sm-8">{this.props.detail.dateFin}</dd>
                            <dt className="col-sm-4">Heures</dt>
                            <dd className="col-sm-8">De <strong>{this.props.detail.heureDeb} </strong> à <strong>{this.props.detail.heureFin} </strong> </dd>

                            <dt className="col-sm-4 text-truncate">Lieu</dt>
                            <dd className="col-sm-8">{this.props.detail.adresse}</dd>
                            
                            <dt className="col-sm-5 text-truncate">Places disponibles</dt>
                            <dd className="col-sm-7">{this.props.detail.dispo}</dd>
                        </dl>

                        <br />
                        
                        {
                            complet? ( <a  className="btn btn-primary-atelier btn-md pull-right" >Complet</a>) :
                             (<a  className="btn btn-primary-atelier btn-md pull-right" onClick={() => this.participe()} >Participez</a>)

                        }

                    

                </div>
            </div>
           

        </div>
        </div>
        </Fragment>
     

        
    );
}
}

export default Slides;