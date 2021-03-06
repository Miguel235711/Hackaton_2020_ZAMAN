import firebase from '../../firebase';
import {
    GET_FOTOS,
    ADD_FOTO,
    SET_UPLOADED_FOTOS,
    SET_PREDICTIONS
} from './fotoTypes';


const fotosConverter = {
    fromFirestore(snapshot, options){
        const data = snapshot.data(options)
        return { 
            id: snapshot.id,
            ...data
        }
    },
    toFirestore(foto){
        return foto
    }
}

const getFotoRef = ()=> firebase.firestore().collection('foto').withConverter(fotosConverter)

export const addFoto = (foto) => async dispatch =>{
    console.log('addFoto')
    getFotoRef().add(foto).then(success=>{
        console.log(success)
        dispatch({type: ADD_FOTO,payload: foto})
    })
}
export const fetchFotos =  () => async dispatch =>{
    console.log('fetchFotos')
    const photos = (await getFotoRef().get()).docs.map((foto)=>foto.data())
    console.log(`photos: ${photos}`)
    dispatch({type: GET_FOTOS,payload: photos})
}

export const setUploadedFotos = (fotos) => dispatch => {
    
    dispatch({
        type: SET_UPLOADED_FOTOS,
        payload: fotos
    })
}

export const setPredictions = predictions => dispatch => {
    dispatch({
        type: SET_PREDICTIONS,
        payload: predictions
    })
}