import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import Resizer from 'react-image-file-resizer';

import{
  DropdownEstaciones,
  DropdownCamaras
} from '../components/input';
import NavBar from '../components/NavBar';

import * as fotoActions from '../dataManager/foto/fotoActions';
import firebase from '../firebase';
import { Home_page } from '../utils/NamedRoutes';

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estacion:'',
      camara: '',
      fotos: []
    }
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
  }

  componentDidMount() {
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


  fileChangedHandler(event) {
    console.log(event.target.files)
    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    var files = false
    var notImages = 0
    if(event.target.files) {
      files = true
    }
    this.setState({fotos: []})
    if(files) {
      Object.keys(event.target.files).forEach(index => {
        var file = event.target.files[index]
        if(!types.every(type => file.type !== type)) {
          console.log(file)
          Resizer.imageFileResizer(
              file,
              800,
              800,
              file.type,
              70,
              0,
              uri => {
                // console.log(uri)
                file = {...file, uri}
                console.log(file)
                const newFotos = [...this.state.fotos, file] 
                this.setState({fotos: newFotos})
              },
              'base64'
          );
        } else {
          notImages++
        }
      });
      console.log(notImages + " archivos encontrados que nos son imagenes y no fueron cargados")
    }
  }

  procesarImagenes() {
    
  }

   render() {
    // this.addFireData()
    this.getFireData().then((data)=>{
      console.log(data.size)
      /*data.docs.forEach((value)=>{
        console.log(`value ${value}`)
      })*/
    })
    
    return (
      <div className="main-cont">
            <NavBar />
            <div>
                <div className="justify-content-center pt-5">
                    <div className="d-flex justify-content-center">
                        <h3><b>Cargar Imagenes</b></h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center form">
                    <div className="card-form card">
                        <div className="column">
                            <div className="d-flex justify-content-center">
                              <button className="btn-file" onChange={this.fileChangedHandler}> 
                                  <label htmlFor="file">Cargar imagenes</label>
                                  <input id="file" directory="" webkitdirectory="" type="file" />
                              </button>
                            </div>
                            <DropdownEstaciones
                                name = "estacion"
                                label = "Estación"
                                value = { this.state.estacion }
                                options = {this.props.estaciones}
                                onChange = { (eventTarget) => this.setState({estacion: eventTarget.value}) }
                            />
                            <DropdownCamaras
                                name = "camara"
                                label = "Camara"
                                value = { this.state.camara }
                                options = {this.props.camaras}
                                onChange = { (eventTarget) => this.setState({camara: eventTarget.value}) }
                            />
                            <div className="text-center">
                                <h5><b>Seleccionar responsables técnico de campo</b></h5>
                            </div>
                            {
                              this.props.colaboradores.map((option, key) => (
                                <div class="input-group my-3" key={key}>
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">
                                      <input type="checkbox" aria-label="Checkbox for following text input"   />
                                    </div>
                                  </div>
                                    {option.nombre}
                                </div>
                              ))
                            }
                            <div className="text-center">
                                <h5><b>Seleccionar responsables de procesamiento de datos</b></h5>
                            </div>
                            {
                              this.props.colaboradores.map((option, key) => (
                                <div class="input-group my-3" key={key}>
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">
                                      <input type="checkbox" aria-label="Checkbox for following text input"   />
                                    </div>
                                  </div>
                                    {option.nombre}
                                </div>
                              ))
                            }
                            <div className="d-flex justify-content-center">
                                    <button className="btn-1" onClick={this.procesarImagenes}>Procesar imagenes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center align-items-center"> 
                            <div>
                                <h3><b>Seleccionar responsables técnico de campo</b></h3>
                            </div>
                            {
                              this.props.colaboradores.map((option, key) => (
                                <div class="input-group my-3" key={key}>
                                  <div class="input-group-prepend">
                                    <div class="input-group-text">
                                      <input type="checkbox" aria-label="Checkbox for following text input"   />
                                    </div>
                                  </div>
                                    {option.nombre}
                                </div>
                              ))
                            }
                            <div>
                                <button className="btn-1 my-1 w-50 d-inline" data-dismiss="modal">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
   }
}

const mapStateToProps =({ camaraReducer, estacionReducer, colaboradorReducer }) => {return { ...camaraReducer, ...estacionReducer, ...colaboradorReducer }}

export default connect(mapStateToProps, fotoActions)(Home);
