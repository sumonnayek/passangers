import React, { Component } from "react";
import { setScreen, setSelectedPassenger } from "../actions";
import { connect } from "react-redux";

class ViewPassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onScreenChange = this.onScreenChange.bind(this);
    console.log("view");
  }

  setPassenger = () => {};

  componentDidMount() {
    this.props.setPassenger();
  }

  onScreenChange() {
    this.props.onScreenChange("list");
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Passenger Details</h3>
        <div>{JSON.stringify(this.props.passenger, null, 4)}</div>
        <button onClick={() => this.props.setScreen("list")}>Back</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  passengerList: state.passengers.passengerList,
  passenger: state.passenger
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen)),
  setPassenger: () => dispatch(setSelectedPassenger())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPassenger);
