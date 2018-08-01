import { FETCH_TRI_PLUS_AVANCÉ } from './types';
import type from '../dropdown'

export const TriPlusAvancé = (title) => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_near_me_36.8067575_10.181527899999992')
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_TRI_PLUS_AVANCÉ,
              payload: events,
              title: title
          })
        );
};