import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengerList: [
        {
          id: 123,
          name: "Sumon",
          gender: "male",
          phone: 8383838838,
          email: "sumon@gmail.com",
          departure: "Bangalore"
        },
        {
          id: 343,
          name: "Jai",
          gender: "male",
          phone: 2984928349,
          email: "jai@sds.com",
          departure: "pune"
        },
        {
          id: 657,
          name: "Radha",
          gender: "female",
          phone: 873248762,
          email: "radha@sfs.com",
          departure: "kolkata"
        }
      ],
      screen: "list",
      selectedPassengerId: "",
      selectedPassenger: ""
    };
    console.log(this.state.passengerList);
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
    console.log(selectedPassengerId)
    // this.setState({ selectedPassengerId });
    // console.log(this.state.passengerList[0])
    // let passenger = this.state.PassengerList.find(this.getPassenger);
    // if(passenger) {
    //     this.setState({
    //         selectedPassenger: passenger
    //     })
    // }

    this.setState({ selectedPassengerId }, () => {
      const {passengerList, selectedPassengerId} = this.state;
      this.setState({selectedPassenger: passengerList.find(({id}) => 
        id === selectedPassengerId
      )});
    });
  };

  addPassenger = newPassenger => {
    newPassenger = JSON.parse(newPassenger);
    let joined = this.state.passengerList.concat(newPassenger)
    this.setState({
      passengerList: joined
    });
  };
  updatePassenger = (id, updatedPassenger) => {
    const{passengerList} = this.state;
    updatedPassenger.id = id;
    console.log(updatedPassenger);

    // passengerList[passengerList.map((x, i) => [i, x]).filter( 
    //   x => x[1].id === id)[0][0]] = updatedPassenger; 
    const updatedList = passengerList.map(passenger => 
      passenger.id === id ? {...updatedPassenger} : passenger
    );
    console.log(updatedList)
    this.setState({
      passengerList: updatedList
    })
  };
  deletePassenger = (id) => {
    console.log(id);
    const passenger = this.state.passengerList.filter( passenger => passenger.id !== id);
    this.setState({ passengerList: passenger}); 
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
