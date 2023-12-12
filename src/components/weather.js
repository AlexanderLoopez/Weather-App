import React from 'react';
import './styles.css';
import moment from 'moment';

function Weather({weatherData})  {
  <div className='main'>
    <p className='header'>{weatherData.name}</p>
    <div className='flex'>
      <p className='day'>Day: {moment().format('dddd')}</p>
      <p className='day'>{moment().format('LL')}</p>
    </div>

    <div className='flex'>
      <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
      <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
    </div>

  </div>
}

export default Weather;