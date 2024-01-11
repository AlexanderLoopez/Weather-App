import React, { useState, useEffect } from 'react';
// import ReactAnimatedWeather from 'react-animated-weather';

const CurrentLocation = ({ getWeatherData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrentPosition = () => {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLoading(true);
          
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;

              try {
                const apiKey = '7c3e05e851f1dfec62f00f4f999fcf0b';
                const response = await fetch(
                  'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}'
                );
                const data = await response.json();

                getWeatherData(data.name);
              } catch (error) {
                setError('Error getting weather data based on current location.');
              } finally {
                setLoading(false);
              }
            },
            (error) => {
              setError('Error getting current location.');
              setLoading(false);
            }
          );
        };

        getCurrentLocation();
      ), [getWeatherData]);

      return (
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      );
    };

export default CurrentLocation;