import React, { Component } from 'react';
import NavBar from '../components/NavBar';

import { ShortTextInput } from '../components/input'

export default class EstacionForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            estacion: {
                numero_estacion: '',
                provincia: '',
                region_administrativa: '',
                pais: '',
                tipo: '',
                notas: ''
            },
            validation:{
                numero_estacion: '',
                provincia: '',
                region_administrativa: '',
                pais: '',
                tipo: '',
                notas: ''
            }
        }
    }

    showButton= () => {
        const { 
            numero_estacion,
            provincia,
            region_administrativa,
            pais,
            tipo,
            notas
        } = this.state.validation

        if(numero_estacion && provincia && region_administrativa 
            && pais && tipo && notas )
            return <button className="btn-1" >Guardar</button>
        return <button className="btn-1" disabled>Guardar</button>
    }

    changeState = ( eventTarget, valid ) => {
        const { estacion, validation } = this.state
        const newEstacion = { ...estacion, [eventTarget.name]: eventTarget.value }
        const newValidation = { ...validation, [eventTarget.name]: valid }
        this.setState({ estacion: newEstacion, validation: (valid !== undefined) ? newValidation: validation })
    }

    render() {
        return (
            <div className="main-cont">
                <NavBar />
                <div className="justify-contnet-center pt-5">
                    <div className="d-flex justify-content-center">
                        <h3><b>Añadir Estación</b></h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center form">
                    <div className="card-form card">
                        <div className="column">
                            <form>
                                <ShortTextInput 
                                    name='numero_estacion'
                                    label='Número de la estación'
                                    value={ this.state.estacion.numero_estacion}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                                <ShortTextInput 
                                    name='provincia'
                                    label='Provincia'
                                    value={ this.state.estacion.provincia}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                                <ShortTextInput 
                                    name='region_administrativa'
                                    label='Región administrativa'
                                    value={ this.state.estacion.region_administrativa}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                                <ShortTextInput 
                                    name='pais'
                                    label='País'
                                    value={ this.state.estacion.pais}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                                <ShortTextInput 
                                    name='tipo'
                                    label='Tipo'
                                    value={ this.state.estacion.tipo}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                                <ShortTextInput 
                                    name='notas'
                                    label='Notas'
                                    value={ this.state.estacion.notas}
                                    validate = {true}
                                    onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                                />
                            </form>
                            <div className="d-flex justify-content-center mt-4 row">
                                {this.showButton()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
