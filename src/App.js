import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHELFIE</h1>
        </header>
        <div>
          <button className='btn'>Shelf A</button>
          <button className='btn'>Shelf B</button>
          <button className='btn'>Shelf C</button>
          <button className='btn'>Shelf D</button>
        </div>
      </div>
    );
  }
}

export default App;
