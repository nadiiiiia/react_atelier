import { FETCH_TRI_PLUS_PROCHE } from './types';


export const TriPlusProche = (title) => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_near_me_22_25')
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_TRI_PLUS_PROCHE,
              payload: events,
              title: title
          })
        );
};