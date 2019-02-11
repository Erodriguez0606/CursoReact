import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    cloud:"cloud",
    cloudy:"cloudy",
    sun: "day-sunny",
    rain:"rain",
    snow:"snow",
    windy:"windy"
}

const getWheaterIcon = (weatherState)=>{
    const icon = icons[weatherState]
    return (icon)?<WeatherIcons name={icon} size="2x"/> : <WeatherIcons name={"day-sunny"} size="2x"/>;
    
};

const  WeatherTemperature = ({temperature, weatherState}) => (

    <div>
        {getWheaterIcon(weatherState)}
        <span>{`${temperature}°C`}</span></div>
);

export default WeatherTemperature;