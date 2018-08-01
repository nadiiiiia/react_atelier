import React, { Component, Fragment } from 'react';
import { ReactDOM } from 'react-dom'
import Modal from './Modal';




class Terms extends Component {
    
    
    
    changeHandler = () =>{
        
        
        const content = document.getElementById("pay_btn")
        
        if (content.style.display === "none") {
            content.style.display = "block";
        }else{
            content.style.display = "none";
        }
    }

    render() {
        
        return (
            <Fragment>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="checkbox_cgu" onChange={() => this.changeHandler() }/>
                <label className="form-check-label" htmlFor="checkbox_cgu" >J’ai lu et j’accepte les <a href="" data-toggle="modal" data-target="#CguModal" >conditions d’utilisation</a></label>
            </div>
            
            
            
            <input type="image" id="pay_btn"
                src={"/images/paypal_btn.jpg"} style={{width:"270px",height:"52.22px", display: "none"}}
                border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" align='right'  />
                </Fragment>
                );
            }
        }
        
export default Terms;