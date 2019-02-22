import React, { Component } from 'react';
//import logo from './logo.svg';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LocationList/>
        </header>
      </div>
    );
  }
}

export default App;
