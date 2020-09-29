import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';

class Main extends Component {
  
  render() {
    return (
      <App/>
    );
  }
}

render(<Main />, document.getElementById('root'));
