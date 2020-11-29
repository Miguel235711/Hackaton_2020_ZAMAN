import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Spinner from '../components/spinner';
import Table from '../components/Table';

import * as estacionActions from '../dataManager/estacion/estacionActions';

import estacionHeaders from '../assets/estacionHeaders.json';

class EstacionesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: '',
        }
    }

    componentDidMount() {
        // this.props.fetchEstaciones()
    }

    render() {
        return (
        <div className="main-cont">
            <NavBar />
            <div className="justify-content-center pt-5">
                <div className="d-flex justify-content-center">
                    <h3><b>Estaciones</b></h3>
                </div>
            </div>
            {
                (this.props.estaciones)
                ? <Table data={this.props.estaciones} headers={estacionHeaders} />
                : <Spinner />
            }
        </div>
        );
    }
}

const mapStateToProps = ({ estacionReducer }) => estacionReducer

export default connect(mapStateToProps, estacionActions)(EstacionesList)