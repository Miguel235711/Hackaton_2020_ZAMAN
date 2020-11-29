import firebase from '../../firebase';
import {
    GET_COLABORADORES,
} from './colaboradorTypes';

export const fetchColaboradores =  () => async dispatch =>{
    console.log('fetchColaboradores')
    const people = await firebase.firestore().collection('rpd').get()
    dispatch({type: GET_COLABORADORES,payload: people.docs.map((person)=>person.data())})
}