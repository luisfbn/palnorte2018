import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import data from './api/data.json';
import Home from './pages/containers/home';
import registerServiceWorker from './registerServiceWorker';

const homeContainer = document.getElementById('root')
const iframe = '<iframe src="https://www.google.com/maps/d/embed?mid=1jiRE_a9vL6WB8T7bIBRLo0dmyAYrwz_Z&ll=25.681284259118854%2C-100.28404542998919&z=17" width="100%" style="min-height:90vh" height="100%"></iframe>'

ReactDOM.render( <Home data={ data } iframe={ iframe } />, homeContainer);
registerServiceWorker();


//https://www.google.com/maps/d/viewer?mid=1jiRE_a9vL6WB8T7bIBRLo0dmyAYrwz_Z&ll=25.680459982959647%2C-100.28252729968676&z=16
//25.681284259118854%2C-100.28404542998919&z=17

//render( <Home data={data} />, homeContainer);

