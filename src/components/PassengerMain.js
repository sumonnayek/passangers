import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import { connect } from "react-redux";
import { fetchPassengers } from '../actions'

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "list",
      selectedPassengerId: "",
      selectedPassenger: "",
    };
  }

  componentDidMount() {
    this.props.fetchPassengers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.screen !== prevState.screen) {
      // this.fetchPassenger();
    }
  }

  onScreenChange = screen => {
    this.setState({ screen });
  };

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
    console.log(this.props)

    let presentScreen;
    if (this.state.screen === "list") {
      presentScreen = (
        <PassengerList
          onScreenChange={this.onScreenChange}
          setSelectedPassenger={this.setSelectedPassenger}
          passengerList={this.props.passengerList}
          deletePassenger={this.deletePassenger}
          loading={this.props.loading}
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

const mapStateToProps = state => ({
   passengerList: state.passengers.passengerList,
   loading: state.passengers.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPassengers : () => dispatch(fetchPassengers())
})

export default connect(mapStateToProps, mapDispatchToProps)(PassengerMain)
