import {
    GET_FOTOS
} from './fotoTypes'

const INITIAL_STATE = {
    fotos: [],
}

const fotoReducer = (state = INITIAL_STATE, action) => {
    switch( action.type ) {
        case GET_FOTOS:
            return {
                ...state,
                fotos: action.payload
            }
        default: return state
    }
}

export default fotoReducer