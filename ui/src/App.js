import React, { Component } from 'react';
import './App.css';
import Jobs from './components/Jobs';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Jobs key="1"/>
      </div>
    );
  }
}

export default App;
