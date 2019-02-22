import convert from 'convert-units';
// eslint-disable-next-line
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../constants/weathers'; 


const transformWeather = weather_data =>{
    const {humidity, temp } = weather_data.main;
    const {speed}= weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp)
    const data = {
        temperature,
        weatherState,
        humidity,
        wind: `${speed} m/s`
    }
    return data;
}

const getWeatherState = weather_data => {
    return SUN;
}

const getTemp = kelvin =>(convert(kelvin).from("K").to("C").toFixed(2));


export default transformWeather;