import React, { Component } from 'react';
import Catalog from '../src/catalog';

import data from '../src/data/mock.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Falabella Shopping Cart</h1>
        <Catalog data={data}/>
      </div>
    );
  }
}

export default App;
