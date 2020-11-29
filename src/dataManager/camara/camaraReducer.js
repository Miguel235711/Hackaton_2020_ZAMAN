import {
    GET_CAMARAS
} from './camaraTypes';

const INITIAL_STATE = {
    camaras: [
        {
            Marca: 'Bushnell',
            Modelo: '4K',
            OrientacionGeografica:'',
            FechaColocacion: '17/05/18',
            FechaRemocion:  '',
            Notas2: 'Notas ejemplo',
            GeoPunto: {
                Latitud:  -2.56288407347755,
                Longitud: -76.8923471347454
            },
            Datum: 'WGS84',
            Altitud: 242,
            Vegetacion: 'Bosque Lluvioso de Tierras Bajas',
            Clima: 'Af',
            Collector: [
                'Mariam Weston',
                'Napoleón Uyunkar',
                'Anuar Hernández'
            ],
        }, {
            Marca: 'Bushnell',
            Modelo: '4K',
            OrientacionGeografica:'',
            FechaColocacion: '17/05/18',
            FechaRemocion:  '',
            Notas2: 'Notas ejemplo',
            GeoPunto: {
                Latitud:  -2.58327644837327,
                Longitud: -76.8042640918858
            },
            Datum: 'WGS84',
            Altitud: 260,
            Vegetacion: 'Bosque Lluvioso de Tierras Bajas',
            Clima: 'Af',
            Collector: [
                'Mariam Weston',
                'Napoleón Uyunkar',
                'Anuar Hernández'
            ],
        }
    ],
}

const camaraReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_CAMARAS:
            return {
                ...state,
                camara: action.payload
            }
        default: return state
    }
}

export default camaraReducer