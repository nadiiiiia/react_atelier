import { FETCH_ALLEVENTS } from '../actions/types'

const initialState = {
    allevents: [],


}


export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_ALLEVENTS:
            return {
                ...state,
                allevents: action.payload,
            }
        default:
            return state;
    }
}
