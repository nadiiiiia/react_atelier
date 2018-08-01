import { FETCH_TRI_PLUS_CHER } from './types';
import type from '../dropdown'

export const TriPlusCher = (title) => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_price_max')
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_TRI_PLUS_CHER,
              payload: events,
              title: title
          })
        );
};