import { FETCH_TRI_MOINS_CHER } from './types';
import type from '../dropdown'

export const TriMoinsCher = (title) => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_price_min')
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_TRI_MOINS_CHER,
              payload: events,
              title: title
          })
        );
};