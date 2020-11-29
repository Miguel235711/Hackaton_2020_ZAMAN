import { combineReducers } from 'redux';

import fotoReducer from './foto/fotoReducer';
import camaraReducer from './camara/camaraReducer';
import colaboradorReducer from './colaborador/colaboradorReducer';
import especieReducer from './especie/especieReducer';
import estacionReducer from './estacion/estacionReducer';

export default combineReducers({
    fotoReducer,
    camaraReducer,
    colaboradorReducer,
    estacionReducer,
    especieReducer
})