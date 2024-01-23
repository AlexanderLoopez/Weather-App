import './App.css';
import React, { useState } from 'react';
import SearchCity from './components/Weather App/SearchCity';
import UserLocation from './components/Weather App/UserLocation';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split('');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
  }

   return (
    <div className="container">
      <SearchCity onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;