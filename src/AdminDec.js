import React, { Component , Fragment } from 'react';


class AdminDec extends Component {
  

  render() {
    
    return (
        <div className="col-lg-12">
        <br/><br/>

        <h2>Décision de l'administration </h2>

        
            <br/>

            <div className="card">
                <div className="card-body z-depth-1-half">

                   
                    <p>
                        Etat de la demande</p>
                        <br/>
                    <form method='post' action=''>


                        <input type="hidden" name="eventId" value="{{event.id}}" />
                        <input type="hidden" name="orgId" value="{{event.getUtilisateur.getId}}" />
                        <fieldset className="form-check">
                            <input className="form-check-input" name="validation" type="radio" value="1" id="valider" required  />
                            <label className="form-check-label" for="valider">Valider</label>
                        </fieldset>

                        <fieldset className="form-check">
                            <input className="form-check-input" name="validation" type="radio" value="2" id="refuser" />
                            <label className="form-check-label" for="refuser">Refuser</label>
                        </fieldset>

                        <br/>

                        <div className="md-form">
                            <textarea type="text" id="form7" name="remarques" className="form-control md-textarea" rows="3"></textarea>
                            <label for="form7" className="">Remarques de l'administrateur</label>
                        </div>
                        <br/>  
                        
                        <input className=" btn btn-primary-atelier btn-sm pull-right waves-effect waves-light" type="submit" value='Confirmer'  />
                        <br/>
                        <br/>
                    </form>
                </div>
                </div>
                </div>

    );
}
}

export default AdminDec;