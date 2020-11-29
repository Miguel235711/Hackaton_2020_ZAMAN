import {
    GET_FOTOS,
    ADD_FOTO,
    SET_UPLOADED_FOTOS
} from './fotoTypes'

const INITIAL_STATE = {
    fotos: [],
    uploaded_fotos: []
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
        case SET_UPLOADED_FOTOS:
            return{
                ...state,
                uploaded_fotos: action.payload
            }
        default: return state
    }
}

export default fotoReducer