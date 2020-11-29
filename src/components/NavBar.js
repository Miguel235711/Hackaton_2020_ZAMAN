import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';

import { ESPECIES, ESTACIONES, HOME_PAGE } from '../utils/NamedRoutes';

class NavBar extends Component {

    buttons = () =>(
        <div className="row">
            <Link to={formatRoute(ESTACIONES)} className="navbar-brand">
                <div className="nav-element">
                    <span className="d-flex justify-content-center">Estaciones</span>
                </div>
            </Link>
            <Link to={formatRoute(HOME_PAGE)} className="navbar-brand">
                <div className="nav-element">
                    <span className="d-flex justify-content-center">Camaras</span>
                </div>
            </Link>
            <Link to={formatRoute(ESPECIES)} className="navbar-brand">
                <div className="nav-element">
                    <span className="d-flex justify-content-center">Especies</span>
                </div>
            </Link>
            <Link to={formatRoute(HOME_PAGE)} className="navbar-brand">
                <div className="nav-element">
                    <span className="d-flex justify-content-center">Colaboradores</span>
                </div>
            </Link>
        </div>
    );
    
    render() {
        return (
            <nav className="navbar justify-content-between sticky-top nav-color nav">
                <Link to={formatRoute(HOME_PAGE)} className="navbar-brand">
                    <div className="nav-element">
                        <span className="d-flex justify-content-center">Inicio</span>
                    </div>
                </Link>
                {this.buttons()}
            </nav>
        )
    }
}

export default NavBar