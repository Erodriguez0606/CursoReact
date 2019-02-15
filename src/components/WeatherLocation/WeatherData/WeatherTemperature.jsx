import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]: "day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
}

const getWheaterIcon = (weatherState)=>{
    const icon = icons[weatherState]
    return (icon)?<WeatherIcons name={icon} size="2x"/>:<WeatherIcons name={"sunny-day"} size="2x"/>;
};

const  WeatherTemperature = ({temperature, weatherState}) => (

    <div>
        {getWheaterIcon(weatherState)}
        <span>{`${temperature}°C`}</span></div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;