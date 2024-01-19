import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";

const SearchCity = ({ onSearch }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {

    const apiKey = '';

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
    );
    const response_1 = await response.json();
    return {
      optiions: response_1.data.map((city) => {
        return {
          value: `${city.latitud} ${city.longitude}`,
          label: `${city.name}, ${city, countryCode}`,
        };
      }),
    };
  };

  const handleOnSearch = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate 
    placeholder='Search for city'
    debounceTimeout={600}
    value={search}
    onChange={handleOnSearch}
    loadOptions={loadOptions}
    />
  );
};

export default SearchCity;

