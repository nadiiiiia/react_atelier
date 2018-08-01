import { FETCH_LOGIN } from '../actions/types'
const initialState ={
    userData :[],
    isAuth : false
    
}
export default function (state=initialState, action) {
    
    switch(action.type){
        case FETCH_LOGIN:
        
        return{
        ...state,
        userData: action.payload,
        isAuth: action.isAuth
        
    }
        
           

    }
    return state;
}