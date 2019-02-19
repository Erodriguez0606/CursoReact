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

    const sizeIcon = '4x';

    return (icon)?<WeatherIcons name={icon} className={'wicon'} size={sizeIcon}/>:
    <WeatherIcons name={"sunny-day"} className={''} size={sizeIcon}/>;
};

const  WeatherTemperature = ({temperature, weatherState}) => (

    <div className={'weatherTemperatureCont'}>
        {getWheaterIcon(weatherState)}
        <span className={'temperature'}>
            {`${temperature}`}
        </span>
        <span className={'temperatureType'}>
            {` °C`} 
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;