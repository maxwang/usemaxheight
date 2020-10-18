import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NiceGrid } from './components/NiceGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a test page for data table auto height</h1>
      </header>
      <NiceGrid />
    </div>
  );
}

export default App;
