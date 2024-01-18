import React, { useState } from 'react';
import axios from 'axios';
import search from '../Assets/search.png'
import clear from '../Assets/clear.png';
import cloud from '../Assets/cloud.png';
import drizzle from '../Assets/drizzle.png';
import humidity from '../Assets/humidity.png';
import rain from '../Assets/rain.png';
import snow from '../Assets/snow.png';
import wind from '../Assets/wind.png';

const SearchCity = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    try {
      const apiKey = '7c3e05e851f1dfec62f00f4f999fcf0b';
      const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message)
    }
  };

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <p>City: {location.name}</p>
        <p>Temperature: {location.main.temp}</p>
      </div>
    </div>
  );
};

export default SearchCity;

