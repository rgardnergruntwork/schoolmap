import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import ChartDisplay from './ChartDisplay'

class App extends React.Component {    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Per County Information Across the US</h2>
        </div>
      <ChartDisplay />
      </div>
    );
  }

}
export default App;
