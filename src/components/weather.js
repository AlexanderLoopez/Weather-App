import React from 'react';
import './styles.css'
import moment from 'moment';

const Weather = ({weatherData}) => (
  <div className='main'>
    <div className='top'>
      <p className='header'>{weatherData.name}</p>
    </div>
      <div className='flex'>
        <p className='day'>{moment().format('dddd')}</p>
        <p className='description'>{weatherData.weather[0].description}</p>
      </div>

      <div className='flex'>
        <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
        <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
        <p className='temp'>Windspeed: {weatherData.wind.speed} km/h</p>
        <p className='temp'>Visibility: {weatherData.visibility} km</p>
      </div>

      <div>
        <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className='sunrise-sunset'>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>

  </div>
)

export default Weather;