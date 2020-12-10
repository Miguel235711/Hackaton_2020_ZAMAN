import firebase from '../../firebase';
import {
    GET_CAMARAS,
    ADD_CAMARA
} from './camaraTypes';
/*
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
*/

const camaraConverter = {
    fromFirestore(snapshot, options){
        const data = snapshot.data(options)
        return { 
            id: snapshot.id,
            Modelo: data.Modelo,
            OrientacionGeografica: data.OrientacionGeografica,
            FechaColocacion: data.FechaColocacion,
            FechaRemocion: data.FechaRemocion,
            Notas2: data.Notas2,
            GeoPunto: data.GeoPunto,
            Datum: data.Datum,
            Altitud: data.Altitud,
            Vegetacion: data.Vegetacion,
            Clima: data.Clima,
            Collector: data.Collector
        }
    },
    toFirestore(camara){
        return camara
    }
}

const getCamaraRef = ()=> firebase.firestore().collection('rpd').withConverter(camaraConverter)

export const fetchCamaras =  () => async dispatch =>{
    console.log('fetchCamaras')
    const camaras = (await getCamaraRef().get()).docs.map((camara)=>camara.data())
    console.log(camaras)
    dispatch({type: GET_CAMARAS,payload: camaras})
}
export const addCamara = (camara) => async dispatch =>{
    console.log('addCamara')
    getCamaraRef.add(camara).then(success=>{
        console.log(success)
        dispatch({type: ADD_CAMARA,camara})
    })
}