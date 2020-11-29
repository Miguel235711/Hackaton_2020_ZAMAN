import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';

class EspecieImageList extends Component {
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
    return this.props.uploaded_fotos.map((item, key) =>{
    if(key >= 3) {
        return (
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
        )
    }})
  }

  render() {
    return (
      <div className="main-cont">
        <NavBar />
        <div>
          <div className="justify-content-center pt-5">
              <div className="d-flex justify-content-center">
                  <h3><b>Puma concolor (Linnaeus, 1771)</b></h3>
              </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="list-card"> 
              {(this.props.uploaded_fotos ) ? this.showList() : '' }
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

export default connect(mapStateToProps, null)(EspecieImageList)