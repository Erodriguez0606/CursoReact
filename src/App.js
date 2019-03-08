import React, { Component } from 'react';
//import logo from './logo.svg';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';


const cities =[
  'Ciudad de México',
  'Coyoacan',
  'Tlalpan',
  'Culiacan'
]

class App extends Component {

  handleSelectionLocation = city =>{
    console.log(city);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
        </header>
      </div>
    );
  }
}

export default App;
