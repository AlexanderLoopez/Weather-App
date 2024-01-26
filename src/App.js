import './App.css';
import weatherAppLogo from './components/Assets/app-logo.png';
import React, { useState } from 'react';
import SearchCity from './components/Weather App/SearchCity';
import CurrentLocation from './components/Weather App/UserLocation';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        src={weatherAppLogo}
        className='app-logo'
        alt='Weather App Logo' />
      </div>
      <h1>Today's Weather</h1>
      <div className='weather-container'>
        <SearchCity onSearch={handleSearch} />
        {weatherData && <CurrentLocation />}
      </div>
    </div>
  );
}

export default App;