import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import{
  MailInput,
} from './components/input';

import * as fotoActions from './dataManager/foto/fotoActions';
import firebase from './firebase';

 class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  componentDidMount() {
    this.props.getFotos();
  }

  postFoto() {
    const info = this.state
    // post
    
    
  }
  showFotos() {
    return this.props.fotos.map(item => (
      <tr>
        <th className="sb-table-content"><span>{item.nombre}</span></th>
      </tr>
    ))
  }
  
  async addFireData(){
    
    await firebase.firestore().collection('item').add({
      IDLocalidad: 'AW_AE01',
      Localidad: 'Comunidad Achuar de Wachirpas Amazonas Ecuatoriano',
      NumeroEstacion: 'AW_AE01.3',
      Provincia: 'Pastaza',
      RegionAdministrativa: 3,
      Pais: 'Ecuador',
      Tipo: 'Sencilla',
      Notas: 'Paraje Lagunas',
      Marca: 'Bushnell',
      Modelo: '4K',
      OrientacionGeografica:'',
      FechaColocacion: firebase.firestore.Timestamp.now(),
      FechaRemocion:  firebase.firestore.Timestamp.now(),
      Notas: 'Notas ejemplo',
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
      NumeroFotografia:'MCC01.jpg',
      FechaFotoCaptura: await firebase.firestore.Timestamp.now(),
      Reino:'Animalia',
      Filo: 'Chordata',
      Clase: 'Mammalia',
      Orden: 'Carnivora',
      Familia: 'Felidae',
      Genero: 'Leopardus (Gray, 1842)',
      Especie: 'Leopardus pardalis (Linnaeus, 1758)',
      NombreComunESP: 'Ocelote',
      NombreComunING: 'Ocelot',
      Sexo: 'ND',
      Edad: 'A',
      NumIndividuos: 1,
      IdentificadoPor: ['Michelle Carrillo'],
      RedListIUCN: 'Lc',
      LibroRojoEcuador: 'Nt',
      Project: '',
      ProjectManager: '',
      Laboratory: [
        'Animal Karma',
        'Foundation y Fundación',
        'IKIAM'
      ],
      LaboratoryManager: '',
      FinancialSupport: '',
      ResponsableTecnicoEnCampo:[
        'Mariam Weston',
        'Napoleón Uyunkar',
        'Anuar Hernández '
      ],
      DigitalCardWork: ['Michelle Carrillo']
    })
  }
  async getFireData(){
   return await (firebase.firestore().collection('react').get())
  }
   render() {
    //this.addFireData()
    this.getFireData().then((data)=>{
      console.log(data.size)
      /*data.docs.forEach((value)=>{
        console.log(`value ${value}`)
      })*/
    })
    return (
      <div className="App">
        <MailInput
          name = "name"
          label = "Nombre: "
          value = { this.state.name }
          validate = { false }
          onChange = { (eventTarget) => this.setState({name: eventTarget.value}) }
        />
        <button onClick={this.postFoto}>Mandar</button>
        <br/>
        <br/>
        <table className="sb-table table table-striped text-dark">
            <thead className="sb-table-header">
              <tr>
                <th scope="col">Nombre</th>
              </tr>
            </thead>
            <tbody className="sb-table-body"> 
              {
                (this.props.fotos) ? this.showFotos : ''
              }
            </tbody>
        </table>  
        
      </div>

    );
   }
}

const mapStateToProps =({ fotoReducer }) => fotoReducer

export default connect(mapStateToProps, fotoActions)(App);
