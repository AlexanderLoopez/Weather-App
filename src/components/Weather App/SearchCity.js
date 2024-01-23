import React, { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../api';

const SearchCity = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {

    const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );

    const dataFetched = await response.json();
    return {
      options: dataFetched.data.map((city) => {
        return {
          value: `${city.latitud} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate 
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchCity;

