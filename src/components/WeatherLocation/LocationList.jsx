import React from 'react';
import WeatherLocation from '../WeatherLocation';


const LocationList = () =>(
    <div>
        <WeatherLocation city={'Ciudad de México'}/>
        <WeatherLocation city={'Coyoacan'}/>
        <WeatherLocation city={'Tlalpan'}/>
    </div>
)

export default LocationList;