import React from 'react';
//import { Nav, NavItem, NavLink, TabContent,TabPane,Row, Col, Card, CardTitle, CardText, Button  } from 'reactstrap';
//import Playlist from '../../playlist/components/playlist.js';
import './grupo.css';

function Grupo(props) {
  return (
    
   <ul className="list-group">
      <li className="list-group-item justify-content-between">
      <h2 className="Grupo-title">{props.ArtistaGrupo}</h2> 
      <p className="card-text">
        { props.Escenario } 
        <br />
        { "De " + props.inicio + " a " + props.fin + " (" + props.dia.replace('sabado', 'sábado') + ")"} 
      </p>
      
      </li>

    </ul>
  )
}

export default Grupo;



      {/* <p className="Grupo-description">{props.dia + " " + props.Escenario + " " + props.fecha + " " + props.inicio}</p> */}



 {/* <h4>{props.fecha.substring(6, 10) + " " + props.fecha.substring(3, 5)  + " " + props.fecha.substring(0, 2) }</h4> */}
      {/* <p>{new Date(props.fecha.split('/')[2], //.substring(6, 10), 
                    props.fecha.split('/')[1]-1, //.substring(3, 5), 
                    props.fecha.split('/')[0], //.substring(0, 2), 
                    props.inicio.split(':')[0], 
                    props.inicio.split(':')[1]
                    ).toString() } 
      </p>*/}

      {/* <h4>{props.inicio.split(':')[0] + " " + props.inicio.split(':')[1] }</h4> */}
      {/* <h4>{new Date(props.inicio).getTime() }</h4> */}

      {/* <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      /> */}


