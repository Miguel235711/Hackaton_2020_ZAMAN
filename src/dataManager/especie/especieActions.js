import firebase from '../../firebase';
import {
    GET_ESPECIES,
    ADD_ESPECIE
} from './especieTypes';


const especiesConverter = {
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

const getEspecieRef = ()=> firebase.firestore().collection('especie').withConverter(especiesConverter)

export const addEspecie = (especie) => async dispatch =>{
    console.log('addEspecie')
    getEspecieRef().add(especie).then(success=>{
        console.log(success)
        dispatch({type: ADD_ESPECIE,payload: especie})
    })
}
export const fetchEspecies =  () => async dispatch =>{
    console.log('fetchEspecies')
    const especies = (await getEspecieRef().get()).docs.map((especie)=>especie.data())
    console.log(`photos: ${especies}`)
    dispatch({type: GET_ESPECIES,payload: especies})
}