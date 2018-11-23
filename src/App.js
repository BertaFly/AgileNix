import React, { Component } from 'react';
import './App.css';
import CurrencyTable from './components/CurrencyTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyTable/>
      </div>
    );
  }
}

export default App;
