import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Weather from './components/Weather';

function App() {

  return (
    <div className="app">
      <div className="sun-container"><span className="sun"></span></div>
      <Greeting></Greeting>
      <Weather></Weather>
    </div>
  );
  
}

export default App;
