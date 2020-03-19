import React, { Component } from "react";
import PassangerList from "./PassangerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassanger from "./UpdatePassanger";
import AddPassanger from "./AddPassanger";

class PassangerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passangerList: [
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
      selectedPassangerId: "",
      selectedPassanger: ""
    };
    console.log(this.state.passangerList);
  }
  onScreenChange = screen => {
    this.setState({ screen });
  };
  getPassanger = passanger => {
    if (passanger.id === this.state.selectedPassangerId) {
      return passanger;
    }
  };
  //   addPassangerScreen= () => {
  //     this.onScreenChange('create');
  //   }
  setSelectedPassanger = selectedPassangerId => {
    this.setState({ selectedPassangerId });
    // console.log(this.state.passangerList[0])
    // let passanger = this.state.PassangerList.find(this.getPassanger);
    // if(passanger) {
    //     this.setState({
    //         selectedPassanger: passanger
    //     })
    // }
    let passanger;
    for (let i = 0; i < this.state.passangerList.length; i++) {
      passanger = this.getPassanger(this.state.passangerList[i]);
      if (passanger) break;
    }
    if (passanger) {
      this.setState({
        selectedPassanger: passanger
      });
    }
  };

  addPassanger = newPassanger => {
    newPassanger = JSON.parse(newPassanger);
    let joined = this.state.passangerList.concat(newPassanger)
    this.setState({
      passangerList: joined
    });
  };
  updatePassenger = (id, updatedPassanger) => {
    // console.log(id, updatedPassanger);
    updatedPassanger.id = id;
    console.log(updatedPassanger);
  };
  deletePassanger = (id) => {
    console.log(id);
    const passanger = this.state.passangerList.filter( passanger => passanger.id !== id);
    this.setState({ passangerList: passanger}); 
  };
  render() {
    let presentScreen;
    if (this.state.screen === "list") {
      presentScreen = (
        <PassangerList
          onScreenChange={this.onScreenChange}
          setSelectedPassanger={this.setSelectedPassanger}
          passangerList={this.state.passangerList}
          deletePassanger={this.deletePassanger}
        />
      );
    } else if (this.state.screen === "view") {
      presentScreen = (
        <ViewPassenger
          selectedPassanger={this.state.selectedPassanger}
          onScreenChange={this.onScreenChange}
        />
      );
    } else if (this.state.screen === "edit") {
      presentScreen = (
        <UpdatePassanger
          selectedPassanger={this.state.selectedPassanger}
          onScreenChange={this.onScreenChange}
          updatePassanger={this.updatePassenger}
        />
      );
    } else if (this.state.screen === "create") {
      presentScreen = (
        <AddPassanger
          onScreenChange={this.onScreenChange}
          addPassanger={this.addPassanger}
        />
      );
    }
    return (
      <div>
        {presentScreen}
        {/* <button onClick={this.addPassangerScreen}>Add Passanger</button> */}
      </div>
    );
  }
}

export default PassangerMain;
