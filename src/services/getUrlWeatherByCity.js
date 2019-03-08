import {url_base, api_Key}  from '../constants/api_url'

const getUrlWeatherByCity = city =>{
    let locationID;

    switch(city){
        case 'Ciudad de México':
        locationID = '3527646';
        break;
        case 'Coyoacan':
        locationID = '3530139';
        break;
        case 'Tlalpan':
        locationID = '3515428';
        break;
        case 'Culiacan':
        locationID = '4012176';
        break;
        // no default
    }

    return `${url_base}?id=${locationID}&appid=${api_Key}`;
}


export default getUrlWeatherByCity;