import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengerList: [],
      screen: "list",
      selectedPassengerId: "",
      selectedPassenger: ""
    };
    this.fetchPassenger = this.fetchPassenger.bind(this);
    this.addPassenger = this.addPassenger.bind(this);
  }
  fetchPassenger() {
    fetch('http://localhost:5000/passengers')
    .then(response => response.json())
    .then((data) => {
      this.setState({ passengerList: data })
    })
    .catch(console.log)
  }
  componentDidMount() {
    this.fetchPassenger();
  }
  onScreenChange = screen => {
    this.setState({ screen });
  };
  getPassenger = passenger => {
    if (passenger.id === this.state.selectedPassengerId) {
      return passenger;
    }
  };
  
  //   addPassengerScreen= () => {
  //     this.onScreenChange('create');
  //   }
  setSelectedPassenger = selectedPassengerId => {
    this.setState({ selectedPassengerId }, () => {
      const {passengerList, selectedPassengerId} = this.state;
      this.setState({selectedPassenger: passengerList.find(({id}) => 
        id === selectedPassengerId
      )});
    });
  };

    async addPassenger(newPassenger) {
    // console.log(newPassenger);
    // newPassenger = JSON.parse(newPassenger);
    // let joined = this.state.passengerList.concat(newPassenger)
    // this.setState({
    //   passengerList: joined
    // });
    let response = await fetch('http://localhost:5000/addPassenger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(newPassenger)
    });
    
    let result = await response.json();
    console.log(result.message);
  };
  updatePassenger = (id, updatedPassenger) => {
    const{passengerList} = this.state;
    const updatedList = passengerList.map(passenger => 
      passenger.id === id ? {...passenger, ...updatedPassenger} : passenger
    );
    console.log(updatedList)
    this.setState({
      passengerList: updatedList
    })
  };
  deletePassenger = (id) => {
    // const passenger = this.state.passengerList.filter( passenger => passenger.id !== id);
    // this.setState({ passengerList: passenger}); 
    fetch('http://localhost:5000/deletePassengers/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': "text/plain;charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data=> {
        console.log(data);
    })
  };
  render() {
    let presentScreen;
    if (this.state.screen === "list") {
      presentScreen = (
        <PassengerList
          onScreenChange={this.onScreenChange}
          setSelectedPassenger={this.setSelectedPassenger}
          passengerList={this.state.passengerList}
          deletePassenger={this.deletePassenger}
        />
      );
    } else if (this.state.screen === "view") {
      presentScreen = (
        <ViewPassenger
          selectedPassenger={this.state.selectedPassenger}
          onScreenChange={this.onScreenChange}
        />
      );
    } else if (this.state.screen === "edit") {
      presentScreen = (
        <UpdatePassenger
          selectedPassenger={this.state.selectedPassenger}
          onScreenChange={this.onScreenChange}
          updatePassenger={this.updatePassenger}
        />
      );
    } else if (this.state.screen === "create") {
      presentScreen = (
        <AddPassenger
          onScreenChange={this.onScreenChange}
          addPassenger={this.addPassenger}
        />
      );
    }
    return (
      <div>
        {presentScreen}
        {/* <button onClick={this.addPassengerScreen}>Add Passenger</button> */}
      </div>
    );
  }
}

export default PassengerMain;
