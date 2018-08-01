import { FETCH_RECHERCHE } from './types';
import type from '../dropdown'

export const fetchRecherche = (value) => dispatch => {
    console.log(value)
    
    fetch("http://dsc-power.com/Atelier/web/json_recherche/" + value + '?motcle=' + value)
          .then(response => response.json())
          .then(events => dispatch({
              type: FETCH_RECHERCHE,
              payload: events,
              title: 'Résultat de recherche..' + value
          })
        );
};