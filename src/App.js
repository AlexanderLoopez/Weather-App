import './App.css';
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
        
      </div>
        <SearchCity onSearch={handleSearch} />
        {weatherData && <CurrentLocation />}
    </div>
  );
}

export default App;