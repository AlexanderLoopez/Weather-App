import React, { useState } from 'react';
import axios from 'axios';

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
    </div>
  );
};

export default SearchCity;

