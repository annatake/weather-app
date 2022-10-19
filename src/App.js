import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Weather from './components/Weather';
import useCurrentDate from './utils/GetDate';
import useCurrentTime from './utils/GetTime';

function App() {

  let currentDate = useCurrentDate();
  let currentTime = useCurrentTime();

  return (
    <div className="app">
      <div className="sun-container"><span className="sun"></span></div>
      <Greeting currentDate={currentDate} currentTime={currentTime}></Greeting>
      <Weather></Weather>
    </div>
  );
  
}

export default App;
