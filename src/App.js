import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import Greeting from './components/Greeting';

// TODO: Extract weather search and display into 

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  return (
    <div className="app">
      <div className="sun-container"><span className="sun"></span></div>
      <Greeting></Greeting>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." 
            onKeyPress={search} 
            onChange={e  => setQuery(e.target.value)} 
            value={query}></input>
        </div>

          <div className="weather-box">
          {(typeof weather.main === "undefined") ? ('') : (
            <>
              <div className="current-temp">{Math.round(weather.main.temp)}°c</div>

              <div className="weather-container">
                <div className="current-weather">{weather.weather[0].main}</div>
                <div className="weather-icon"><FontAwesomeIcon icon={faCloudRain } /></div>
              </div>

              <div className="location">{weather.name}, {weather.sys.country}</div>
            </>
            )}
            <div className="date">{}</div>

          </div>

          <div className=""></div>
        
          

      </main>
    </div>
  );
}

export default App;
