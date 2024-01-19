import './App.css';
import React, { useState } from 'react';
import SearchCity from './components/Weather App/SearchCity';
import UserLocation from './components/Weather App/UserLocation';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

   return (
    <div className="container">
      <SearchCity onSearch={handleSearch} />
      {weatherData && <UserLocation />}
    </div>
  );
}

export default App;