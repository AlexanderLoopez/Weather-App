import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-css';
import { CardContent, CardHeader } from 'semantic-ui-react';

const CardExampleCard = ({weatherData}) => (
    <Card>
        <CardContent>
            <CardHeader className='header'>{weatherData.name}</CardHeader>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Sunrise: {weatherData.sys.sunrise}</p>
            <p>Sunset: {weatherData.main.sunset}</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}</p>
        </CardContent>
    </Card>
);

export default CardExampleCard;