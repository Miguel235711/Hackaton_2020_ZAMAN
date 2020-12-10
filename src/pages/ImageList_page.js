import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatRoute } from 'react-router-named-routes';

import NavBar from '../components/NavBar';
import { EXPECIE_IMAGENES } from '../utils/NamedRoutes';

class ImageList extends Component {
  constructor(props){
    super(props);
    this.state = {
        img: '',
    }
  }

  getDate(d) {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const date = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()
        const min = d.getMinutes()
        const hrs = (d.getHours() > 12) ? d.getHours() % 12 : d.getHours()
        const time = ((hrs < 10) ? '0'+ hrs : hrs ) + ':' + ((min < 10) ? '0'+ min : min ) + ((d.getHours() > 11) ? ' p.m.' : ' a.m.' )
        return date + ' ' + time
  }

  showList() {
    return this.props.uploaded_fotos.map((item, key) => {
      if(key >= 3) { return(
        <div className="card my-4" key={key}>
            <div className="list-card-body col-md-12">
                <div className="list-img col-md-3" data-toggle="modal" data-target="#Modal-img" onClick={() => this.setState({img: item.uri})}>
                  <img src={item.uri} alt='Selected logo'/>
                </div>
                <div className="list-card-content p-3 col-md-9">
                    <div onClick={()=>{}} style={{cursor:'pointer'}}>
                        <span className="d-block list-card-title"> { item.name } </span>
                        <span className="d-block list-card-title"> { this.getDate(item.lastModifiedDate) } </span>
                    </div>
                </div>
            </div>
        </div>
    )}})
  }

  showList2() {
    return this.props.uploaded_fotos.map((item, key) => {
      if(key < 3) { return(
      <div className="card my-4" key={key}>
          <div className="list-card-body col-md-12">
              <div className="list-img col-md-3" data-toggle="modal" data-target="#Modal-img" onClick={() => this.setState({img: item.uri})}>
                <img src={item.uri} alt='Selected logo'/>
                <div className="opaque-layer"></div>
              </div>
              <div className="list-card-content p-3 col-md-9">
                  <div onClick={()=>{}} style={{cursor:'pointer'}}>
                      <span className="d-block list-card-title"> { item.name } </span>
                      <span className="d-block list-card-title"> { this.getDate(item.lastModifiedDate) } </span>
                  </div>
              </div>
          </div>
      </div>
    )}})
  }

  showList3(fotosEspecie) {
    console.log(fotosEspecie)
    fotosEspecie.map( (item) => {
      console.log(item)
      return (
        <div className="card my-4" key={item.name}>
            <div className="list-card-body col-md-12">
                <div className="list-img col-md-3" data-toggle="modal" data-target="#Modal-img" onClick={() => this.setState({img: item.uri})}>
                  <img src={item.uri} alt='Selected logo'/>
                </div>
                <div className="list-card-content p-3 col-md-9">
                    <div onClick={()=>{}} style={{cursor:'pointer'}}>
                        <span className="d-block list-card-title"> { item.name } </span>
                        <span className="d-block list-card-title"> { this.getDate(item.lastModifiedDate) } </span>
                    </div>
                </div>
            </div>
        </div>
    )})
  }

  showLists = () => {
    const { predictions } = this.props
    return (
      Object.keys(predictions).map( especie_key => {
        if(predictions[especie_key].length) return (
          <div>
            <div className="d-flex justify-content-between">
              <span>{predictions[especie_key].length} imagenes de {especie_key}</span>
              <Link className="btn-1" to={formatRoute(EXPECIE_IMAGENES)}>Guardar</Link>
            </div>
            { predictions[especie_key].map( (item) => {
                return (
                  <div className="card my-4" key={item.name}>
                      <div className="list-card-body col-md-12">
                          <div className="list-img col-md-3" data-toggle="modal" data-target="#Modal-img" onClick={() => this.setState({img: item.uri})}>
                            <img src={item.uri} alt='Selected logo'/>
                          </div>
                          <div className="list-card-content p-3 col-md-9">
                              <div onClick={()=>{}} style={{cursor:'pointer'}}>
                                  <span className="d-block list-card-title"> { item.name } </span>
                                  <span className="d-block list-card-title"> { this.getDate(item.lastModifiedDate) } </span>
                              </div>
                          </div>
                      </div>
                  </div>
              )})
             }
          </div>
        )
      })
    )
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
              {
                this.showLists()
              } 
            </div>
          </div>
        </div>
        <div className="modal fade" id="Modal-img" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered justify-content-center" style={{maxWidth:'80%'}}>
                <img src={this.state.img} alt="content" ></img>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fotoReducer }) => fotoReducer

export default connect(mapStateToProps, null)(ImageList)