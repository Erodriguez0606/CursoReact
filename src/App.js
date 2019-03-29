import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//import logo from './logo.svg';
import {Grid, Col, Row} from 'react-flexbox-grid';
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
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  WeatherApp
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row> 
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <div className="details"></div>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
