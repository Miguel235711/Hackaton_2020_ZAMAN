import {
    GET_ESPECIES,
    ADD_ESPECIE
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
        case ADD_ESPECIE: 
            return{
                especies: [state.especies,action.payload]
            }
        default: return state
    }
}

export default especieReducer