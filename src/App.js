import './App.css';
import React, { useState } from 'react';
import SearchCity from './components/SearchCity';
import UserLocation from './components/UserLocation'

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