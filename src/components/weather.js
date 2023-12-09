import React from 'react';
import './styles.css';
import moment from 'moment';

function Weather({weatherData})  {
  <div className='main'>
    <p className='header'>{weatherData.name}</p>
    <div>
      <p className='day'>Day: {moment().format('dddd')}</p>
    </div>

    <div>
      <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
    </div>

  </div>
}

export default Weather;