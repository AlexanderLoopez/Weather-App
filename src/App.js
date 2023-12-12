import './App.css';
import React, { useState, useEffect } from 'react';
import Weather from './components/Weather.js';

const api = {
  key: '7c3e05e851f1dfec62f00f4f999fcf0b',
  base: 'https://api.openweathermap.org/data/2.5'
}

function App() {

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [weatherData, setWeatherData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  await fetch(`${api.base}/weather/?lat=${lat}&lon={long}&units=metric&APPID=${api.key}}`)
  .then(res => res.json())
  .then(result => {
    setWeatherData(result)
    console.log(result);
  });
}
    fetchData();
}, [lat, long])

  return (
    <div className="App">
      {(typeof weatherData.main != 'undefined') ? (
        <Weather weatherData={weatherData}/>
      ): (
        <div>
        </div>
      )}
    </div>
  );
};

export default App;