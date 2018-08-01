import React, { Component , Fragment } from 'react';


class OrgDoc extends Component {
  

  render() {
    
    return (
            <div className="col-lg-12">
                <br/><br/>
                <h2>Documents de l'organisateur foulen </h2>


                <ul id="mdb-lightbox-documents" className="list-unstyled row">
                    <li className="col-xs-6 col-sm-4 col-md-3" data-sub-html="<h4>CIN</h4>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                        <a href="">
                            <img className="img-responsive" src={"/images/1.jpeg"} styles={"width:282px;height:188px"} alt="" /> 
                        </a>
                    </li>
                
                        <li className="col-xs-6 col-sm-4 col-md-3" data-sub-html="<h4>certificats</h4>" data-pinterest-text="Pin it1" data-tweet-text="share on twitter 1">
                            <a href="">
                                <img className="img-responsive" src={"/images/1.jpeg"} styles={"width:282px;height:188px"} alt="" />
                            </a>
                        </li>
                   
                </ul>
            </div>
    );
}
}

export default OrgDoc;