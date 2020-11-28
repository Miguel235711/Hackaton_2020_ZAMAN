import React, { Component } from 'react';
import './App.css';

import{
  MailInput,
} from './components/input';

import * as fotoActions from './dataManager/foto/fotoActions';

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

    // post
    const info = this.state
  }

  showFotos() {
    return fotos.map(item => (
      <tr>
        <th className="sb-table-content"><span>{item.nombre}</span></th>
      </tr>
    ))
  }

   render() {
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
