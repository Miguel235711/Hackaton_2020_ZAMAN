import {
    GET_ESTACIONES,
    ADD_ESTACION
} from './estacionTypes';

const INITIAL_STATE = {
    estaciones: [
        {
            IDLocalidad: 'AW_AE01',
            Localidad: 'Comunidad Achuar de Wachirpas Amazonas Ecuatoriano',
            NumeroEstacion: 'AW_AE01.3',
            Provincia: 'Pastaza',
            RegionAdministrativa: 3,
            Pais: 'Ecuador',
            Tipo: 'Sencilla',
            Notas: 'Paraje Lagunas',
        },
        {
            IDLocalidad: 'AW_AE01',
            Localidad: 'Comunidad Achuar de Wachirpas Amazonas Ecuatoriano',
            NumeroEstacion: 'AW_AE01.4',
            Provincia: 'Morona Santiago',
            RegionAdministrativa: 6,
            Pais: 'Ecuador',
            Tipo: 'Sencilla',
            Notas: 'Paraje Río Sanguijuela/ Jichach entsa',
        }
    ],
}



const estacionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ESTACIONES:
            return {
                ...state,
                estaciones: action.payload
            }
        case ADD_ESTACION:
            return{
                ...state,
                estaciones: [...state.estaciones,action.payload]
            }
        default: return state
    }
}

export default estacionReducer