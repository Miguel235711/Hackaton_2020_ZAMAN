import {
    GET_ESPECIES,
    ADD_ESPECIE
} from './especieTypes';

const INITIAL_STATE = {
    especies: [   
        {
            Reino:"Animalia",
            Filo: "Chordata",
            Clase: "Mammalia",
            Orden: "Carnivora",
            Familia: "Felidae",
            Genero: "Puma (Jardine, 1834)",
            Especie: "Puma concolor (Linnaeus, 1771)",
            NombreComunESP: "Puma",
            NombreComunING: "Puma"
        },
        {
            Reino:"Animalia",
            Filo: "Chordata",
            Clase: "Mammalia",
            Orden: "Carnivora",
            Familia: "Felidae",
            Genero: "Panthera",
            Especie: "Panthera onca (Linnaeus, 1758)",
            NombreComunESP: "Jaguar",
            NombreComunING: "Jaguar"
        },
        {
            Reino:"Animalia",
            Filo: "Chordata",
            Clase: "Mammalia",
            Orden: "Carnivora",
            Familia: "Canidae",
            Genero: "Canis",
            Especie: "Canis latrans (Say, 1823)",
            NombreComunESP: "Coyote",
            NombreComunING: "Coyote"
        },
        {
            Reino:"Animalia",
            Filo: "Chordata",
            Clase: "Mammalia",
            Orden: "Carnivora",
            Familia: "Canidae",
            Genero: "Urocyon",
            Especie: "Urocyon cinereoargenteus (Schreber, 1775)",
            NombreComunESP: "Zorra gris",
            NombreComunING: "Gray fox"
        },
        {
            Reino:"Animalia",
            Filo: "Chordata",
            Clase: "Mammalia",
            Orden: "Carnivora",
            Familia: "Ursidae",
            Genero: "Ursus",
            Especie: "Ursus americanus (Pallas, 1780)",
            NombreComunESP: "Oso negro",
            NombreComunING: "Black bear"
        }
    ],
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