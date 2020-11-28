import { GET_FOTOS } from './fotoTypes';

export const getFotos = () => async dispatch => {

    // aqui va el get
    const response = await axios.post( baseUrl+url, data, {withCredentials: true})
    .catch(error => {
        console.log(error)
    })

    const fotos = await response.data
    dispatch({
        type: GET_FOTOS,
        payload: fotos
    })

}