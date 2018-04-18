import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from './api/data.json';
// console.log('Hola mundo!' )

const homeContainer = document.getElementById('home-container')
const iframe = "hol" //'<iframe src="https://www.google.com/maps/d/embed?mid=1jiRE_a9vL6WB8T7bIBRLo0dmyAYrwz_Z&ll=25.681284259118854%2C-100.28404542998919&z=17" width="640" height="480"></iframe>'

//https://www.google.com/maps/d/viewer?mid=1jiRE_a9vL6WB8T7bIBRLo0dmyAYrwz_Z&ll=25.680459982959647%2C-100.28252729968676&z=16
//25.681284259118854%2C-100.28404542998919&z=17

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

ReactDOM.render( <Home data={ data } iframe={ iframe } />, homeContainer);

