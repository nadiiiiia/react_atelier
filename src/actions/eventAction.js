import { FETCH_EVENTS } from './types';


export const fetchEvents = () => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json')
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_EVENTS,
              payload: events
          })
        );
};