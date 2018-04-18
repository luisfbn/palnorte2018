import React from 'react';
//import Playlist from '../../playlist/components/playlist.js';
import './grupo.css';

function Grupo(props) {
  return (
    <div className="Grupo">
      <p className="Grupo-description">{props.dia + " " +  props.Escenario}</p>
      <h2 className="Grupo-title">{props.ArtistaGrupo}</h2>
      
      {/* <Playlist
        handleOpenModal={props.handleOpenModal}
        playlist={props.playlist}
      /> */}
    </div>
  )
}

export default Grupo;
