import { FETCH_NAV } from './types';

export const fetchNav = () => dispatch => {
    
    
    fetch('http://dsc-power.com/Atelier/web/json_navbar')
          .then(response => response.json())
          .then(nav => dispatch({
              type: FETCH_NAV,
              payload: nav
          })
        );
};