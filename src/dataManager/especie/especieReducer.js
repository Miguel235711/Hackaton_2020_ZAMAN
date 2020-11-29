import {
    GET_ESPECIES
} from './especieTypes';

const INITIAL_STATE = {
    especies: [],
}

const especieReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ESPECIES:
            return {
                ...state,
                especies: action.payload
            }
        default: return state
    }
}

export default especieReducer