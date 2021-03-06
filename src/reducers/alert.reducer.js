import { alertConstants } from '../constants';
 
export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: "verifier votre login out mot de passe"
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}