import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE} from '../../../constants/weathers'; 
import './styles.css';

const icons = {
    [CLOUD]:"cloud",
    [SUN]: "day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore", 
    [DRIZZLE]:"day-showers"
}

const getWheaterIcon = (weatherState)=>{
    const icon = icons[weatherState]

    const sizeIcon = '4x';

    return (icon)?<WeatherIcons name={icon} className={'wicon'} size={sizeIcon}/>:
    <WeatherIcons name={"day-sunny"} className={''} size={sizeIcon}/>;
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
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;