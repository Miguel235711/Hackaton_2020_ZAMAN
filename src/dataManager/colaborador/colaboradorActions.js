import firebase from '../../firebase';
import {
    GET_COLABORADORES,
    ADD_COLABORADOR
} from './colaboradorTypes';


const colaboradoresConverter = {
    fromFirestore(snapshot, options){
        const data = snapshot.data(options)
        return { 
            id: snapshot.id,
            nombre: data.nombre
        }
    },
    toFirestore(colaborador){
        return colaborador
    }
}

const getColaboradorRef = ()=> firebase.firestore().collection('rpd').withConverter(colaboradoresConverter)

export const addColaborador = (colaborador) => async dispatch =>{
    console.log('addColaborador')
    getColaboradorRef().add(colaborador).then(success=>{
        console.log(success)
        dispatch({type: ADD_COLABORADOR,payload: colaborador})
    })
}
export const fetchColaboradores =  () => async dispatch =>{
    // console.log('fetchColaboradores')
    const people = (await getColaboradorRef().get()).docs.map((person)=>person.data())
    // console.log(`people: ${people}`)
    dispatch({type: GET_COLABORADORES,payload: people})
}