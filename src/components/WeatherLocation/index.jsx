import React,{Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'


class WeatherLocation extends Component{ 

    state = {
        city: this.props.city,
        data: null
    }
    

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {

    }
    

    handleUpdateClick=()=>{
        const {city}=this.state;
        fetch(getUrlWeatherByCity(city)).then(resolve =>{
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({data: newWeather});
        });
    }

    render(){
        const {city, data}=this.state;
        return(
            <div className={'weatherLocationCont'}>
             <Location city={city} />
             {(data)?<WeatherData data={data}/>:<CircularProgress size={80}/>}
            </div>
        );
    }
 }

 WeatherLocation.propTypes ={
     city: PropTypes.string.isRequired
 }

export default WeatherLocation;