import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';



class Weather extends React.Component {

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        //If user allow location
        .then((position) => {
          this.getWeather(position.coords.latitud, position.coords.longitude);
          })
  
        .catch((err) => {
          //If user denies location
          this.getWeather(28.67, 77.22);
          alert(
            'You have disabled location service. Allow "This App" to access your location. Your current location will be used for calculating real time weather.'
          );
        });
  
      } else {
          alert('Geolocation not avaible');
      }
      
      this.timerID = setInterval(
        () => this.getWeather(this.state.lat, this.state.lon),
        700000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
};

