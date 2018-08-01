import { FETCH_LOGIN } from './types';
import { access } from 'fs';
import axios from 'axios'




export const  fetchLogin = userData => dispatch => {
    const username = JSON.stringify(userData.username)
    const password = JSON.stringify(userData.password)
    return axios.post("http://dsc-power.com/Atelier/web/json_login_test",{username,password})
   
 {/*  console.log([userData.username, userData.password])
        fetch("http://dsc-power.com/Atelier/web/json_login_test",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            
            
            body:userData
            
                
            
        
            
        })
        .then((response) => response.json())
        .then((responseJson) => dispatch ({
            type: FETCH_LOGIN,
            payload: responseJson,
            isAuth: true
        }))
    */}


    }
    