import './App.css';
import React, { useState } from 'react';

const api = {
  key: '7c3e05e851f1dfec62f00f4f999fcf0b',
  base: 'https://api.openweathermap.org/data/2.5/'
};

  function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'

          />
        </div>
        <div>
          <div className='location-box'>
            <div className='location'>New York City, US</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;