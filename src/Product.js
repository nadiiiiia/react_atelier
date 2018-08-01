import React, { Component , Fragment} from 'react';

class Product extends Component {
    render() {
        return (
           
            <div className="col-lg-5">
        
               
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                      <div className="col-md-12">
                    
                </div>
                    <div className="col-md-12">
                  
                        
                        <div className="product-wrapper">
                            titre
                            
                            <h2 className="h2-responsive mt-4 font-bold">titre</h2>
    
                            <hr />
    
                            <h2>
                                <span className="badge" styles={"background-color: #B579D2"}>10 €</span>
                            </h2>
                         
                            <dl className="row mt-4">
                                <dt className="col-sm-4">Date de début</dt>
                                <dd className="col-sm-8">date debut</dd>
    
                                <dt className="col-sm-4">Date de fin</dt>
                                <dd className="col-sm-8">Date fin</dd>
                                <dt className="col-sm-4">Heures</dt>
                                <dd className="col-sm-8">De <strong>15 </strong> à <strong>19 </strong> </dd>
    
                                <dt className="col-sm-4 text-truncate">Lieu</dt>
                                <dd className="col-sm-8">adresse</dd>
                                <dt className="col-sm-5 text-truncate">Places disponibles</dt>
                                <dd className="col-sm-7">5</dd>
                            </dl>
    
                            <br />
                            {/*{% if event.nbrParticipants == event.nbrMax %}
                                <a  className="btn btn-primary-atelier btn-md pull-right" >Complet</a>
                            {%elseif is_granted("IS_AUTHENTICATED_REMEMBERED") %}
                                <a  href="{{ path('order_new',{ 'amount': event.prix, 'event': event.id }) }}" className="btn btn-primary-atelier btn-md pull-right" >Participez</a>
                            {%else%}
                                <a  href="{{ path('fos_user_security_login') }}"  className="btn btn-primary-atelier btn-md pull-right" >Participez</a>
                            {%endif%}
                        </div>
        {{ app.session.set('referer', app.request.uri ) }}*/}
    
                        
    
                    </div>
                </div>
               
    
            </div>
            </div>
           
                                );
                            }
                        }
                        
export default Product;