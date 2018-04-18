import React from 'react';
import Grupo from './grupo';
import './grupos.css';
//import Search from '../../widgets/containers/search';

function Grupos(props) {
  //console.log(props.dia)
  return (
    <div className="Categories">
      
      {
        props.grupos
          .sort((a, b) => { 
                              var a1 = new Date(b.fecha.substring(6, 10), b.fecha.substring(3, 5)-1, b.fecha.substring(0, 2), b.inicio.split(':')[0], b.inicio.split(':')[1], 0);
                              var b1 = new Date(a.fecha.substring(6, 10), a.fecha.substring(3, 5)-1, a.fecha.substring(0, 2), a.inicio.split(':')[0], a.inicio.split(':')[1], 0);
                              return a1>b1 ? -1 : a1<b1 ? 1 : 0;
                          }) 
          .filter(gpo => {return gpo.dia === props.dia})
          .map((item) =>{

          return (
            <Grupo
              key={item.ID}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Grupos
