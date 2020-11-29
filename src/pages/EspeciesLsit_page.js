import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Spinner from '../components/spinner';
import Table from '../components/Table';

import * as especieActions from '../dataManager/especie/especieActions';

import especieHeaders from '../assets/especieHeaders.json';

class EspecieList extends Component {
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
                    <h3><b>Especies</b></h3>
                </div>
            </div>
            {
                (this.props.especies)
                ? <Table data={this.props.especies} headers={especieHeaders} />
                : <Spinner />
            }
        </div>
        );
    }
}

const mapStateToProps = ({ especieReducer }) => especieReducer

export default connect(mapStateToProps, especieActions)(EspecieList)