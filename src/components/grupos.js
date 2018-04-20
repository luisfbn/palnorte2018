import React, { Component } from 'react';
import Grupo from './grupo';
import './grupos.css';


function Grupos(props) {
  
  //console.log(props.dia);
  //console.log(props.artistaGrupo);

  return (

    <div className="Grupos">
      {
        props.grupos
          .sort((a, b) => {
                              var a1 = new Date(b.fecha.substring(6, 10), b.fecha.substring(3, 5)-1, b.fecha.substring(0, 2), b.inicio.split(':')[0], b.inicio.split(':')[1], 0);
                              var b1 = new Date(a.fecha.substring(6, 10), a.fecha.substring(3, 5)-1, a.fecha.substring(0, 2), a.inicio.split(':')[0], a.inicio.split(':')[1], 0);
                              return a1>b1 ? -1 : a1<b1 ? 1 : 0;
                          })
          .filter(gpo => {return gpo.dia === (props.dia == 1 ? "viernes" : "sabado")})
          .filter(gpo => {return gpo.ArtistaGrupo.toString().toLowerCase().indexOf(props.artistaGrupo.toString().toLowerCase()) > -1 || props.artistaGrupo === ''})
          //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
          //this.input.value
          .map((item) =>{

          return (
            <Grupo
              key={item.ID}
              {...item}
              //handleOpenModal={this.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
  
}

export default Grupos
