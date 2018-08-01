import { FETCH_EVENTS , FETCH_ALLEVENTS, FETCH_FILTER, FETCH_TRI_MOINS_CHER, FETCH_TRI_PLUS_CHER, FETCH_TRI_PLUS_AVANCÉ, FETCH_TRI_PLUS_PROCHE, FETCH_RECHERCHE } from '../actions/types'  

const initialState ={
    events :[],
    title : 'Liste des ateliers',
   
}


export default function(state= initialState, action) {
    
    switch(action.type) {
        
        case FETCH_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case FETCH_FILTER:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            case FETCH_TRI_MOINS_CHER:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            case FETCH_TRI_PLUS_CHER:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            case FETCH_TRI_PLUS_AVANCÉ:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            case FETCH_TRI_PLUS_PROCHE:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            case FETCH_RECHERCHE:
            return{
                ...state,
                events:action.payload,
                title: action.title
            }
            
        default:
            return state;
    }
}