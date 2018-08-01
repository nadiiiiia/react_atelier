import React, { Component , Fragment } from 'react';
var bgColors = { "Default": "red"}

class InvalidEvent extends Component {
  

  render() {
    
    return (
        <div className="card">
        <div className="card-body z-depth-4">

            <table className="table ">
                <thead>
                    <tr>
                        <th>
                            Atelier                     
                        </th>
                        <th>
                            Etat
                        </th>
                        <th>
                            Remarques
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>

                </thead>
                <tbody >

                    <tr>
                        <td><a href="">event</a></td>

                            <td><p style={{color:bgColors.Default}}>Refusé</p></td>
                            <td><p >Remarques</p></td>
                            <td> <a className="btn btn-success btn-sm" href="#"> Valider </a></td>
                            
                        

                    </tr>


                </tbody>

            </table>

        </div>
      </div>
    );
}
}

export default InvalidEvent;