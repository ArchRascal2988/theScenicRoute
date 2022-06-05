import logo from './logo.svg';
import './App.css';

//From MapboxTutorial and for testing. Probably will change/remove later 
import React, { useRef, useEffect, useState } from 'react';

//This will stay most likely
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'sk.eyJ1IjoiNGdlY2MwIiwiYSI6ImNsNDFmMHFvYjAxOWIzamx5dGI0bXVmbDYifQ.Tnkx80DPYu3PdA5iAcVl4Q';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
