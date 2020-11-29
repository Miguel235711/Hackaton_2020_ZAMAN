import {
    GET_COLABORADORES
} from './colaboradorTypes';

const INITIAL_STATE = {
    colaboradores: [
        { nombre: 'Mariam Weston' },
        { nombre: 'Napoleón Uyunkar' },
        { nombre: 'Anuar Hernández' },
        { nombre: 'Michelle Carrillo' }
    ],
}

const colaboradoresReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_COLABORADORES:
            return {
                ...state,
                colaboradores: action.payload
            }
        default: return state
    }
}

export default colaboradoresReducer