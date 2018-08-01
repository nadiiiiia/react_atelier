import { FETCH_NAV } from '../actions/types'  

const initialState ={
    nav :[]
}


export default function(state= initialState, action) {
    
    switch(action.type) {
        
        case FETCH_NAV:
            return {
                ...state,
                nav: action.payload
            }
        default:
            return state;
    }
}