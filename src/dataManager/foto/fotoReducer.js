import {
    GET_FOTOS,
    ADD_FOTO
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
        case ADD_FOTO:
            return {
                ...state,
                fotos: [...state.fotos,action.payload]
            }
        default: return state
    }
}

export default fotoReducer