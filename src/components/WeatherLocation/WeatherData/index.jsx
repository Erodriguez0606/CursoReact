import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
//eslint-disable-next-line
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weathers'; 
import './styles.css';

const WeatherData = ()  => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={20} weatherState={CLOUD}/>
        <WeatherExtraInfo humidity={"80"} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;