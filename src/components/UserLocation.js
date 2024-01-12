import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    //Get user's current location with geolocation API

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const apiKey = '7c3e05e851f1dfec62f00f4f999fcf0b';
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );
            setLocation(response.data);
          } catch (error) {
            console.error('Error fetching weather data:', error.message);
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    }
}, []);

  return (
    <div>
      <h2>Current Location Weather</h2>
      {location && (
        <div>
          <p>City: {location.name}</p>
          <p>Temperature: {location.main.temp}</p>
        </div>
      )}
    </div>
  );
};

export default UserLocation;