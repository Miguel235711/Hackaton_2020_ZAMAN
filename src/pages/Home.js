import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import firebase from '../firebase';
import Resizer from 'react-image-file-resizer';
import Swal from 'sweetalert2'
import * as ml5 from 'ml5';

import{
  DropdownEstaciones,
  DropdownCamaras
} from '../components/input';
import NavBar from '../components/NavBar';

import * as colaboradorActions from '../dataManager/colaborador/colaboradorActions';
import * as fotosActions from '../dataManager/foto/fotoActions';

import { FOTOS_CARGADAS } from '../utils/NamedRoutes';

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estacion:'',
      camara: '',
      fotos: [],
      redirect: '',
      imgCounter: 0,
      notImageCounter: 0,
      predictions: {
        "Oso": [],
        "Jaguar": [],
        "Puma": [],
        "Zorra Gris": [],
        "Coyote": [],
        "Nada": []
      },
      errors: 0
    }
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
  }

  async loadML(){
    var errors = 0
    try{
      const animalClassifier = await ml5.imageClassifier('./Animal/model.json')
      const especieClassifier = await ml5.imageClassifier('./Especies/model.json')
      this.props.uploaded_fotos.forEach( async foto => {
        try{
          const image = document.getElementById(foto.name)
          const isAnimal = await animalClassifier.predict(image,1)
          
          if(isAnimal[0].label === 'Animal') {
            const results = await especieClassifier.predict(image,1)
            console.log(results)
            const prediction = results[0]
            if(prediction.confidence > 0.5){
              const { predictions } = this.state
              console.log(prediction)
              console.log(predictions)
              const animalPrediction = [...predictions[prediction.label], foto]
              const newPredictions = {...predictions, [prediction.label]: animalPrediction}
              console.log(newPredictions)
              this.setState({predictions: newPredictions})
            }
          } else {
            const { predictions } = this.state
            const animalPrediction = [...predictions['Nada'], foto]
            const newPredictions = {...predictions, 'Nada': animalPrediction}
            this.setState({predictions: newPredictions})
          }
        }catch (err) {
          console.log(err)
          errors++
        }
        
      });
      console.log('Hola')
      this.setState({errors})
      return true
      // const image = document.getElementById('demo_image')
      /*const predictions = await model.classify(image);
      console.log(predictions);
      console.log('model loaded!!!')*/
    }catch(e){
      console.log(`error in loadML() ${e}`)
      throw new Error('Sucedió un error clasificando las imagenes')
    }

  }

  componentDidMount() {
    //console.log('componentDidMount')
    this.props.fetchColaboradores()
    // this.props.addColaborador({nombre: 'mike was here'})
    // this.loadML()
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
    // console.log(event.target.files)
    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    var files = false
    if(event.target.files) {
      files = true
    }
    this.setState({fotos: []})
    if(files) {
      Object.keys(event.target.files).forEach(index => {
        var file = event.target.files[index]
        if(!types.every(type => file.type !== type)) {
          Resizer.imageFileResizer(
              file,
              800,
              800,
              file.type,
              70,
              0,
              uri => {
                // console.log(uri)
                // console.log(file)
                const newFile = { 
                  lastModified: file.lastModified,
                  lastModifiedDate: file.lastModifiedDate,
                  name: file.name,
                  size: file.size,
                  type: file.type, 
                  uri,
                }
                const newFotos = [...this.state.fotos, file] 
                const newUploadedFotos = [...this.props.uploaded_fotos, newFile]
                const imgCounter = this.state.imgCounter+1
                this.setState({fotos: newFotos, imgCounter})
                this.props.setUploadedFotos(newUploadedFotos)
              },
              'base64'
          );
        } else {
          const notImageCounter = this.state.notImageCounter+1
          this.setState({notImageCounter})
        }
      });
    }
  }

  procesarData = async () => {
    return Swal.fire({
      title: 'Procesar imagenes',
      text: `¡Deseas que las ${this.state.imgCounter} imagenes cargadas sean procesadas? Esto puedes tomar varios minutos`,
      icon: 'question',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D32B2B',
      background: '#EDF0F2',
      preConfirm: async () => {
        return this.loadML().catch( error => {
            console.log(error)
            Swal.showValidationMessage(
                `${'Ocurrio un error' + ((error[0]) ? (': '+ error[0].message) : '' )}`
            )

        })
    },
    allowOutsideClick: () => !Swal.isLoading()
    }).then(result => {
      if(result.isConfirmed) {
        this.setState({redirect: formatRoute(FOTOS_CARGADAS) })
      }
    })
  }

  Redirect() {
    this.setState({redirect: ''})
    return <Redirect push to={this.state.redirect}/>
  }

   render() {
    // this.addFireData()
    //this.getFireData().then((data)=>{
      //console.log(data.size)
      /*data.docs.forEach((value)=>{
        console.log(`value ${value}`)
      })*/
    //})<img id="demo_image" crossOrigin="anonymous" src="DSCF0038.jpg" alt="Ejemplo animal"/>
    
    
    return (
      <div className="main-cont">
            <NavBar />
            { (this.state.redirect) ? this.Redirect() : '' }
            { this.props.uploaded_fotos.map(foto => {
              return(<img id={foto.name} crossOrigin="anonymous" src={foto.uri} alt={foto.name} hidden />)
            }) }
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
                            {
                              (this.state.imgCounter) ? <span>{this.state.imgCounter + ' imagenes cargadas'}</span> : ''
                            }
                            {
                              (this.state.notImageCounter) ? <span>{this.state.imgCounter + ' archivos que no son imagenes descartaos'}</span> : ''
                            }
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
                                <div className="input-group my-3" key={key}>
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
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
                                <div className="input-group my-3" key={key}>
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      <input type="checkbox" aria-label="Checkbox for following text input"   />
                                    </div>
                                  </div>
                                    {option.nombre}
                                </div>
                              ))
                            }
                            <div className="d-flex justify-content-center">
                              {
                                (this.state.imgCounter)
                                ? <button onClick={this.procesarData} className="btn-1">Procesar imagenes</button>
                                : <button disabled className="btn-1">Procesar imagenes</button>
                              }
                                    
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
                                <div className="input-group my-3" key={key}>
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
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

const mapStateToProps =({ camaraReducer, estacionReducer, colaboradorReducer, fotoReducer}) => {return { ...camaraReducer, ...estacionReducer, ...colaboradorReducer, ...fotoReducer }}

const { fetchColaboradores } = colaboradorActions
const { setUploadedFotos } = fotosActions

const mapDispatchToProps = {
  fetchColaboradores,
  setUploadedFotos
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
