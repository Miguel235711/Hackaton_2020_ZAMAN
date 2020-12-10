import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

import { ShortTextInput } from '../../components/input';

export default class CamaraForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            camara: {
                Marca: '',
                Modelo: '',
                OrientacionGeografica: '',
                FechaColocacion: '',
                FechaRemocion: '',
                Notas2: '',
                Latitud: '',
                Longitud: '',
                Datum: '',
                Altitud: '',
                Vegetacion: '',
                Clima: '',
            },
            validation: {
                Marca: '',
                Modelo: '',
                OrientacionGeografica: '',
                FechaColocacion: '',
                FechaRemocion: '',
                Notas2: '',
                Latitud: '',
                Longitud: '',
                Datum: '',
                Altitud: '',
                Vegetacion: '',
                Clima: '',
            }
        }
    }

    showButton = () => {
        const {
            Marca,
            Modelo,
            OrientacionGeografica,
            FechaColocacion,
            FechaRemocion,
            Notas2,
            Latitud,
            Longitud,
            Datum,
            Altitud,
            Vegetacion,
            Clima
        } = this.state.validation

        if(Marca && Modelo && OrientacionGeografica && FechaColocacion 
            && FechaRemocion && Notas2 && Latitud && Longitud && Datum 
            && Altitud && Vegetacion && Clima)
            return <button className="btn-1" >Guardar</button>
        return <button className="btn-1"  disabled >Guardar</button>
    }

    changeState = ( eventTarget, valid ) => {
        const { camara, validation } = this.state
        const newCamara = { ...camara, [eventTarget.name]: eventTarget.value }
        const newValidation = { ...validation, [eventTarget.name]: valid }
        this.setState({ camara: newCamara, validation: (valid !== undefined) ? newValidation: validation })
    }

    render() {
        return (
            <div className="main-cont">
                <NavBar />
                <div className="justify-content-center pt-5">
                    <div className="d-flex justify-content-center">
                        <h3><b>Añadir Camara</b></h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center form">
                    <div className="card-form card">
                        <div className="column">
                            <form>
                            <ShortTextInput
                                name='Marca'
                                label='Marca'
                                value={this.state.camara.Marca}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Modelo'
                                label='Modelo'
                                value={this.state.camara.Modelo}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='OrientacionGeografica'
                                label='Orientacion geografica'
                                value={this.state.camara.OrientacionGeografica}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='FechaColocacion'
                                label='Fecha de colocación'
                                value={this.state.camara.FechaColocacion}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='FechaRemocion'
                                label='Fecha de remoción'
                                value={this.state.camara.FechaRemocion}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Notas2'
                                label='Notas'
                                value={this.state.camara.Notas2}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Latitud'
                                label='Latitud'
                                value={this.state.camara.Latitud}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Longitud'
                                label='Longitud'
                                value={this.state.camara.Longitud}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Datum'
                                label='Datum'
                                value={this.state.camara.Datum}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Altitud'
                                label='Altitud'
                                value={this.state.camara.Altitud}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Vegetacion'
                                label='Vegetacion'
                                value={this.state.camara.Vegetacion}
                                validate={true}
                                onChange={(eventTarget, valid) => this.changeState(eventTarget, valid)}
                            />
                            <ShortTextInput
                                name='Clima'
                                label='Clima'
                                value={this.state.camara.Clima}
                                validate={true}
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
