import React, { Component } from "react";
import PassengerList from "./PassengerList";
import ViewPassenger from "./ViewPassenger";
import UpdatePassenger from "./UpdatePassenger";
import AddPassenger from "./AddPassenger";
import { connect } from "react-redux";
import { fetchPassengers } from "../actions";

class PassengerMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: "list",
      selectedPassengerId: "",
      selectedPassenger: ""
    };
  }

  componentDidMount() {
    this.props.fetchPassengers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.screen !== prevProps.screen) {
      this.props.fetchPassengers();
    }
  }

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
      .then(this.props.fetchPassengers);
  };

  render() {
    console.log(this.props);

    let presentScreen;
    if (this.props.screen === "list") {
      presentScreen = (
        <PassengerList
          passengerList={this.props.passengerList}
          deletePassenger={this.deletePassenger}
          loading={this.props.loading}
        />
      );
    } else if (this.props.screen === "view") {
      presentScreen = <ViewPassenger />;
    } else if (this.props.screen === "edit") {
      presentScreen = (
        <UpdatePassenger updatePassenger={this.updatePassenger} />
      );
    } else if (this.props.screen === "create") {
      presentScreen = <AddPassenger />;
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
  loading: state.passengers.loading,
  screen: state.screen
});

const mapDispatchToProps = dispatch => ({
  fetchPassengers: () => dispatch(fetchPassengers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PassengerMain);
