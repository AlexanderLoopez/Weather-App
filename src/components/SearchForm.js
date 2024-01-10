import React, { useState } from 'react';

const SearchForm = ({ getWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    getWeatherData(city);
    };
  
    return (
      <div>
        <input 
        type='text'
        placeholder='Enter city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}Get Weahter></button>
      </div>
    );
};

export default SearchForm;