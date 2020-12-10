import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import Spinner from '../../components/spinner';
import Table from '../../components/Table';

import * as camaraActions from '../../dataManager/camara/camaraActions';

import camaraHeaders from '../../assets/camaraHeaders.json';
import { CAMARA_CREATE } from '../../utils/NamedRoutes';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';

class CamaraList extends Component {
    render() {
        return (
            <div className="main-cont">
                <NavBar />
                <div className="justify-content-center pt-5">
                    <div className="d-flex justify-content-center">
                        <h3><b>Camara</b></h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center py-5">
                    <Link to={ formatRoute(CAMARA_CREATE) } className="btn-1">
                        + Registrar nueva camara
                    </Link>
                </div>
                {
                    (this.props.camaras)
                        ? <Table data={this.props.camaras} headers={camaraHeaders} />
                        : <Spinner />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ camaraReducer }) => camaraReducer

export default connect(mapStateToProps, camaraActions)(CamaraList)