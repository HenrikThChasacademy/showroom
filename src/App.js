import React, { Component } from 'react';
import './style/App.scss';
import axios from 'axios';
import Cars from './components/cars/cars';
import CarSpecs from './components/car-specs/car-specs';

const SHOWROOM_SERVICE_URL = '/car';
const SHOWROOM_API_URL = 'http://ec2co-ecsel-zljb6vewvqz1-1826011212.eu-west-1.elb.amazonaws.com:81';

class App extends Component {
  state = {
    carList: [],
    isFetching: false,
    isFetchingCarInfo: false,
    selectedCar: null,
    isEdit:false,
  }

  componentDidMount() {
    this.fetchCars();
  }

  fetchCars = async () => {
    try{
        this.setState({isFetching: true});
        const response = await axios(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL);
        console.log(response.data)
        this.setState({carList: response.data, isFetching: false})
    } catch(e) {
        console.log(e);
        this.setState({isFetching: false});
    };
  }

  fetchCar = async (id) => {
    try{
      this.setState({isFetchingCarInfo: true});
      const response = await axios(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL+'/' +id);
      console.log(response.data)
      this.setState({selectedCar: response.data, isFetchingCarInfo: false})
    } catch(e) {
        console.log(e);
        this.setState({isFetchingCarInfo: false});
    };
  }

  handleAddNewCar = async () => {
    let newCar = { brand: '', model: '', year: '', engine: '', effect: '', imagePath: ''}
    this.setState({selectedCar: newCar, isEdit: true})
  }

  handleSaveCar = async (car) => {
    try{
      this.setState({isFetchingCarInfo: true});
      await axios.post(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL, car);
      await this.fetchCars();
      this.setState(state => ({
        selectedCar: null, isFetchingCarInfo: false,
        isEdit: false
      }))
    } catch(e) {
        console.log(e);
        this.setState({isFetchingCarInfo: false});
    };
  }

  handleRemoveCar = async (id) => {
    try{
      this.setState({isFetchingCarInfo: true});
      console.log(id);
      await axios.delete(SHOWROOM_API_URL+SHOWROOM_SERVICE_URL +'/' +id);
      await this.fetchCars();
      this.setState(state => ({
        selectedCar: null, isFetchingCarInfo: false,
        isEdit: false
      }))
    } catch(e) {
        console.log(e);
        this.setState({isFetchingCarInfo: false});
    };
  }

  handleEditCarValue = (value) => {
    console.log(value);
    this.setState(state => ({
      ...state.selectedCar,
        selectedCar: value
    }))
  }

  handleEditCar = () => {
    this.setState(state => ({
      isEdit: !state.isEdit
    }))
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
            handleAddNewCar={this.handleAddNewCar}
            />
          }
          {
            this.state.selectedCar &&
            <CarSpecs
              handleBack={this.handleBack}
              car={this.state.selectedCar}
              isEdit={this.state.isEdit}
              handleEditCar={this.handleEditCar}
              handleSaveCar={this.handleSaveCar}
              handleEditCarValue={this.handleEditCarValue}
              handleRemoveCar={this.handleRemoveCar}
            />
          }
        </div>
        <div className="App-footer fixed-bottom"></div>
      </div>
      
    );
  }
}

export default App;
