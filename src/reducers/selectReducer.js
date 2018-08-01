import { SELECT_EVENT } from '../actions/types'
const initialState ={
    e :{}
}
export default function (state=initialState, action) {
    
    switch(action.type){
        case SELECT_EVENT:
        
        return{
        ...state,
        e: action.payload}
        
           

    }
    return state;
}