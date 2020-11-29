import firebase from '../../firebase';
import {
    ADD_COLABORADOR,
    GET_COLABORADORES
} from './estacionTypes'
/*IDLocalidad: 'AW_AE01',
Localidad: 'Comunidad Achuar de Wachirpas Amazonas Ecuatoriano',
NumeroEstacion: 'AW_AE01.3',
Provincia: 'Pastaza',
RegionAdministrativa: 3,
Pais: 'Ecuador',
Tipo: 'Sencilla',
Notas: 'Paraje Lagunas',*/

const estacionConverter = {
    fromFirestore(snapshot, options){
        const data = snapshot.data(options)
        return { 
            id: snapshot.id,
            Localidad: data.Localidad,
            NumeroEstacion: data.NumeroEstacion,
            Provincia: data.Provincia,
            RegionAdministrativa: data.RegionAdministrativa,
            Pais: data.Pais,
            Tipo: data.Tipo,
            Notas: data.Notas
        }
    },
    toFirestore(estacion){
        return estacion
    }
}

const getEstacionRef = ()=> firebase.firestore().collection('estacion').withConverter(estacionConverter)

export const addEstacion = (estacion) => async dispatch =>{
    console.log('addEstacion')
    estacionCollectionRef.add(estacion).then(success=>{
        console.log(success)
        dispatch({type: ADD_COLABORADOR,estacion})
    })
}
export const fetchEstaciones =  () => async dispatch =>{
    console.log('fetchEstaciones')
    const estaciones = (await getEstacionRef().get()).docs.map((estacion)=>estacion.data())
    dispatch({type: GET_COLABORADORES,payload: estaciones})
}