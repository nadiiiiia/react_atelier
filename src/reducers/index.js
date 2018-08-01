import { combineReducers } from 'redux';
import eventReducer from './eventReducer'
import selectReducer from './selectReducer'
import navReducer from './navReducer'
import { registration } from './registration.reducer';
import loginReducer from './loginReducer';
import { authentication } from './authentication.reducer';


import { alert } from './alert.reducer';
import allEventsReducer from './allEventsReducer';


export default combineReducers({
    events: eventReducer,
    e: selectReducer,
    nav: navReducer,
    title: eventReducer,
    allevents: allEventsReducer,
    
   
    authentication,
    registration,


  alert
    

});
