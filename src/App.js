import './App.css';
import React, { useState } from 'react';
import dateBuilder from './components/dateBuilder';


const api = {
  key: '7c3e05e851f1dfec62f00f4f999fcf0b',
  base: 'https://api.openweathermap.org/data/2.5/'
};

  function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch (`${api.base} weather? q=${query} & appid${api.key} & units=metric`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    };
  };

  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={ e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°C
            </div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('') }
      </main>
    </div>
  );
};

export default App;