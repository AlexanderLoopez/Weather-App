import './App.css';
import React, { useState } from 'react';
import SearchCity from './components/Weather App/SearchCity';
import UserLocation from './components/Weather App/UserLocation';
import search from '../Assets/search.png'

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

   return (
    <div className="App">
      <SearchCity onSearch={handleSearch} />
      {weatherData && <UserLocation />}
    </div>
  );
}

export default App;