import React, { Component } from 'react';
import './style/App.scss';
import axios from 'axios';
import Cars from './components/cars/cars';
import CarSpecs from './components/car-specs/car-specs';

const SHOWROOM_SERVICE_URL = 'car';
const SHOWROOM_API_URL = './data/';
const FILE_EXTENSION = '.json';
class App extends Component {
  state = {
    carList: [],
    isFetching: false,
    isFetchingCarInfo: false,
    selectedCar: null,
  }

  componentDidMount() {
    this.fetchCars();
  }

  fetchCars = async () => {
    try{
        this.setState({isFetching: true});
        const response = await axios(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL+FILE_EXTENSION);
        console.log(response.data.carList)
        this.setState({carList: response.data.carList, isFetching: false})
    } catch(e) {
        console.log(e);
        this.setState({isFetching: false});
    };
  }

  fetchCar = async (id) => {
    try{
      this.setState({isFetchingCarInfo: true});
      const response = await axios(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL+'/'+id+FILE_EXTENSION);
      console.log(response.data)
      this.setState({selectedCar: response.data, isFetchingCarInfo: false})
  } catch(e) {
      console.log(e);
      this.setState({isFetchingCarInfo: false});
  };
  }

  handleCarClick = (id) => {
    console.log("clicked " +id);
    this.fetchCar(id);
  }

  handleBack = () => {
    this.setState({
      selectedCar: null
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header fixed-top">
          <p>
            Supercar Shoowroom
          </p>
        </header>
        <div className="App-body">
          {
            !this.state.selectedCar &&
            <Cars 
            carList={this.state.carList}
            handleCarClick={this.handleCarClick}
            />
          }
          {
            this.state.selectedCar &&
            <CarSpecs
              handleBack={this.handleBack}
              car={this.state.selectedCar}
            />
          }
        </div>
        <div className="App-footer fixed-bottom"></div>
      </div>
      
    );
  }
}

export default App;
