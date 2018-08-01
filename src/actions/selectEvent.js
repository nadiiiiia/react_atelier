import { SELECT_EVENT } from './types';
export const selectEvent = (e) => {
    console.log('sdjfgdsj;ksjh')
    return{
        type: SELECT_EVENT,
        payload: e
    }
}