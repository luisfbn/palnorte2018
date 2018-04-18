import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import data from './api/data.json';
import Home from './pages/containers/home';
import registerServiceWorker from './registerServiceWorker';

const homeContainer = document.getElementById('root')

//render( <Home data={data} />, homeContainer);

ReactDOM.render(<Home data={data} />, homeContainer);

registerServiceWorker();
