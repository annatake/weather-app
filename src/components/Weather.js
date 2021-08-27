import React, { useState } from 'react';

function Weather() {
  // custom react hook for retrieving weather of given location
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
  

  return(
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
                <div className="icon-container"><img id="weather-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></div>
                <div className="current-weather">{weather.weather[0].main}</div>
              </div>

              <div className="location">{weather.name}, {weather.sys.country}</div>
            </>
            )}
            <div className="date">{}</div>

          </div>

      </main>
  );
}

export default Weather;