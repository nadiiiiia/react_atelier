import React, { Component , Fragment } from 'react';

var bgColors = { "Default": "#00C851"}
class ProfilInfo extends Component {
  

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
                  </tr>

              </thead>
              <tbody >

                  <tr>
                      <td><a href="">event</a></td>


                      
                          

                      
                          <td><p style={{color:bgColors.Default}}>Validé</p></td>
                      
                          
                     

                  </tr>


              </tbody>

          </table>

      </div>
      </div>
    );
}
}

export default ProfilInfo;