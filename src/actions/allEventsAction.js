import { FETCH_ALLEVENTS } from './types';


export const fetchAllEvents = () => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_all_stats')
          .then(response => response.json())
          .then(allevents => dispatch({
              type: FETCH_ALLEVENTS,
              payload: allevents
          })
        );
};