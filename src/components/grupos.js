import React from 'react';
import Grupo from './grupo';
import './grupos.css';
//import Search from '../../widgets/containers/search';

function Grupos(props) {
  //console.log(props.dia)
  return (
    <div className="Categories">
      
      {
        
        //console.log(props.grupos)
        //props.grupos.map((item) =>{
        props.grupos
          .filter(gpo => {return gpo.dia === props.dia})
          .map((item) =>{
          //var groupies = item.filter(f => {f.Dia==props.dia})

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
