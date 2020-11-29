import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';

export default class ImageList extends Component {

  showList() {
    return this.props.fotos.map((item, key) => (
        <div className="card my-4" key={item.contenido_id}>
            <div className="list-card-body col-md-12">
                <div className="sb-list-img col-md-3" data-toggle="modal" data-target="#Modal-img" onClick={()=> this.selectImage(content, contenido_id, puntos)}>
                    <div style={{backgroundImage: 'url('+item.ima+')'}}></div>
                    <div className="sb-opaque-layer"></div>
                    <div className="d-flex justify-content-center align-items-center" ><span className="icon icon-view"/> </div>
                </div>
                <div className="list-card-content p-3 col-md-9">
                    {(showOptions) 
                        ? <div className="d-flex justify-content-end"><button onClick={ () =>this.options(item.titulo, key, item.contenido_id)} className="mini-icon icon-options"/></div>
                        : ''
                    }
                    <div onClick={()=>this.description(item)} style={{cursor:'pointer'}}>
                        <span className="d-block list-card-title"> { item.titulo } </span>
                        { this.showDate( item.fechaPublicacion ) }
                        <span className="list-card-des">{item.descripcion}</span>
                        <div className="list-card-pts"> {item.puntos} Puntos</div>
                    </div>
                </div>
            </div>
        </div>
    ))
  }

  render() {
    return (
      <div className="main-cont">
        <NavBar />
        <div>
          <div className="justify-content-center pt-5">
              <div className="d-flex justify-content-center">
                  <h3><b>Imagenes</b></h3>
              </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="list-card"> 
              {(this.props.fotos ) ? this.showList() : '' }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fotoReducer }) => fotoReducer

export default connect(mapStateToProps, null)(ImageList)