import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';
import { EXPECIE_IMAGENES } from '../utils/NamedRoutes';

export default class Table extends Component {

    showHeaders() {
        return (
            <tr>{this.props.headers.map((header) => 
                (<th key={header.id} scope="col">{header.title}</th>))
            }
        </tr>
        )
    }

    showContent() {
        return this.props.data.map((item, key) => (
                <tr key={key}>
                        {this.props.headers.map((header, key) => (<th key={key} className="ak-table-content"><span>{item[header.id]}</span></th>))}
                </tr>
        ))
    }

    render() {
        return (
            <div className=" my-5 ak-table-wrap">
                <Link to={formatRoute(EXPECIE_IMAGENES)}>
                <table className="ak-table table table-striped text-dark">
                    <thead className="ak-table-header">
                        {this.showHeaders()}
                    </thead>
                    <tbody className="ak-table-body">
                        {this.showContent()}
                    </tbody>
                </table>  
                </Link>
            </div>
        )
    }
}