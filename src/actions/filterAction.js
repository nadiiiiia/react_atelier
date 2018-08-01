import { FETCH_FILTER } from './types';
import type from '../dropdown'

export const fetchFilter = (type,value, title) => dispatch => {
    console.log(value)
    
    fetch('http://dsc-power.com/Atelier/web/filter_json/'+ type + '/' + value)
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_FILTER,
              payload: events,
              title: title
          })
        );
};