import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import { resolve, reject } from "q";
import PassengerTableRow from "./PassengerTableRow";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengerList: [],
      screen: "list",
      selectedPassengerId: "",
      selectedPassenger: "",
      loading: false
    };
    this.fetchPassenger = this.fetchPassenger.bind(this);
  }

  fetchPassenger() {
    this.setState({ loading: true });
    setTimeout(()=> {
      fetch("http://localhost:5000/passengers")
      .then(response => response.json())
      .then(data => {
        this.setState({ passengerList: data , loading: false});
      })
      .catch(console.log);
    },1500)
    
  }

  componentDidMount() {
    this.fetchPassenger();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.screen !== prevState.screen) {
      this.fetchPassenger();
    }
  }

  onScreenChange = screen => {
    this.setState({ screen });
  };

  // getPassenger = passenger => {
  //   if (passenger.id === this.state.selectedPassengerId) {
  //     return passenger;
  //   }
  // };

  setSelectedPassenger = selectedPassengerId => {
    this.setState({ selectedPassengerId }, () => {
      const { passengerList, selectedPassengerId } = this.state;
      this.setState({
        selectedPassenger: passengerList.find(
          ({ _id }) => _id === selectedPassengerId
        )
      });
    });
  };

  deletePassenger = id => {
    fetch(`http://localhost:5000/passengers/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(this.fetchPassenger);
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
          loading={this.state.loading}
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
          fetchPassenger={this.fetchPassenger}
        />
      );
    } else if (this.state.screen === "create") {
      presentScreen = <AddPassenger onScreenChange={this.onScreenChange} />;
    }
    return (
      <div>
        {presentScreen}
        {/* {this.state.loading && <div>Loading...</div>} */}
      </div>
    );
  }
}

export default PassengerMain;
