import React, { Component } from "react";
import PassengerTable from "./PassengerTable";
import { connect } from "react-redux";
import { setScreen } from '../actions';

class PassengerList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addPassengerScreen = () => {
    this.props.onScreenChange("create");
  };

  render() {
    return (
      <>
        <PassengerTable
          passengerList={this.props.passengerList}
          deletePassenger={this.props.deletePassenger}
        />
        {this.props.loading && <div>Loading...</div>}
        <button onClick={() => {this.props.setScreen('create')}}>Add Passenger</button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setScreen : screen => dispatch(setScreen(screen))
});

export default connect(null, mapDispatchToProps)(PassengerList);
