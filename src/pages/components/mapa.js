import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import Iframe from './iframe';


class Mapa extends Component {

    iframe () {
        return {
        __html: this.props.iframe
        }
    };

    render() { 

    return (
      <div>
        <div dangerouslySetInnerHTML= { this.iframe() } /> 
      </div>
    );
  }
}



export default Mapa